import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [filter, setFilter] = useState("");
  const [userData, setUsersData] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/user/bulk?filter=${filter}`
      );
      console.log(res.data);
      setUsersData(res.data.user);
    } catch (err) {
      console.log(err.message);
    }
  });

  const handleTransfer = (user) => {
    navigate("/send", { state: user });
  };

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  return (
    <>
      <div className="p-4">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
        </div>
        <div className="my-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Users..."
            className="border-[1px] w-full rounded-md py-2 px-4 "
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        <div className="my-8 space-y-4">
          {userData.length !== 0 &&
            userData.map((user, index) => {
              return (
                <div className="flex justify-between items-center" key={index}>
                  <div className="text-lg font-medium flex items-center gap-3">
                    <div className="bg-neutral-300 h-12 w-12 rounded-full flex justify-center items-center">
                      <span>
                        {user.firstName[0].toUpperCase()}
                        {user.lastName[0].toUpperCase()}
                      </span>
                    </div>
                    <div>
                      {user.firstName} {user.lastName}
                    </div>
                  </div>
                  <button
                    className="text-white bg-black py-2 px-4 rounded-md"
                    onClick={() => {
                      handleTransfer(user);
                    }}
                  >
                    Send Money
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
