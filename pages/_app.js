import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../components/Theme";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-39S3TF2VHV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-39S3TF2VHV');
        `}
      </Script>
      {/* <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-39S3TF2VHV"
        ></Script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-39S3TF2VHV');
          `,
          }}
        ></Script>
      </Head> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
