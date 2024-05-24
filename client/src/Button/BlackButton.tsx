import { ButtonT } from "./Button.types";

const BlackButton = ({ onClick, name, type } :ButtonT) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className="py-2 px-4 rounded bg-black text-white text-semibold flex justify-center"
      >
        {name}
      </button>
    </div>
  );
};

export default BlackButton;
