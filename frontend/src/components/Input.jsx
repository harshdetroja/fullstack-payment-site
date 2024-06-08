export const InputBox = ({ title, placeholder, type, onChange }) => {
  return (
    <div>
      <div className="text-black font-medium">{title}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="border-2 rounded-md w-full mt-2 p-2 placeholder:text-zinc-500 placeholder:text-sm"
        onChange={onChange}
      />
    </div>
  );
};
