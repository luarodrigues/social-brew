import {
  Container,
  Stack,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SocialBrewLinks from "../components/SocialBrewLinks";

export default function IndexPage() {
  const router = useRouter();

  return (
    <Flex align={"center"} justify={"center"} p={"20px"}>
      <title>Social Brew</title>
      <Container maxW={"7xl"} fontFamily={"avenir"} justify={"center"}>
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
                fontFamily={"avenir"}
                color=" #222831"
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "25%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "#B6B7B9",
                  zIndex: -1,
                }}
              >
                Welcome to <br />
                <Text as={"span"} color={"#00ADB5"}>
                  SOCIAL BREW
                </Text>
              </Text>
              <Text as={"span"} color={" #222831"} fontSize={"4xl"}>
                your coffee community app
              </Text>
            </Heading>
            <Text color={"gray.500"} textAlign={{ base: "center", sm: "left" }}>
              Welcome to Social Brew, the web app for coffee lovers! Whether
              you're a barista or a coffee newbie, we've got something special
              brewing for you. Discover a new level of coffee brewing experience
              with Social Brew. Cheers to the perfect cup!
            </Text>
            <Stack
              spacing={4}
              direction={{ base: "column", sm: "row" }}
              align={{ base: "center", sm: "flex-start" }}
            >
              <Button
                variant={"brandColor"}
                onClick={() => router.push("/sign-in-page")}
              >
                Sign In
              </Button>
              <Button
                variant={"brandColor"}
                onClick={() => router.push("/sign-up-page")}
              >
                Create Account
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
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                src={
                  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/873/original/Laptop_Mockup_Testimonial_Facebook_Cover.png?1682954351"
                }
              />
            </Box>
          </Flex>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} mt={10}>
          {SocialBrewLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              color={"#00ADB5"}
              fontSize={{ base: "lg", sm: "xl" }}
              _hover={{
                color: "#222831",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                router.push(link.url);
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Container>
    </Flex>
  );
}
