import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../components/Theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-39S3TF2VHV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-39S3TF2VHV');
          `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
