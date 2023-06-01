import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function HeartLike({ onClick }: Props) {
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
        <AiFillHeart color="#FD6853" size={20} />
      ) : (
        <AiOutlineHeart color="#FD6853" size={20} />
      )}{" "}
      {likes > 0 && <span>{likes}</span>}
    </div>
  );
}
export default HeartLike;

// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { useState, useEffect } from "react";

// interface Props {
//   onClick: () => void;
// }

// interface LikeResponse {
//   likes: number;
// }

// function HeartLike({ onClick }: Props) {
//   const [liked, setLiked] = useState(false);
//   const [likes, setLikes] = useState(0);

//   useEffect(() => {
//     fetchLikes();
//   }, []);

//   const fetchLikes = async () => {
//     try {
//       const response = await fetch("/api/like-api");
//       if (response.ok) {
//         const data: LikeResponse = await response.json();
//         setLikes(data.likes);
//       } else {
//         console.error("Error fetching likes:", response.status);
//       }
//     } catch (error) {
//       console.error("Error fetching likes:", error);
//     }
//   };

//   const handleClick = async () => {
//     setLiked(!liked);
//     onClick();

//     try {
//       const response = await fetch("/api/like-api", {
//         method: "POST",
//       });
//       if (response.ok) {
//         const data: LikeResponse = await response.json();
//         setLikes(data.likes);

//         fetchLikes();
//       } else {
//         console.error("Error updating likes:", response.status);
//       }
//     } catch (error) {
//       console.error("Error updating likes:", error);
//     }
//   };

//   return (
//     <div onClick={handleClick}>
//       {/* {liked ? (
//         <AiFillHeart color="#FD6853" size={20} />
//       ) : ( */}
//       <AiOutlineHeart color="#FD6853" size={20} />
//       {/* )}{" "} */}
//       {likes > 0 && <span>{likes}</span>}
//     </div>
//   );
// }

// export default HeartLike;
