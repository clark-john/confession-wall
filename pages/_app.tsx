import "styles/globals.scss";

import { ChakraProvider, Box } from "@chakra-ui/react";
import chroma from "chroma-js";
import Head from "next/head";

import Navbar from "components/Navbar";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="description" content="A place where to confess something anonymously." />
        <meta name="url" content="https://confession-wall.vercel.app" />
        <meta property="og:description" content="A place where to confess something anonymously." />
        <meta property="og:title" content="Confession Wall" />
        <meta property="og:url" content="https://confession-wall.vercel.app" />
      </Head>    
      <Box bg={chroma("rgb(255, 250, 235)").hex()}>
        <Navbar />
        {pageProps 
          ? <Component {...pageProps} />
          : <div>loading</div>
        }
      </Box>
    </ChakraProvider>
  );
}
