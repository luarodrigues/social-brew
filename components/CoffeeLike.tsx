import { MdOutlineCoffee, MdCoffee } from "react-icons/md";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function CoffeeLike({ onClick }: Props) {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return <MdOutlineCoffee color="#0F606B" size={20} onClick={toggle} />;
  return <MdCoffee color="#0F606B" size={20} onClick={toggle} />;
}

export default CoffeeLike;
