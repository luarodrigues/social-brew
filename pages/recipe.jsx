import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Select,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import "firebase/firestore";
import coffeeData from "coffee-data.json";
import { useRouter } from "next/router";
import { SubmitAlert } from "../components/SubmitAlert";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { IoWaterOutline } from "react-icons/io";

initializeApp(firebaseConfig);
const db = getFirestore();

const CoffeeRecipe = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [countries, setCountries] = useState([]);
  const [roasters, setRoasters] = useState([]);
  const [methods, setMethods] = useState([]);
  const [comments, setComments] = useState("");

  const [coffeeLikes, setCoffeeLikes] = useState("");
  const [waterAmmount, setWaterAmmount] = useState("");
  const [coffeeAmmount, setCoffeeAmmount] = useState("");
  const [brewTime, setBrewTime] = useState("");
  const [userName, setuserName] = useState("");
  const [date, setDate] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    beans: "",
    roaster: "",
    brewMethod: "",
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

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
      const date = new Date();
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const formattedDate = date.toLocaleString("en-GB", options);
      const recipe = {
        date: formattedDate,
        userName: user.email.split("@")[0],
        beans: selectedOptions.beans,
        roaster: selectedOptions.roaster,
        brewMethod: selectedOptions.brewMethod,

        coffeeLikes: coffeeLikes,
        coffeeAmmount: selectedOptions.coffeeAmmount,
        waterAmmount: selectedOptions.waterAmmount,
        brewTime: selectedOptions.brewTime,
        comments: `${selectedOptions.coffeeAmmount}g 🫘,  ${selectedOptions.waterAmmount}g 💧,  ${selectedOptions.brewTime}min ⏱️`,
      };

      console.log(comments);
      await addDoc(recipeRef, recipe);
      setSubmitted(true);
      setSelectedOptions({
        beans: "",
        roaster: "",
        brewMethod: "",
      });
      setComments("");
      setuserName("");
      setCoffeeLikes([]);

      setCoffeeAmmount("");
      setWaterAmmount("");
      setBrewTime("");
      setDate("");
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

  const minuteOptions = Array.from({ length: 60 * 60 }, (_, i) => {
    const minutes = Math.floor(i / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (i % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  });

  return (
    <Flex
      p={"20px"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#393E46"}
      fontFamily={"avenir"}
    >
      <title>recipe</title>
      <Stack
        spacing={5}
        mx={"auto"}
        maxW={"lg"}
        py={10}
        px={6}
        bg={"#EEEEEE"}
        rounded={"lg"}
      >
        <Stack align={"center"}>
          <Text fontSize={"66px"} color={"#222831"} textTransform={"uppercase"}>
            SOCIAL BREW
          </Text>
        </Stack>
        <Stack align={"center"}>
          <Heading
            fontSize={"large"}
            color={"#393E46"}
            textTransform={"uppercase"}
          >
            add your recipe
          </Heading>
        </Stack>
        <Box color={"#222831"}>
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

          <FormControl id="coffeeAmmount" mb={4}>
            <FormLabel>Coffee Amount (g)</FormLabel>
            <NumberInput
              id="coffeeAmmount"
              onChange={(value) => handleOptionChange("coffeeAmmount", value)}
              isDisabled={submitted}
              min={1}
              max={1000}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="waterAmmount" mb={4}>
            <FormLabel>Water Amount (g)</FormLabel>
            <NumberInput
              id="waterAmmount"
              color={"#B6B7B9"}
              onChange={(value) => handleOptionChange("waterAmmount", value)}
              isDisabled={submitted}
              min={1}
              max={10000}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="brewTime" mb={4}>
            <FormLabel>Brew Time (min)</FormLabel>
            <Select
              id="brewTime"
              mb={4}
              placeholder="Select a number"
              bg={"white"}
              onChange={(e) => handleOptionChange("brewTime", e.target.value)}
              isDisabled={submitted}
            >
              {minuteOptions.map((brewTime) => (
                <option key={brewTime} value={brewTime}>
                  {brewTime}
                </option>
              ))}
            </Select>
          </FormControl>

          <Box align={"center"} justify={"center"}>
            {!submitted ? (
              <Button variant={"brandColor"} onClick={handleSubmit}>
                submit recipe
              </Button>
            ) : (
              <SubmitAlert></SubmitAlert>
            )}
          </Box>
          <Stack align={"flex-end"}>
            {" "}
            <Link color={"#00ADB5"} onClick={() => router.push("/home-page")}>
              go to my page
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CoffeeRecipe;
