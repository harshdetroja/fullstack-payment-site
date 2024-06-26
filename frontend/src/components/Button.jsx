export const Button = ({ title, onClick }) => {
  return (
    <button
      className="text-white bg-black text-center w-full py-2 rounded-md"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
