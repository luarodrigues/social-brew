import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

export default function SimpleCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDmBSxMT3WJK40AF4K-W1oZ0p4__bTJHqs",
      authDomain: "social-brew-9d81a.firebaseapp.com",
      projectId: "social-brew-9d81a",
      storageBucket: "social-brew-9d81a.appspot.com",
      messagingSenderId: "387600670881",
      appId: "1:387600670881:web:d1c60b0b1e5f2eb92410e0",
      measurementId: "G-TD3H59BRHT",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleSignUp = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDmBSxMT3WJK40AF4K-W1oZ0p4__bTJHqs",
      authDomain: "social-brew-9d81a.firebaseapp.com",
      projectId: "social-brew-9d81a",
      storageBucket: "social-brew-9d81a.appspot.com",
      messagingSenderId: "387600670881",
      appId: "1:387600670881:web:d1c60b0b1e5f2eb92410e0",
      measurementId: "G-TD3H59BRHT",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#f7bd96"}>
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
            Social brew
          </Text>
          <Heading fontSize={"4xl"} color={"white"} textTransform={"uppercase"}>
            Sign in page
          </Heading>
          <Text fontSize={"lg"} color={"white"}>
            to enjoy all of our cool <Link color={"gray.700"}>features</Link>{" "}
            ☕️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input ttype="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#f7bd96"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#f7bd96"}
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "#f7bd96",
                  border: "2px solid #f7bd96",
                }}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              <Button
                bg={"#f7bd96"}
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "#f7bd96",
                  border: "2px solid #f7bd96",
                }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
