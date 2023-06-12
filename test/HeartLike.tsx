// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   doc,
//   getDocs,
//   setDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import firebaseConfig from "../firebaseConfig/firebaseConfig";

// initializeApp(firebaseConfig);
// const db = getFirestore();

// interface Props {
//   recipeId: string;
//   onClick: () => void;
// }

// function HeartLike({ recipeId, onClick }: Props) {
//   const [heartLiked, setHeartLiked] = useState(false);
//   const [heartLikesCount, setHeartLikesCount] = useState(0);

//   useEffect(() => {
//     const fetchLikesCount = async () => {
//       const collectionRef = collection(db, "recipes");
//       const querySnapshot = await getDocs(collectionRef);

//       querySnapshot.docs.forEach((doc) => {
//         if (doc.id === "heartLikes") {
//           setHeartLikesCount(doc.data().count);
//           setHeartLiked(true);
//         }
//       });
//     };

//     fetchLikesCount();
//   }, []);

//   const handleLike = async () => {
//     const recipeRef = doc(db, "recipes", recipeId);
//     const recipeSnapshot = await getDoc(recipeRef);

//     if (recipeSnapshot.exists()) {
//       const currentHeartLikes = recipeSnapshot.data().heartLikes || 0;
//       const newHeartLikes = heartLiked
//         ? currentHeartLikes - 1
//         : currentHeartLikes + 1;
//       await updateDoc(recipeRef, { heartLikes: newHeartLikes });

//       setHeartLikesCount(newHeartLikes);
//       setHeartLiked(!heartLiked);
//       onClick();
//     }
//     // const newHeartLikesCount = heartLiked
//     //   ? heartLikesCount - 1
//     //   : heartLikesCount + 1;

//     // const docRef = doc(db, "recipes", "heartLikes");
//     // const docSnapshot = await getDoc(docRef);

//     // if (docSnapshot.exists()) {
//     //   await updateDoc(docRef, { count: newHeartLikesCount });
//     // } else {
//     //   await setDoc(docRef, { count: newHeartLikesCount });
//     // }

//     // setHeartLiked(!heartLiked);
//     // onClick();
//     // setHeartLikesCount(newHeartLikesCount);
//   };
//   return (
//     <div onClick={handleLike}>
//       {heartLiked ? (
//         <AiFillHeart id="heartLikes" color="#00ADB5" size={20} />
//       ) : (
//         <AiOutlineHeart color="#00ADB5" size={20} />
//       )}{" "}
//       {heartLikesCount > 0 && <span>{heartLikesCount}</span>}
//     </div>
//   );
// }

// export default HeartLike;
