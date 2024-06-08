import { useNavigate } from "react-router-dom";
import { H1, SubH1 } from "../components/Heading";
import { InputBox } from "../components/Input";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";

export const Signup = () => {
  const navigate = useNavigate();
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
          <InputBox title={"First Name"} type={"text"} placeholder={"John"} />
        </div>
        <div className="my-4">
          <InputBox title={"last Name"} type={"text"} placeholder={"Doe"} />
        </div>
        <div className="my-4">
          <InputBox
            title={"Email"}
            type={"email"}
            placeholder={"john@gmail.com"}
          />
        </div>
        <div className="">
          <InputBox title={"Password"} type={"password"} placeholder={""} />
        </div>
        <div className="mt-4">
          <Button title={"Sign Up"} />
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
