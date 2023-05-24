import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react";

const socialBrewLinks = [
  {
    title: "🧮 coffee calculator",
    url: "/coffee-calculator",
  },
  {
    title: " ☕️ methods guide",
    url: "https://blog.bluebottlecoffee.com/posts/how-to-choose-a-brew-method",
  },
  {
    title: "🧑‍🍳 your recipe",
    url: "/recipe",
  },
];

const SignButton = (props) => (
  <Button
    color={"#0f606b"}
    rounded={"full"}
    size={"lg"}
    fontWeight={"normal"}
    px={6}
    transition="background-color 0.3s ease-in-out"
    _hover={{
      transform: "scale(0.98)",
    }}
    {...props}
    onClick={() => window.open("/sign-in-page", "_blank")}
  >
    Sign In
  </Button>
);
const CreateAccountButton = (props) => (
  <Button
    color={"#0f606b"}
    rounded={"full"}
    size={"lg"}
    fontWeight={"normal"}
    px={6}
    transition="background-color 0.3s ease-in-out"
    _hover={{
      transform: "scale(0.98)",
    }}
    {...props}
    onClick={() => window.open("/sign-up-page")}
  >
    Create Account
  </Button>
);

export default function indexPage() {
  return (
    <Flex align={"center"} justify={"center"} p={"50px"}>
      <title>welcome to social brew</title>
      <Container maxW={"7xl"} fontFamily={"avenir"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                fontFamily={"avenir"}
                color=" #0F606B"
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "#A7D2DD",
                  zIndex: -1,
                }}
              >
                Welcome to <br />
                <span style={{ color: "#FD6853" }}>SOCIAL BREW</span>
              </Text>
              <br />
              <Text as={"span"} color={" #0F606B"} fontSize={"4xl"}>
                your coffee community app
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              sit ullam adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et do
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <SignButton />
              <CreateAccountButton />
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <BackGroundIcon
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
            />
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/079/873/original/Laptop_Mockup_Testimonial_Facebook_Cover.png?1682954351"
                }
              />
            </Box>
          </Flex>
        </Stack>
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent={"space-around"}
        >
          {socialBrewLinks.map((link) => (
            <Text
              color={"#FD6853 "}
              fontSize="27px"
              key={link.title}
              href={link.url}
              _hover={{
                color: "#0F606B",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open(link.url);
              }}
            >
              {link.title}
            </Text>
          ))}
        </Stack>
      </Container>
    </Flex>
  );
}

export const BackGroundIcon = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="#f7bd96"
      />
    </Icon>
  );
};
