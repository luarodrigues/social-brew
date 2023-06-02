import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig/firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

interface Props {
  onClick: () => void;
}

function HeartLike({ onClick }: Props) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    const fetchLikesCount = async () => {
      const likesRef = collection(db, "likes");
      const likesDocRef = doc(db, "likes", "heart-likes");
      const likesDoc = await getDoc(likesDocRef);

      if (likesDoc.exists()) {
        setLikesCount(likesDoc.data().count);
      }
    };

    fetchLikesCount();
  }, []);

  const handleLike = async () => {
    const newLikesCount = liked ? likesCount - 1 : likesCount + 1;
    await setDoc(doc(db, "likes", "heart-likes"), {
      count: newLikesCount,
    });
    setLiked(!liked);
    onClick();
    setLikesCount(newLikesCount);
  };

  return (
    <div onClick={handleLike}>
      {liked ? (
        <AiFillHeart color="#FD6853" size={20} />
      ) : (
        <AiOutlineHeart color="#FD6853" size={20} />
      )}{" "}
      {likesCount > 0 && <span>{likesCount}</span>}
    </div>
  );
}
export default HeartLike;
