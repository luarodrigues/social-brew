// import { MdOutlineCoffee, MdCoffee } from "react-icons/md";
// import { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   doc,
//   getDoc,
//   setDoc,
// } from "firebase/firestore";
// import firebaseConfig from "../firebaseConfig/firebaseConfig";

// initializeApp(firebaseConfig);
// const db = getFirestore();

// interface Props {
//   onClick: () => void;
// }

// function CoffeeLike({ onClick }: Props) {
//   const [coffeeLiked, setCoffeeLiked] = useState(false);
//   const [coffeeLikesCount, setCoffeeLikesCount] = useState(0);

//   useEffect(() => {
//     const fetchLikesCount = async () => {
//       const coffeeLikesRef = collection(db, "recipes");
//       const coffeeLikesDocRef = doc(db, "recipes", "coffeeLikes");
//       const coffeeLikesDoc = await getDoc(coffeeLikesDocRef);
//       if (coffeeLikesDoc.exists()) {
//         setCoffeeLikesCount(coffeeLikesDoc.data().count);
//       }
//     };

//     fetchLikesCount();
//   }, []);

//   const handleLike = async () => {
//     const newCoffeeLikesCount = coffeeLiked
//       ? coffeeLikesCount - 1
//       : coffeeLikesCount + 1;
//     await setDoc(doc(db, "recipes", "coffeeLikes"), {
//       count: newCoffeeLikesCount,
//     });
//     setCoffeeLiked(!coffeeLiked);
//     onClick();
//     setCoffeeLikesCount(newCoffeeLikesCount);
//   };
//   return (
//     <div onClick={handleLike}>
//       {coffeeLiked ? (
//         <MdCoffee color="#0F606B" size={20} />
//       ) : (
//         <MdOutlineCoffee color="#0F606B" size={20} />
//       )}{" "}
//       {coffeeLikesCount > 0 && <span>{coffeeLikesCount}</span>}
//     </div>
//   );
// }
// export default CoffeeLike;
