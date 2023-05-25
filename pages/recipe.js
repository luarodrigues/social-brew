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
  Link,
  Select,
  Stack,
} from "@chakra-ui/react";
import "firebase/firestore";
import coffeeData from "coffee-data.json";
import { useRouter } from "next/router";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { SubmitAlert } from "../components/SubmitAlert";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

const CoffeeRecipe = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [roasters, setRoasters] = useState([]);
  const [methods, setMethods] = useState([]);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    beans: "",
    roaster: "",
    brewMethod: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roastersNames = coffeeData.roasters;
        const methodNames = coffeeData.methods;
        const countryNames = coffeeData.countries;
        setCountries(countryNames);
        setRoasters(roastersNames);
        setMethods(methodNames);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const recipeRef = collection(db, "recipes");
      const recipe = {
        beans: selectedOptions.beans,
        roaster: selectedOptions.roaster,
        brewMethod: selectedOptions.brewMethod,
        comments: comments,
      };
      await addDoc(recipeRef, recipe);
      setSubmitted(true);
      setSelectedOptions({
        beans: "",
        roaster: "",
        brewMethod: "",
      });
      setComments("");
    } catch (error) {
      console.error("Error adding recipe: ", error);
    }
  };

  const handleOptionChange = (field, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [field]: value,
    }));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white"}
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
        rounded={"lg"}
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
            <Select
              placeholder="Select Beans"
              bg={"white"}
              onChange={(e) => handleOptionChange("beans", e.target.value)}
              isDisabled={submitted}
            >
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
            <Select
              placeholder="Select Roaster"
              bg={"white"}
              onChange={(e) => handleOptionChange("roaster", e.target.value)}
              isDisabled={submitted}
            >
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
            <Select
              placeholder="Select brew method"
              bg={"white"}
              onChange={(e) => handleOptionChange("brewMethod", e.target.value)}
              isDisabled={submitted}
            >
              {methods.map((method) => (
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
              bg={"white"}
              onChange={(event) => setComments(event.target.value)}
              isDisabled={submitted}
            />
          </FormControl>

          <Box align={"center"} justify={"center"}>
            {!submitted ? (
              <Button variant={"brandColor"}
               
                onClick={handleSubmit}
              >
                submit recipe
              </Button>
            ) : (
              <SubmitAlert></SubmitAlert>
            )}
          </Box>
          <Stack align={"flex-end"}>
            {" "}
            <Link color={"#FD6853"} onClick={() => router.push("/home-page")}>
              go to my page
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CoffeeRecipe;
