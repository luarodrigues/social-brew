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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import "firebase/firestore";
import coffeeData from "../coffee-data.json";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { SubmitAlert } from "./SubmitAlert";

const firebaseConfig = {
  apiKey: "AIzaSyBAJrEAP1h3Yjx-zCLKTP_eXUggaqV1d1E",
  authDomain: "social-brew-2.firebaseapp.com",
  projectId: "social-brew-2",
  storageBucket: "social-brew-2.appspot.com",
  messagingSenderId: "62701133382",
  appId: "1:62701133382:web:6bc4836ed15d6b09d1f447",
  measurementId: "G-39S3TF2VHV",
};

initializeApp(firebaseConfig);
const db = getFirestore();

const CoffeeRecipe = () => {
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
        const roastersNames = coffeeData[0].roasters;
        const methodNames = coffeeData[0].methods;
        const countryNames = coffeeData[0].countries;
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
            <Select
              placeholder="Select Beans"
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
              onChange={(event) => setComments(event.target.value)}
              isDisabled={submitted}
            />
          </FormControl>

          <Box align={"center"} justify={"center"}>
            {!submitted ? (
              <Button
                borderRadius="20"
                mb={4}
                color={"#FD6853"}
                onClick={handleSubmit}
              >
                submit recipe
              </Button>
            ) : (
              <SubmitAlert></SubmitAlert>
            )}
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CoffeeRecipe;
