import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  const fetchBalance = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setBalance(res.data.balance);
    } catch (err) {
      console.log(err.message);
    }
  });

  useEffect(() => {
    fetchBalance();
  }, []);
  return (
    <>
      <div className="text-2xl font-bold p-4">
        Your Balance ₹{balance.toFixed(2)}
      </div>
    </>
  );
};
