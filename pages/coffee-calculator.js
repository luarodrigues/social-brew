import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";

const CoffeeCalculator = () => {
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [waterAmount, setWaterAmount] = useState("");
  const [brewMethod, setBrewMethod] = useState("");

  const handleCalculate = () => {
    const brewMethodRatios = {
      Espresso: 2,
      "V60 or Kalita": 16,
      AeroPress: 17,
      "French Press": 18,
      "Cold Brew (concentrate)": 5,
      "Cold Brew": 10,
      "Moka Pot": 12,
      Chemex: 13,
    };

    const ratio = brewMethodRatios[brewMethod];

    {
      if (coffeeAmount === "" || isNaN(coffeeAmount) || brewMethod === "") {
        setWaterAmount("Please enter a valid amount of coffee");
      } else {
        const calculatedWaterAmount = coffeeAmount * ratio;
        setWaterAmount(calculatedWaterAmount);
      }
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white "}
      fontFamily={"avenir"}
    >
      <title>coffee calculator</title>
      <Stack
        spacing={5}
        mx={"auto"}
        maxW={"lg"}
        py={10}
        px={6}
        bg={"#A7D2DD"}
        borderRadius={"40px"}
      >
        <Stack align={"center"}>
          <Text fontSize={"66px"} color={"white"} textTransform={"uppercase"}>
            Let's brew ☕️
          </Text>
          <Heading
            fontSize={"large"}
            color={"white"}
            textTransform={"uppercase"}
          >
            Coffee Calculator
          </Heading>
        </Stack>
        <Box color={"#0F606B"}>
          <FormControl id="coffee-amount" mb={4}>
            <FormLabel>Coffee Amount (in grams)</FormLabel>
            <Input
              type="number"
              value={coffeeAmount}
              onChange={(e) => setCoffeeAmount(e.target.value)}
            />
          </FormControl>
          <FormControl id="brew-method" mb={4}>
            <FormLabel>Brew Method</FormLabel>
            <Select
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
          <Box align={"center"} justify={"center"}>
            <Button
              borderRadius="20"
              mb={4}
              onClick={handleCalculate}
              color={"#FD6853"}
            >
              Calculate Water Amount
            </Button>
          </Box>
          {waterAmount && (
            <Stack>
              <Box>
                Water Amount(in grams): <strong>{waterAmount}</strong>
              </Box>
            </Stack>
          )}
        </Box>
        <Box fontSize={"sm"} textAlign={"center"} color={"white"}>
          Remember, this is a standard coffee recipe calculator. The most
          important factor is the taste - so be sure to try your coffee and
          adjust your recipe
        </Box>
      </Stack>
    </Flex>
  );
};

export default CoffeeCalculator;
