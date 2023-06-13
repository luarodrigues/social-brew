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
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { useRouter } from "next/router";
import { MdCoffee } from "react-icons/md";

export default function SignUpCard() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push("/home-page");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#393E46"}>
      <Head>
        <title>create an account w/email</title>
      </Head>
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
                <Link
                  color={"#00ADB5"}
                  onClick={() => router.push("/sign-in-page")}
                >
                  Already have an account?
                </Link>
              </Stack>
              <Stack spacing={4}>
                <Button variant={"brandColor"} onClick={handleSignUp}>
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
