import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  VStack,
  Stack,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { LuThumbsUp } from "react-icons/lu";
import HeartLike from "../components/HeartLike";

initializeApp(firebaseConfig);
const db = getFirestore();

type CoffeeRecipe = {
  id: string;
  date: string;
  userName: string;
  beans: string;
  roaster: string;
  brewMethod: string;
  comments: string;
  likes: number;
};

const AllRecipesFeed: React.FC = () => {
  const [recipes, setRecipes] = useState<CoffeeRecipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/home-api");
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        } else {
          console.error("Failed to fetch recipes:", response.status);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleLikeClick = (recipeId: string) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, likes: recipe.likes + 1 } : recipe
      )
    );
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      fontFamily={"avenir"}
      color={"#0F606B"}
    >
      <Box minW={"550px"} bg={"#A7D2DD"} rounded={"lg"}>
        {recipes.map((recipe) => (
          <Box key={recipe.id} mb={4} p={4} bg={"white"} rounded={"md"}>
            <Stack direction={"row"} align={"center"} mb={2}>
              <Avatar size={"sm"} />
              <Text fontWeight={"bold"}>{recipe.id}</Text>
            </Stack>
            <VStack align={"flex-start"}>
              <Box>Beans origin: {recipe ? recipe.beans : ""}</Box>
              <Box>Roaster: {recipe ? recipe.roaster : ""}</Box>
              <Box>Method: {recipe ? recipe.brewMethod : ""}</Box>
              <Box>My thoughts: {recipe ? recipe.comments : ""}</Box>
            </VStack>
            <Stack direction={"row"} mt={2} align={"center"}>
              <HeartLike onClick={() => console.log("liked")} />
              <Text>{isNaN(recipe.likes) ? "" : recipe.likes}</Text>

              <LuThumbsUp onClick={() => console.log("click")} />
            </Stack>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default AllRecipesFeed;
