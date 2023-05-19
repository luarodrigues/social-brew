import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { Box, VStack } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

interface Recipe {
  beans: string;
  brewMethod: string;
  roaster: string;
  comments: string;
}

const RecipeData = () => {
  const coffeeDataStyle = {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "23px",
    color: "#323233",
    alignItems: "flex-start",
  };

  const firebaseConfig = {
    apiKey: "AIzaSyBAJrEAP1h3Yjx-zCLKTP_eXUggaqV1d1E",
    authDomain: "social-brew-2.firebaseapp.com",
    projectId: "social-brew-2",
    storageBucket: "social-brew-2.appspot.com",
    messagingSenderId: "62701133382",
    appId: "1:62701133382:web:6bc4836ed15d6b09d1f447",
    measurementId: "G-39S3TF2VHV",
  };

  initializeApp(firebaseConfig);
  const db = getFirestore();

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore();
      const documentRef = doc(firestore, "recipes", "1U2n2wmeY9VKfWXg5aPc");
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
    <VStack style={coffeeDataStyle}>
      <Box h="30px">Beans origin: {recipe ? recipe.beans : ""}</Box>
      <Box h="30px">Roaster: {recipe ? recipe.roaster : ""}</Box>
      <Box h="30px">Method: {recipe ? recipe.brewMethod : ""}</Box>
      <Box h="30px">My thoughts: {recipe ? recipe.comments : ""}</Box>
    </VStack>
  );
};

export default RecipeData;
