import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function HeartLike({ onClick }: Props) {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <AiFillHeart color="#FD6853" size={20} onClick={toggle} />;
  return <AiOutlineHeart color="#FD6853" size={20} onClick={toggle} />;
}

export default HeartLike;
