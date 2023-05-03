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

const CoffeeRecipe = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white "}
      fontFamily={"avenir"}
    >
      {" "}
      <Stack align={"center"}></Stack>
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
              <Select placeholder="american">
                <option>Guatemala</option>
                <option>Honduras</option>
                <option>El-Salvador</option>
                <option>Costa-Rica</option>
                <option>Panama</option>
                <option>Brazil</option>
                <option>Colombia</option>
                <option>Peru</option>
                <option>Ecuador</option>
                <option>Bolivia</option>
              </Select>
              <option>India</option>
              <option>Indonesia</option>
              <option>Papua-New-Guinea</option>
              <option>Ethiopia</option>
              <option>Kenya</option>
              <option>Tanzania</option>
              <option>Uganda</option>
              <option>Rwanda</option>
              <option>Burundi</option>
              <option>Other</option>
            </Select>
          </FormControl>

          <FormControl id="roaster" mb={4}>
            <FormLabel>Roaster</FormLabel>
            <Select placeholder="Select Roaster">
              <option>Three Marks</option>
              <option>Nomad</option>
              <option>Tocaya</option>
              <option>Roastberry</option>
              <option>Right Side</option>
              <option>Drop Coffee</option>
              <option>Five Elephant</option>
              <option>Coffee & CO</option>
              <option>Other</option>
              <option></option>
            </Select>
          </FormControl>

          <FormControl id="brew-method" mb={4}>
            <FormLabel>Brew Method</FormLabel>
            <Select placeholder="Select brew method">
              <option value="Espresso">Espresso</option>
              <option value="V60 or Kalita">V60 or Kalita</option>
              <option value="AeroPress">AeroPress</option>
              <option value="French Press">French Press</option>
              <option value="Cold Brew ">Cold Brew</option>
              <option value="Chemex">Chemex</option>
              <option value="Moka Pot">Moka Pot</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>

          <FormControl id="comments" mb={4}>
            <FormLabel>add a comment</FormLabel>
            <Input />
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
