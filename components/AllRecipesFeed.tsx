import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { Box, Flex, VStack, Text, Stack, Avatar } from "@chakra-ui/react";
import { MdOutlineCoffee, MdCoffee } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/ri";

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

interface coffeeLikeProps {
  recipeId: string;
  onClick: () => void;
}

function CoffeeLike({ recipeId, onClick }: coffeeLikeProps) {
  const [coffeeLiked, setCoffeeLiked] = useState(false);
  const [coffeeLikesCount, setCoffeeLikesCount] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchLikesCount = async () => {
      const recipeRef = doc(db, "recipes", recipeId);
      const recipeSnapshot = await getDoc(recipeRef);
      if (recipeSnapshot.exists()) {
        setCoffeeLikesCount(recipeSnapshot.data().coffeeLikes);
        setCoffeeLiked(recipeSnapshot.data().likedByCurrentUser);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    fetchLikesCount();

    return () => {
      unsubscribe();
    };
  }, [db, recipeId]);

  const handleLike = async () => {
    try {
      if (currentUser) {
        const recipeRef = doc(db, "recipes", recipeId);
        const recipeSnapshot = await getDoc(recipeRef);

        if (recipeSnapshot.exists()) {
          const currentCoffeeLikes = recipeSnapshot.data().coffeeLikes || 0;
          const newCoffeeLikesCount = coffeeLiked
            ? currentCoffeeLikes - 1
            : currentCoffeeLikes + 1;

          await updateDoc(recipeRef, {
            coffeeLikes: newCoffeeLikesCount,
          });

          const likedByCurrentUser = !coffeeLiked;

          if (likedByCurrentUser) {
            await updateDoc(recipeRef, {
              likedBy: arrayUnion(currentUser.uid),
            });
          } else {
            await updateDoc(recipeRef, {
              likedBy: arrayRemove(currentUser.uid),
            });
          }

          setCoffeeLiked(likedByCurrentUser);
          onClick();
          setCoffeeLikesCount(newCoffeeLikesCount);
        }
      }
    } catch (error) {
      console.error("Error updating coffeeLikes:", error);
    }
  };

  return (
    <div onClick={handleLike}>
      {coffeeLiked ? (
        <MdCoffee color="#0F606B " size={20} />
      ) : (
        <MdOutlineCoffee color="#A7D2DD " size={20} />
      )}{" "}
      {coffeeLikesCount > 0 && <span>{coffeeLikesCount}</span>}
    </div>
  );
}

function AllRecipesFeed() {
  const [recipes, setRecipes] = useState<CoffeeRecipe[]>([]);

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

    fetchData();
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
      <Box minW={"550px"} bg={"#A7D2DD"} rounded={"lg"}>
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
            <Stack direction="row" spacing={4} alignItems="center">
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
            </VStack>
            <Box fontSize={"smaller"} mt={"5px"}>
              {recipe.date}
            </Box>
            <Flex mt={4} alignItems="center">
              <CoffeeLike
                recipeId={recipe.id}
                onClick={() => handleCoffeeLike(recipe.id)}
              />
            </Flex>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default AllRecipesFeed;
