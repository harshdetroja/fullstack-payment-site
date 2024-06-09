import { useState } from "react";
import { H1 } from "../components/Heading";
import { InputBox } from "../components/Input";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SendMoney() {
  const [amt, setAmt] = useState(0);
  const location = useLocation();

  const { username, firstName, lastName, _id } = location.state;

  const handleAmount = (val) => {
    setAmt(val);
  };

  const handleMoneyTransfer = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `http://localhost:3000/api/v1/account/transfer`,
        {
          to: _id,
          amount: Number(amt),
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(`${err.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(err.message);
    }

    setAmt(0);
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-neutral-400">
        <div className="p-6 w-[350px] bg-white rounded-md">
          <div>
            <div>
              <H1 title={"Send Money"} />
            </div>
          </div>

          <div className="my-6">
            <div className="text-lg font-medium flex items-center gap-3">
              <div className="bg-green-500 h-12 w-12 rounded-full flex justify-center items-center">
                <span className="text-white">
                  {firstName[0].toUpperCase()}
                  {lastName[0].toUpperCase()}
                </span>
              </div>
              <div className="text-2xl font-bold">
                {firstName} {lastName}
              </div>
            </div>
          </div>

          <div className="my-4">
            <InputBox
              title={"Amount (in Rs)"}
              type={"number"}
              placeholder={"Enter amount"}
              onChange={handleAmount}
            />
          </div>

          <div className="mt-4">
            <button
              className="bg-green-500 rounded-md w-full p-2 text-white"
              onClick={handleMoneyTransfer}
            >
              Initiate Transfer
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
