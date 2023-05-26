import { useState, useEffect } from "react";
import { VStack, Box } from "@chakra-ui/react";

export default function RecipeOnFeed() {
  const [recipeFeed, setRecipeFeed] = useState({
    beans: "",
    brewMethod: "",
    roaster: "",
    comments: "",
  });

  useEffect(() => {
    console.log("getting the data");

    const fetchData = async () => {
      const response = await fetch(`api/home-api?`);
      const recipeFeed = await response.text();

      setRecipeFeed(JSON.parse(recipeFeed));

      console.log(recipeFeed);
    };
    fetchData();
  }, []);
  return (
    <VStack
      fontFamily="Avenir"
      fontWeight="400"
      fontSize="17px"
      lineHeight="23px"
      color="#323233"
      alignItems="flex-start"
    >
      <Box h="30px">Beans origin: {recipeFeed ? recipeFeed.beans : ""}</Box>
      <Box h="30px">Roaster: {recipeFeed ? recipeFeed.roaster : ""}</Box>
      <Box h="30px">Method: {recipeFeed ? recipeFeed.brewMethod : ""}</Box>
      <Box h="30px">My thoughts: {recipeFeed ? recipeFeed.comments : ""}</Box>
    </VStack>
  );
}
