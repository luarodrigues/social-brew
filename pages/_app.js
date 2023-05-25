import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../components/Theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
