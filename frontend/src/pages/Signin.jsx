import { H1, SubH1 } from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputBox } from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";

export function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleEmail = (val) => {
    setEmail(val);
  };
  const handlePass = (val) => {
    setPass(val);
  };

  const handleSingin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username: email,
          password: pass,
        }
      );
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-neutral-400">
        <div className="p-6 max-w-[350px] bg-white rounded-md">
          <div>
            <div>
              <H1 title={"Sign In"} />
            </div>
            <div className="mt-2">
              <SubH1 title={"Enter your credentials to access your account"} />
            </div>
          </div>

          <div className="my-4">
            <InputBox
              title={"Email"}
              type={"email"}
              placeholder={"john@gmail.com"}
              onChange={handleEmail}
            />
          </div>
          <div className="my-4">
            <InputBox
              title={"Password"}
              type={"password"}
              placeholder={""}
              onChange={handlePass}
            />
          </div>

          <div className="mt-4">
            <Button title={"Sign In"} onClick={handleSingin} />
          </div>

          <div className="mt-4">
            <BottomWarning
              label={"Don't have an account ?"}
              title={"Login"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
