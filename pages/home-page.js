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
        <title>Social Brew feed</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <Flex
        bg="#393E46"
        color="white"
        fontFamily="arial"
        p={8}
        flexDirection="column"
        minHeight="50vh"
      >
        <Flex align={"center"} justify={"flex-end"} p={2}>
          <Button
            variant={"brandColorGhost"}
            size={"sm"}
            onClick={() => router.push("/recipe")}
          >
            Add Recipe
          </Button>
          <Button
            variant={"brandColorGhost"}
            size={"sm"}
            onClick={() => router.push("/coffee-calculator-page")}
          >
            Coffee Calculator
          </Button>
          <Button
            variant={"brandColorSignOut"}
            size={"sm"}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Flex>
        <Flex align={"center"} justify={"center"}>
          <Text
            fontSize={{ base: "4xl", sm: "xl", lg: "5xl" }}
            textTransform="uppercase"
            mb={4}
          >
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
