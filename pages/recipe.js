import React, { useState, useEffect } from "react";
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
import coffeeData from "../coffee-data.json";

const CoffeeRecipe = () => {
  const [countries, setCountries] = useState([]);
  const [roasters, setRoasters] = useState([]);
  const [method, setMethod] = useState([]);
  const [comments, setComments] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roastersNames = coffeeData[0].roasters;
        const methodNames = coffeeData[0].methods;
        const countryNames = coffeeData[0].countries;
        setCountries(countryNames);
        // localStorage.setItem("countries", countryNames);
        setRoasters(roastersNames);

        setMethod(methodNames);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white "}
      fontFamily={"avenir"}
    >
      <title>recipe</title>
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
            SOCIAL BREW
          </Text>
        </Stack>
        <Stack align={"center"}>
          <Heading
            fontSize={"large"}
            color={"white"}
            textTransform={"uppercase"}
          >
            add your recipe
          </Heading>
        </Stack>
        <Box color={"#0F606B"}>
          <FormControl id="beans" mb={4}>
            <FormLabel>Beans origin</FormLabel>
            <Select placeholder="Select Beans">
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
              <option>Other</option>
            </Select>
          </FormControl>

          <FormControl id="roaster" mb={4}>
            <FormLabel>Roaster</FormLabel>
            <Select placeholder="Select Roaster">
              {roasters.map((roaster) => (
                <option key={roaster} value={roaster}>
                  {roaster}
                </option>
              ))}
              <option>Other</option>
            </Select>
          </FormControl>

          <FormControl id="brew-method" mb={4}>
            <FormLabel>Brew Method</FormLabel>
            <Select placeholder="Select brew method">
              {method.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
              <option>Other</option>
            </Select>
          </FormControl>

          <FormControl id="comments" mb={4}>
            <FormLabel>add a comment</FormLabel>
            <Input
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            />
          </FormControl>
          <Box align={"center"} justify={"center"}>
            <Button borderRadius="20" mb={4} color={"#FD6853"}>
              submit recipe
            </Button>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CoffeeRecipe;
