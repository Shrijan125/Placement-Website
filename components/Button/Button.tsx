interface buttonProps {
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, handleClick }: buttonProps) {
  return (
    <button
      onClick={handleClick}
      className="bg-primarycolor cursor-pointer p-4 text-white whitespace-nowrap text-xl font-bold rounded-full hover:bg-hovercolor transition-all ease-in-out duration-150 hover:shadow-xl"
    >
      {text}
    </button>
  );
}
