import { NextApiRequest, NextApiResponse } from "next";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import firebaseConfig from "../../firebaseConfig/firebaseConfig";
import firebaseAdmin from "../../firebaseConfig/firebase-admin";
// initializeApp(firebaseConfig);
// const db = getFirestore();

interface CoffeeRecipe {
  userName: string;
  id: string;
  beans: string;
  roaster: string;
  brewMethod: string;
  comments: string;
  date: string;
  userProfilePicture: string;
  coffeeLikes: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoffeeRecipe[] | string>
) {
  try {
    const db = firebaseAdmin.firestore();
    const recipeRef = db.collection("recipes");
    const recipeSnapshot = await recipeRef.orderBy("date", "desc").get();

    // const recipeQuery = query(recipeRef, orderBy("date", "desc"));
    // const recipeSnapshot = await getDocs(recipeQuery);
    const recipes: CoffeeRecipe[] = [];

    recipeSnapshot.forEach((doc) => {
      if (doc.exists) {
        const data = doc.data() as CoffeeRecipe;

        recipes.push({
          ...data,
          id: doc.id,
        });
      }
    });

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json("Internal server error");
  }
}
