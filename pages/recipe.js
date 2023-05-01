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
    url: "https://honestcoffeeguide.com/tools/coffee-to-water-ratio/",
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
        <title>recipe</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"#f7bd96"}
        color={"white"}
        fontFamily={"avenir"}
        p={"50px"}
        flexDirection="column"
      >
        <Flex
          justifyContent="space-between"
          S
          alignItems="center"
          top="0"
          zIndex="1"
          py="4"
        >
          <LogoContainer>
            <LogoText />
          </LogoContainer>
        </Flex>
        <Flex
          direction={{ base: "column", sm: "row" }}
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <Stack alignSelf={{ sm: "flex-start" }}>
            {socialBrewLinks.map((link) => (
              <Text
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
        </Flex>
      </Flex>
    </Box>
  );
}
