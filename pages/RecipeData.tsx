// import { Box, VStack } from "@chakra-ui/react";

// const RecipeData = () => {
//   const coffeeDataStyle = {
//     fontFamily: "Avenir",
//     fontWeight: "400",
//     fontSize: "17px",
//     lineHeight: "23px",
//     color: "#323233",
//     alignItems: "flex-start",
//   };

//   let recipe = "20g coffee to 300g water";

//   return (
//     <VStack style={coffeeDataStyle}>
//       <Box h="30px">Recipe: {recipe}</Box>
//     </VStack>
//   );
// };

// export { RecipeData };

import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { Box, VStack } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const RecipeData = () => {
  const coffeeDataStyle = {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "23px",
    color: "#323233",
    alignItems: "flex-start",
  };

  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore();
      const documentRef = doc(firestore, "recipe", "7Qd99PTibem7eoEIWr55");
      onSnapshot(documentRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setRecipe(data.recipe);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <VStack style={coffeeDataStyle}>
      <Box h="30px">{recipe}</Box>
    </VStack>
  );
};

export default RecipeData;
