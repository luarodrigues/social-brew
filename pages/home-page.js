import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import AllRecipesFeed from "../components/AllRecipesFeed";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <Box>
      <Head>
        <title>social brew</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <Flex
        bg="#A7D2DD"
        color="white"
        fontFamily="avenir"
        p="50px"
        flexDirection="column"
        minHeight="100vh"
      >
        <Flex align={"center"} justify={"flex-end"}>
          <Button
            m={{ base: "5px", md: "10px" }}
            variant={"brandColorGhost"}
            fontSize="16px"
            onClick={() => router.push("/recipe")}
          >
            Add Recipe
          </Button>
          <Button
            m={{ base: "5px", md: "10px" }}
            variant={"brandColorGhost"}
            fontSize="16px"
            onClick={() => router.push("/coffee-calculator")}
          >
            Coffee Calculator
          </Button>
          <Button
            m={{ base: "5px", md: "10px" }}
            variant={"brandColor"}
            fontSize="16px"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Flex>
        <Flex align={"center"} justify={"center"}>
          <Text fontSize="66px" textTransform="uppercase" mb={8}>
            SOCIAL{" "}
            <Text fontWeight="bold" as="span">
              BREw
            </Text>
          </Text>
        </Flex>
        <AllRecipesFeed />
      </Flex>
    </Box>
  );
}
