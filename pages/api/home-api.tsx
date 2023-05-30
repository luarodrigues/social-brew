import { NextApiRequest, NextApiResponse } from "next";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig/firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

interface CoffeeRecipe {
  id: string;
  beans: string;
  roaster: string;
  brewMethod: string;
  comments: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoffeeRecipe[] | string>
) {
  try {
    const recipeRef = collection(db, "recipes");
    const recipeSnapshot = await getDocs(recipeRef);
    const recipes: CoffeeRecipe[] = [];

    recipeSnapshot.forEach((doc) => {
      if (doc.exists()) {
        const data = doc.data() as DocumentData;
        recipes.push({
          id: doc.id,
          beans: data.beans,
          roaster: data.roaster,
          brewMethod: data.brewMethod,
          comments: data.comments,
        });
      }
    });

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json("Internal server error");
  }
}
