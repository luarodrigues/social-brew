import Head from "next/head";
import styled from "styled-components";

import {
  Avatar,
  Stack,
  VStack,
  Box,
  Flex,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

const textStyles = {
  fontFamily: "Avenir",
  fontSize: 15,
  display: "flex",
  alignItems: "center",
  color: "#FD6853",
};

const followStyles = {
  fontFamily: "Avenir",
  fontWeight: "400",
  fontSize: "17px",
  lineHeight: "23px",
  color: "#323233",
  name: "",
  background: "#A7D2DD",
  height: "20px",
  width: "20px",
  border: "1px solid #323233",
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainLogoText = styled.div`
  font-size: 50px;
  font-weight: 300;
`;

const BoldLogoText = styled.div`
  font-size: 66px;
  font-weight: bold;
  display: inline-block;
  margin-left: 24px;
`;
const LogoText = () => (
  <LogoContainer>
    <MainLogoText>
      SOCIAL<BoldLogoText>BREW</BoldLogoText>
    </MainLogoText>
  </LogoContainer>
);

const SignButton = (props) => (
  <Button
    variant="outline"
    borderRadius="20"
    border="2px solid white"
    background="#A7D2DD"
    color="white"
    padding="8px 16px"
    cursor="pointer"
    transition="background-color 0.3s ease-in-out"
    _hover={{
      background: "#FFFF",
      color: "#A7D2DD",
      transform: "scale(0.98)",
    }}
    {...props}
    onClick={() => window.open("/signin", "_blank")}
  >
    Sign In
  </Button>
);

const CoffeeData = () => {
  const coffeeDataStyle = {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "23px",
    color: "#323233",
    alignItems: "flex-start",
  };

  const beans = "Ethiopia, washed";
  const roaster = "Three Marks";
  const brewMethod = "V60";
  const recipe = "20g coffee to 300g water";
  const comments = "Add 50g water for bloom";

  return (
    <VStack style={coffeeDataStyle}>
      <Box h="30px">Beans: {beans}</Box>
      <Box h="30px">Roaster: {roaster}</Box>
      <Box h="30px">Brew Method: {brewMethod}</Box>
      <Box h="30px">Recipe: {recipe}</Box>
      <Box h="30px">Comments: {comments}</Box>
    </VStack>
  );
};

const socialBrewLinks = [
  {
    title: "coffee calculator",
    url: "/coffee-calculator",
  },
  {
    title: "methods guide",
    url: "https://blog.bluebottlecoffee.com/posts/how-to-choose-a-brew-method",
  },
  {
    title: "grind size chart",
    url: "https://honestcoffeeguide.com/guides/coffee-grind-size-chart",
  },
  {
    title: "your recipe",
    url: "/recipe",
  },
];

export default function Home() {
  return (
    <Box>
      <Head>
        <title>social brew</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"#A7D2DD"}
        color={"white"}
        fontFamily={"avenir"}
        p={"50px"}
        flexDirection="column"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          top="0"
          zIndex="1"
          py="4"
        >
          <LogoContainer>
            <LogoText />
          </LogoContainer>
          <Stack alignItems="center" justifyContent="center" marginLeft="520px">
            <SignButton />
            <Text fontSize="16px" as="b">
              create an account
            </Text>
          </Stack>
        </Flex>
        <Flex
          direction={{ base: "column", sm: "row" }}
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <Stack alignSelf={{ sm: "flex-start" }}>
            {socialBrewLinks.map((link) => (
              <Text
                color={"#0F606B"}
                fontWeight={700}
                marginRight="30px"
                fontSize="20px"
                key={link.title}
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(link.url);
                }}
              >
                {link.title}
              </Text>
            ))}
          </Stack>

          <Card
            border="0px"
            width="800px"
            height="540"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%" }}
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/725/original/IMG_1913.jpeg?1682359163
            "
            />

            <CardBody>
              <CardHeader>
                <Flex
                  flex="1"
                  gap="3"
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent="flex-end"
                  w="260px"
                >
                  <Heading fontFamily="avenir" size="sm">
                    Luana Rodrigues
                  </Heading>
                  <Avatar
                    name="Luana Rodrigues"
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/718/original/PJF_8413.jpg?1682356621"
                    border="3px solid #FD6853"
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={2} Itens="flex-start">
                  <CoffeeData />
                  <Flex
                    alignItems="left"
                    flex="1"
                    gap="3"
                    flexDirection="column"
                    items="flex-start"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Flex key={i} flexDirection="row" alignItems="center">
                        <Avatar style={followStyles}></Avatar>
                        <Text style={textStyles}> good coffee 🧡</Text>
                      </Flex>
                    ))}
                  </Flex>
                </VStack>
              </CardBody>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Box>
  );
}
