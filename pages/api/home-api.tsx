import { NextApiRequest, NextApiResponse } from "next";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  DocumentData,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig/firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

interface CoffeeRecipe {
  userName: string;
  id: string;
  beans: string;
  roaster: string;
  brewMethod: string;
  comments: string;
  date: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoffeeRecipe[] | string>
) {
  try {
    const recipeRef = collection(db, "recipes");
    const recipeQuery = query(recipeRef, orderBy("date", "desc"));
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB");
    const recipeSnapshot = await getDocs(recipeQuery);
    const recipes: CoffeeRecipe[] = [];

    recipeSnapshot.forEach((doc) => {
      if (doc.exists()) {
        const data = doc.data() as DocumentData;
        recipes.push({
          date: formattedDate,
          userName: data.userName,
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
