import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { Box, VStack } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";

interface Recipe {
  beans: string;
  brewMethod: string;
  roaster: string;
  comments: string;
}

const RecipeData = () => {
  initializeApp(firebaseConfig);
  const db = getFirestore();

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore();
      const documentRef = doc(firestore, "recipes", "C7Z6fIVl1yUWSgdwLkx0");
      onSnapshot(documentRef, (doc) => {
        if (doc.exists()) {
          const data: any = doc.data();
          setRecipe(data);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <VStack
      fontFamily="Avenir"
      fontWeight="400"
      fontSize="17px"
      lineHeight="23px"
      color="#323233"
      alignItems="flex-start"
    >
      <Box h="30px">Beans origin: {recipe ? recipe.beans : ""}</Box>
      <Box h="30px">Roaster: {recipe ? recipe.roaster : ""}</Box>
      <Box h="30px">Method: {recipe ? recipe.brewMethod : ""}</Box>
      <Box h="30px">My thoughts: {recipe ? recipe.comments : ""}</Box>
    </VStack>
  );
};

export default RecipeData;
