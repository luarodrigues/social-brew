import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { MdCoffee } from "react-icons/md";

export default function SignUpCard() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleGoogleSignUp = async () => {
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
      }, 2000);
    }
  }, [isRedirecting, router]);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#393E46"}>
      <title>create an account</title>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        fontFamily={"avenir"}
      >
        <Stack align={"center"}>
          <Text fontSize={"58px"} color={"white"} textTransform={"uppercase"}>
            Social <span style={{ fontWeight: "bold" }}>brew</span>
          </Text>
          <Flex
            fontSize={"2xl"}
            color={"white"}
            align={"center"}
            justify={"center"}
          >
            create an account{"  "}
            <MdCoffee style={{ marginLeft: "10px" }} />
          </Flex>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <Stack spacing={4}>
              <Button
                variant={"brandColor"}
                onClick={() => router.push("/sign-up-page-email")}
              >
                Sign up with email
              </Button>
              <Button
                variant={"brandColor"}
                onClick={handleGoogleSignUp}
                leftIcon={<FcGoogle />}
              >
                Sign up with Google
              </Button>

              <Stack spacing={4}>
                <Link
                  color={"#00ADB5"}
                  onClick={() => router.push("/sign-in-page")}
                >
                  Already have an account?
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
