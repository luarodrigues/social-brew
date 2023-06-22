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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { useRouter } from "next/router";
import { MdCoffee } from "react-icons/md";
import Head from "next/head";

export default function SignInCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    initializeApp(firebaseConfig);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        router.push("/home-page");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleResetPassword = () => {
    initializeApp(firebaseConfig);
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent successfully");
      })
      .catch((error) => {
        console.log("Error sending password reset email:", error);
      });
  };

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#393E46"}>
      <Head>
        <title>sign in with email</title>
      </Head>

      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        fontFamily={"arial"}
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
            sign in {"  "}
            <MdCoffee style={{ marginLeft: "10px" }} />
          </Flex>
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
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
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
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                >
                  Remember me
                </Checkbox>
                <Link color={"#00ADB5"} onClick={handleResetPassword}>
                  Forgot password?
                </Link>
              </Stack>
              <Button variant={"brandColor"} onClick={handleSignIn}>
                sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
