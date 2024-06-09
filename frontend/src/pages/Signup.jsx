import { useNavigate } from "react-router-dom";
import { H1, SubH1 } from "../components/Heading";
import { InputBox } from "../components/Input";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleFname = (val) => {
    setFname(val);
  };
  const handleLname = (val) => {
    setLname(val);
  };
  const handleEmail = (val) => {
    setEmail(val);
  };
  const handlePass = (val) => {
    setPass(val);
  };

  const handleSingup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username: email,
          password: pass,
          firstName: fname,
          lastName: lname,
        }
      );
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutral-400">
      <div className="p-6 max-w-[350px] bg-white rounded-md">
        <div>
          <div>
            <H1 title={"Sign Up"} />
          </div>
          <div className="mt-2">
            <SubH1 title={"Enter your information to create an account"} />
          </div>
        </div>

        <div className="my-4">
          <InputBox
            title={"First Name"}
            type={"text"}
            placeholder={"John"}
            onChange={handleFname}
          />
        </div>
        <div className="my-4">
          <InputBox
            title={"last Name"}
            type={"text"}
            placeholder={"Doe"}
            onChange={handleLname}
          />
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
          <Button title={"Sign Up"} onClick={handleSingup} />
        </div>

        <div className="mt-4">
          <BottomWarning
            label={"Already have an account ?"}
            title={"Login"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
