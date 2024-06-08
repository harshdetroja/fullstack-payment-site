const express = require("express");
const { authMiddleware } = require("../middleware");
const { accountModel, userModel } = require("../db");
const { default: mongoose } = require("mongoose");
const app = express();

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const userBalance = await accountModel.findOne({
    userId: req.userId,
  });

  res.json({
    balance: userBalance.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const reciever = req.body;

  const sender = await accountModel
    .findOne({
      userId: req.userId,
    })
    .session(session);

  if (sender.balance < reciever.amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await accountModel
    .findOne({ userId: reciever.to })
    .session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await accountModel
    .updateOne({ userId: req.userId }, { $inc: { balance: -reciever.amount } })
    .session(session);
  await accountModel
    .updateOne({ userId: reciever.to }, { $inc: { balance: reciever.amount } })
    .session(session);

  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
});
module.exports = router;
