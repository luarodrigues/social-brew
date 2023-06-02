// import { NextApiRequest, NextApiResponse } from "next";
// import {
//   getFirestore,
//   collection,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
// } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import firebaseConfig from "../../firebaseConfig/firebaseConfig";

// initializeApp(firebaseConfig);
// const db = getFirestore();

// interface CountingLikes {
//   likes: number;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<CountingLikes[] | number>
// ) {
//   try {
//     const likesRef = collection(db, "likes");
//     const likesDocRef = doc(db, "likes", "heart-likes");

//     const likesDoc = await getDoc(likesDocRef);
//     let likesCount: number;

//     if (likesDoc.exists()) {
//       likesCount = likesDoc.data().likes || 0;
//     } else {
//       likesCount = 0;
//       await setDoc(likesDocRef, { likes: likesCount });
//     }

//     const updatedLikesCount = likesCount + 1;

//     await updateDoc(likesDocRef, { likes: updatedLikesCount });

//     const likes = [{ likes: updatedLikesCount }];

//     console.log("likes:", likes);

//     res.status(200).json(likes);
//   } catch (error) {
//     console.error("Error fetching/updating likes:", error);
//     res.status(500).json(0);
//   }
// }
