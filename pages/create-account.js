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
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#A7D2DD"}>
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
          <Text fontSize={"66px"} color={"white"} textTransform={"uppercase"}>
            Social <span style={{ fontWeight: "bold" }}>brew</span>
          </Text>
          <Heading fontSize={"2xl"} color={"white"}>
            create an account ☕️
          </Heading>
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
                <Link color={"#FD6853"} onClick={() => window.open("/signin")}>
                  Already have an account?
                </Link>
              </Stack>
              <Button
                bg={"#FD6853"}
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "#FD6853",
                  border: "2px solid #FD6853",
                }}
                onClick={handleSignUp}
              >
                create an account
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
