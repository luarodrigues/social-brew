import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { Flex, Text } from "@chakra-ui/react";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { MdOutlineCoffee, MdCoffee } from "react-icons/md";

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

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

        if (currentUser) {
          const likedBy = recipeSnapshot.data().likedBy || [];
          setCoffeeLiked(likedBy.includes(currentUser.uid));
        }
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    fetchLikesCount();

    return () => {
      unsubscribe();
    };
  }, [db, recipeId, currentUser]);

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
    <Flex mt="5px" align="center" onClick={handleLike}>
      {coffeeLiked ? (
        <MdCoffee color="#222831 " size={21} />
      ) : (
        <MdOutlineCoffee color="#B6B7B9 " size={20} />
      )}{" "}
      {coffeeLikesCount > 0 && (
        <Text fontSize="12px" mx="5px">
          {coffeeLikesCount}
        </Text>
      )}
    </Flex>
  );
}
export default CoffeeLike;
