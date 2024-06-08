import { Link } from "react-router-dom";

export const BottomWarning = ({ label, title, to }) => {
  return (
    <div className="text-sm text-center space-x-2 font-medium">
      <span className="">{label}</span>
      <Link className="underline" to={to}>
        {title}
      </Link>
    </div>
  );
};
