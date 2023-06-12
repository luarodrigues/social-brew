import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { Box, Flex, VStack, Text, Stack, Avatar } from "@chakra-ui/react";
import { RiUserSmileLine } from "react-icons/ri";
import CoffeeLike from "./CoffeeLike";

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

interface CoffeeRecipe {
  id: string;
  userName: string;
  beans: string;
  roaster: string;
  brewMethod: string;
  comments: string;
  date: string;
  coffeeLikes: number;
}

function AllRecipesFeed() {
  const [recipes, setRecipes] = useState<CoffeeRecipe[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/home-api`);
        const recipeFeed = await response.json();

        setRecipes(recipeFeed);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    fetchData();

    return () => {
      unsubscribe();
    };
  }, []);

  const handleCoffeeLike = (recipeId: string) => {
    console.log("clicked for recipe ID:", recipeId);
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      fontFamily={"avenir"}
      color={"#0F606B"}
    >
      <Box minW={"sm"} bg={"#A7D2DD"} rounded={"lg"}>
        {recipes.map((recipe) => (
          <Box
            key={recipe.id}
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg="white"
            mb={4}
          >
            <Stack direction="row" mb={2} alignItems="center">
              <Avatar
                size="sm"
                bg="#FD6853"
                icon={<RiUserSmileLine fontSize="1.5rem" />}
              />
              <Text>{recipe.userName}</Text>
            </Stack>
            <VStack align={"flex-start"}>
              <Box>Beans origin: {recipe ? recipe.beans : ""}</Box>
              <Box>Roaster: {recipe ? recipe.roaster : ""}</Box>
              <Box>Method: {recipe ? recipe.brewMethod : ""}</Box>
              <Box>Recipe: {recipe ? recipe.comments : ""}</Box>
              <Box fontSize={"xs"} mt={"5px"}>
                {recipe.date}
              </Box>
            </VStack>
            <Stack align="flex-start" justify={"center"}>
              {currentUser && (
                <CoffeeLike
                  recipeId={recipe.id}
                  onClick={() => handleCoffeeLike(recipe.id)}
                />
              )}
            </Stack>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default AllRecipesFeed;
