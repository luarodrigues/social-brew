import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect } from "react";

export default function SignInCard() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth();

      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
      setIsRedirecting(true);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    }
  };
  useEffect(() => {
    if (isRedirecting) {
      setTimeout(() => {
        router.push("/home-page");
      }, 4000);
    }
  }, [isRedirecting, router]);
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#A7D2DD"}>
      <title>sign in page</title>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        fontFamily={"avenir"}
      >
        <Stack align={"center"}>
          <Text fontSize={"66px"} color={"white"} textTransform={"uppercase"}>
            Social <span style={{ fontWeight: "bold" }}>brew</span>
          </Text>
          <Heading fontSize={"2xl"} color={"white"}>
            sign in ☕️
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Button
                variant={"brandColor"}
                onClick={() => router.push("/sign-in-page-email")}
              >
                Sign in with email
              </Button>
              <Button
                variant={"brandColor"}
                onClick={handleGoogleSignIn}
                leftIcon={<FcGoogle />}
              >
                Sign up with Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
