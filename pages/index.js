import Head from "next/head";
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
  color: "#ff9751",
};

const followStyles = {
  fontFamily: "Avenir",
  fontWeight: "400",
  fontSize: "17px",
  lineHeight: "23px",
  color: "#323233",
  name: "",
  background: "#F7bd96",
  height: "20px",
  width: "20px",
  border: "1px solid #323233",
};
const CoffeeData = () => {
  const coffeeDataStyle = {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "23px",
    color: "#323233",
  };

  const beans = "Ethiopia, washed";
  const roaster = "Three Marks";
  const brewMethod = "V60";
  const recipe = "20g coffee to 300g water";
  const comments = "Add 50g water for bloom";

  return (
    <VStack align="stretch" style={coffeeDataStyle}>
      <Box h="30px">Beans: {beans}</Box>
      <Box h="30px">Roaster: {roaster}</Box>
      <Box h="30px">Brew Method: {brewMethod}</Box>
      <Box h="30px">Recipe: {recipe}</Box>
      <Box h="30px">Comments: {comments}</Box>
    </VStack>
  );
};

const socialLinks = [
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
    title: "community",
    url: "#",
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
        bg={"#f7bd96"}
        color={"white"}
        fontFamily={"avenir"}
      >
        <Stack>
          <Text
            position="absolute"
            left="136px"
            top="80px"
            width="fit-content"
            fontSize="50px"
            fontWeight="300"
          >
            SOCIAL
            <Text as="b" fontSize="66px" ml="24px" display="inline-block">
              BREW
            </Text>
          </Text>
          <Stack
            position="absolute"
            left="1057px"
            top="83px"
            _hover={{
              color: "#f7bd96",
              transform: "scale(0.98)",
            }}
            onClick={() => window.open("/signin", "_blank")}
          >
            <Button
              variant="outline"
              borderRadius="10"
              border="2px solid white"
            >
              Sign In
            </Button>
          </Stack>
          <Text
            position="absolute"
            width="104px"
            height="20px"
            left="1043px"
            top="130px"
            fontWeight="500"
            fontSize="12px"
            textAlign="center"
          >
            create an account
          </Text>
        </Stack>
        <Stack>
          <Box>
            <Stack
              position="absolute"
              width="203px"
              height="231px"
              left="136px"
              top="178px"
              fontSize="20px"
              fontWeight="500"
              lineHeight="27px"
              spacing="42px"
            >
              {socialLinks.map((link) => (
                <Text
                  key={link.title}
                  href={link.url}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(link.url, "_blank");
                  }}
                >
                  {link.title}
                </Text>
              ))}
            </Stack>
          </Box>
        </Stack>
        <Card
          border={"2px solid red"}
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
                border={"2px solid green"}
              >
                <Heading fontFamily="avenir" size="sm">
                  Luana Rodrigues
                </Heading>
                <Avatar
                  name="Luana Rodrigues"
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/718/original/PJF_8413.jpg?1682356621"
                  border="3px solid #F7bd96"
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text py="2">
                <VStack spacing={2} align="stretch">
                  <CoffeeData />
                  <VStack>
                    {[...Array(7)].map((_, i) => (
                      <Box key={i}>
                        <Avatar style={followStyles}></Avatar>
                        <Text style={textStyles}>good coffee 🧡</Text>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Text>
            </CardBody>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
