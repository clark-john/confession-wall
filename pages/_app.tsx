import "styles/globals.scss"

import { ChakraProvider, Box } from "@chakra-ui/react"
import chroma from "chroma-js"

import Navbar from "components/Navbar"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box bg={chroma("rgb(255, 250, 235)").hex()}>
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
