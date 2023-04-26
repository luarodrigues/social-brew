import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SimpleCard() {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#f7bd96"}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        fontFamily={"avenir"}
      >
        <Stack align={"center"}>
          <Text fontSize={"66px"} color={"white"} textTransform={"uppercase"}>
            Social brew
          </Text>
          <Heading fontSize={"4xl"} color={"white"} textTransform={"uppercase"}>
            Sign in page
          </Heading>
          <Text fontSize={"lg"} color={"white"}>
            to enjoy all of our cool <Link color={"gray.700"}>features</Link>{" "}
            ☕️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#f7bd96"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#f7bd96"}
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "#f7bd96",
                  border: "2px solid #f7bd96",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
