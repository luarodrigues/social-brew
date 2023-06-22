import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import {
  Box,
  Flex,
  VStack,
  Text,
  Stack,
  Avatar,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { RiUserSmileLine } from "react-icons/ri";
import CoffeeLike from "./CoffeeLike";

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

interface CoffeeRecipe {
  id: string;
  userName: string;
  user: string;
  userId: string;
  beans: string;
  roaster: string;
  brewMethod: string;
  comments: string;
  date: string;
  coffeeLikes: number;
  userProfilePicture: string;
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
    // console.log("clicked for recipe ID:", recipeId);
  };

  const handleDeleteRecipe = async (recipeId: string) => {
    try {
      const recipeRef = doc(db, "recipes", recipeId);
      await deleteDoc(recipeRef);
      // console.log("Recipe deleted:", recipeId);

      setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      fontFamily={"arial"}
      color={"#222831"}
    >
      <Box minW={"sm"} bg={"#393E46"} rounded={"lg"}>
        {recipes.map((recipe) => (
          <Box
            key={recipe.id}
            p={4}
            shadow="md"
            borderRadius="md"
            bg="#EEEEEE"
            mb={4}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={2}>
              {recipe.userProfilePicture ? (
                <Avatar
                  size="sm"
                  bg="#00ADB5"
                  name={recipe.userName}
                  src={recipe.userProfilePicture}
                />
              ) : (
                <Avatar
                  size="sm"
                  bg="#00ADB5"
                  icon={<RiUserSmileLine fontSize="1.5rem" />}
                />
              )}
              <Box flex="1" ml={2}>
                <Text fontWeight={"bold"}>{recipe.userName}</Text>
              </Box>
              <Flex justifyContent="flex-end" alignItems="flex-end">
                {currentUser && currentUser.uid === recipe.userId && (
                  <Menu>
                    <MenuButton as={Link} variant="ghost">
                      <BsThreeDots />
                    </MenuButton>
                    <MenuList
                      alignItems="center"
                      minW="0"
                      maxW={"inherit"}
                      minH="0"
                      maxH={"inherit"}
                    >
                      <MenuItem
                        fontSize={"sm"}
                        fontFamily={"arial"}
                        onClick={() => handleDeleteRecipe(recipe.id)}
                      >
                        delete recipe
                      </MenuItem>
                    </MenuList>
                  </Menu>
                )}
              </Flex>
            </Flex>

            <VStack align={"flex-start"}>
              <Box>
                <strong>Beans origin:</strong> {recipe ? recipe.beans : ""}
              </Box>
              <Box>
                <strong>Roaster:</strong> {recipe ? recipe.roaster : ""}
              </Box>
              <Box>
                <strong>Method:</strong> {recipe ? recipe.brewMethod : ""}
              </Box>
              <Box>
                <strong>Recipe:</strong> {recipe ? recipe.comments : ""}
              </Box>
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
