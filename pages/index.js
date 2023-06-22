import {
  Container,
  Stack,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function IndexPage() {
  const router = useRouter();

  return (
    <Flex align={"center"} justify={"center"} p={"20px"}>
      <Head>
        <title>Social Brew</title>
      </Head>

      <Container maxW={"7xl"} fontFamily={"arial"} justify={"center"}>
        <Stack
          align={"center"}
          spacing={8}
          py={20}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={5}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Text
                fontFamily={"arial"}
                color=" #222831"

                // as={"span"}
                // position={"relative"}
                // _after={{
                //   content: "''",
                //   width: "full",
                //   height: "25%",
                //   position: "absolute",
                //   bottom: 1,
                //   left: 0,
                //   bg: "#B6B7B9",
                //   zIndex: -1,
                // }}
              >
                Welcome to <br />
                <Text color={"#00ADB5"}>SOCIAL BREW</Text>
              </Text>
              <Text
                as={"span"}
                color={" #222831"}
                f
                fontSize={{ base: "xl", sm: "xl", lg: "4xl" }}
              >
                the coffee community app
              </Text>
            </Heading>
            <Text color={"gray.500"} textAlign={{ base: "center", sm: "left" }}>
              Social Brew is a web app for coffee lovers! Whether you're a
              barista or a coffee newbie, this app is for you. Share your coffee
              recipes with your friends!
            </Text>
            <Stack
              spacing={4}
              direction={{ base: "column", sm: "row" }}
              align={{ base: "center", sm: "flex-start" }}
            >
              <Button
                size={"sm"}
                variant={"brandColor"}
                onClick={() => router.push("/sign-in-page")}
              >
                Sign In
              </Button>
              <Button
                size={"sm"}
                variant={"brandColor"}
                onClick={() => router.push("/sign-up-page")}
              >
                Create Account
              </Button>
              <Button
                bg="white"
                border="1px solid #393E46"
                color="#393E46"
                _hover={{ bg: "#393E46", color: "white" }}
                size={"sm"}
                onClick={() => router.push("/coffee-calculator-page")}
              >
                Coffee Calculator
              </Button>
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"SB Image"}
                fit={"cover"}
                align={"center"}
                src={"https://shorturl.at/oVY18"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
}
