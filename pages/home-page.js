import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Box, Flex, Stack, Text } from "@chakra-ui/react";
import AllRecipesFeed from "../components/AllRecipesFeed";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function HomePage() {
  const router = useRouter();

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
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
            m="10px"
            variant={"brandColor"}
            fontSize="16px"
            onClick={() => router.push("/recipe")}
          >
            Add Recipe
          </Button>
          <Button
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
