import React, { useState } from "react";
import { MdCoffee } from "react-icons/md";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";

const CoffeeCalculatorPage = () => {
  const router = useRouter();
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [waterAmount, setWaterAmount] = useState("");
  const [brewMethod, setBrewMethod] = useState("");

  const handleCalculate = async () => {
    if (coffeeAmount === "" || isNaN(coffeeAmount) || brewMethod === "") {
      setWaterAmount(
        "Please enter a valid amount of coffee and method to calculate"
      );
    } else {
      const response = await fetch(
        `/api/coffee-calculator?coffeeAmount=${coffeeAmount}&brewMethod=${brewMethod}`
      );
      const data = await response.text();
      console.log(data);
      setWaterAmount(data);
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="#393E46"
      fontFamily="avenir"
    >
      <Head>
        <title>coffee calculator</title>
      </Head>
      <Stack
        spacing={5}
        mx="auto"
        maxW="lg"
        py={10}
        px={6}
        bg="#EEEEEE"
        rounded="lg"
      >
        <Flex
          fontSize="x-large"
          fontWeight="bold"
          color="#222831"
          textTransform="uppercase"
          align="center"
          justifyContent="center"
        >
          Coffee {"  "}
          <MdCoffee color="#222831" style={{ marginLeft: "10px" }} />
        </Flex>
        <Flex
          fontSize="x-large"
          fontWeight="bold"
          color="#222831"
          textTransform="uppercase"
          align="center"
          justifyContent="center"
        >
          Calculator
        </Flex>

        <Box color="#222831">
          <FormControl id="coffee-amount" mb={4}>
            <FormLabel>Coffee Amount (in grams)</FormLabel>
            <Input
              bg="white"
              type="number"
              value={coffeeAmount}
              onChange={(e) => setCoffeeAmount(e.target.value)}
            />
          </FormControl>
          <FormControl id="brew-method" mb={4}>
            <FormLabel>Brew Method</FormLabel>
            <Select
              bg="white"
              placeholder="Select brew method"
              value={brewMethod}
              onChange={(e) => setBrewMethod(e.target.value)}
            >
              <option value="Espresso">Espresso</option>
              <option value="V60 or Kalita">V60 or Kalita</option>
              <option value="AeroPress">AeroPress</option>
              <option value="French Press">French Press</option>
              <option value="Cold Brew (concentrate)">
                Cold Brew (concentrate)
              </option>
              <option value="Cold Brew">Cold Brew</option>
              <option value="Chemex">Chemex</option>
              <option value="Moka Pot">Moka Pot</option>
            </Select>
          </FormControl>
          <Box align="center" justify="center">
            <Button onClick={handleCalculate} variant={"brandColor"}>
              Calculate Water Amount
            </Button>
          </Box>
          {waterAmount && (
            <Stack>
              <Box mt="10px">
                Water Amount (in grams): <strong>{waterAmount}</strong>
              </Box>
            </Stack>
          )}
        </Box>
        <Box fontSize="sm" textAlign="center" color="#393E46">
          Remember, this is a standard coffee recipe calculator. The most
          important factor is the taste - so be sure to try your coffee and
          adjust your recipe.
        </Box>
        <Stack align={"flex-end"}>
          {" "}
          <Link color={"#00ADB5"} onClick={() => router.push("/home-page")}>
            go to my page
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default CoffeeCalculatorPage;
