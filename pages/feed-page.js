import Head from "next/head";

import styled from "styled-components";
import {
  Avatar,
  Stack,
  VStack,
  Box,
  Flex,
  Link,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import RecipeData from "../components/RecipeData";

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
    title: "add recipe",
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
          <Stack display="flex" justifyContent="flex-start" alignItems="center">
            <Text fontSize="66px" marginLeft="24px" textTransform={"uppercase"}>
              SOCIAL{" "}
              <Text fontWeight="bold" as="span">
                BREW
              </Text>
            </Text>
          </Stack>
          <Stack alignItems="center" justifyContent="center" marginLeft="520px">
            <Link fontSize="16px" as="b" onClick={() => window.open("/")}>
              sign out
            </Link>
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
                <VStack spacing={2} itens="flex-start">
                  <RecipeData />
                  <Flex
                    alignItems="left"
                    flex="1"
                    gap="3"
                    flexDirection="column"
                    items="flex-start"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Flex key={i} flexDirection="row" alignItems="center">
                        <Avatar
                          fontWeight="400"
                          fontSize="17px"
                          lineHeight="23px"
                          color="#323233"
                          name=""
                          background="#A7D2DD"
                          height="20px"
                          width="20px"
                          border="1px solid #323233"
                        ></Avatar>
                        <Text
                          fontFamily="Avenir"
                          fontSize="15"
                          display="flex"
                          alignItems="center"
                          color="#FD6853"
                        >
                          {" "}
                          good coffee 🧡
                        </Text>
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
