import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
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
    let ratio;
    switch (brewMethod) {
      case "French Press":
        ratio = 17;
        break;
      case "V60":
        ratio = 15;
        break;
      case "AeroPress":
        ratio = 17;
        break;
      case "Espresso":
        ratio = 2;
        break;
      default:
        ratio = 16;
        break;
    }
    const calculatedWaterAmount = coffeeAmount * ratio;
    setWaterAmount(calculatedWaterAmount);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#f7bd96"}
      fontFamily={"avenir"}
    >
      <title>coffee calculator</title>
      <Stack spacing={10} mx={"auto"} maxW={"lg"} py={10} px={6}>
        <Stack align={"center"}>
          <Text fontSize={"66px"} color={"white"} textTransform={"uppercase"}>
            Let's brew ☕️
          </Text>
          <Heading fontSize={"sm"} color={"white"} textTransform={"uppercase"}>
            Social brew's Coffee Calculator
          </Heading>
        </Stack>
        <Box color={"gray.700"}>
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
              <option value="French Press">French Press</option>
              <option value="V60">V60</option>
              <option value="AeroPress">AeroPress</option>
              <option value="Espresso">Espresso</option>
            </Select>
          </FormControl>
          <Button mb={4} onClick={handleCalculate} color={"#f7bd96"}>
            Calculate Water Amount
          </Button>
          {waterAmount && (
            <Stack>
              <Box>
                Water Amount: <strong>{waterAmount} g</strong>
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
