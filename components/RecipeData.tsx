import { useState, useEffect } from "react";
import { VStack, Box } from "@chakra-ui/react";

export default function RecipeOnFeed() {
  const [recipeFeed, setRecipeFeed] = useState({
    user: "",
    id: "",
    beans: "",
    brewMethod: "",
    roaster: "",
    comments: "",
  });

  useEffect(() => {
    console.log("getting the data");

    const fetchData = async () => {
      const response = await fetch(`api/home-api`);
      const recipeFeed = await response.text();

      setRecipeFeed(JSON.parse(recipeFeed));

      console.log(recipeFeed);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <Box> ID: {recipeFeed ? recipeFeed.id : ""}</Box> */}
      <Box>Beans origin: {recipeFeed ? recipeFeed.beans : ""}</Box>
      <Box>Roaster: {recipeFeed ? recipeFeed.roaster : ""}</Box>
      <Box>Method: {recipeFeed ? recipeFeed.brewMethod : ""}</Box>
      <Box>My thoughts: {recipeFeed ? recipeFeed.comments : ""}</Box>
    </>
  );
}
