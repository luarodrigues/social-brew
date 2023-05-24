import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

///CREATE CHACKRA THEME
// import theme from "./theme";
// export default function App({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }
