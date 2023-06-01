import { MdOutlineCoffee, MdCoffee } from "react-icons/md";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function CoffeeLike({ onClick }: Props) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleclick = () => {
    setLiked(!liked);
    onClick();

    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div onClick={handleclick}>
      {liked ? (
        <MdCoffee color="#0F606B" size={20} />
      ) : (
        <MdOutlineCoffee color="#0F606B" size={20} />
      )}{" "}
      {likes > 0 && <span>{likes}</span>}
    </div>
  );
}
export default CoffeeLike;
