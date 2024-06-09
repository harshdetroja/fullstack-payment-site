import { Balance } from "../components/Balance";
import { Navbar } from "../components/Navbar";
import { Users } from "../components/Users";

export function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="my-4">
        <Balance />
      </div>
      <div>
        <Users />
      </div>
    </>
  );
}
