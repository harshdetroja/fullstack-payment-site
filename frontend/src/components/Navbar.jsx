import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b-[1px]">
        <div>
          <h1 className="text-3xl font-bold">Payments App</h1>
        </div>
        <div className="text-lg font-medium flex items-center gap-3">
          <div>Hello, User </div>
          <div className="relative">
            <button
              className="bg-neutral-300 h-12 w-12 rounded-full flex justify-center items-center"
              onClick={() => {
                setToggle((prev) => {
                  console.log(prev);
                  return !prev;
                });
              }}
            >
              <span>U</span>
            </button>
            {toggle && (
              <div className="absolute bg-neutral-300 px-2 pb-1 top-14 right-1 rounded-md ">
                <button className="text-sm" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
