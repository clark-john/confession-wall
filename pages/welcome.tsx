import type { NextPage } from "next"
import Head from 'next/head'
import { Button, Flex, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"

const welcome: NextPage = () => {
  const router = useRouter()
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Head>
        <title>Welcome</title>
      </Head>
      <Box fontWeight='bold'>Welcome to Confession Wall</Box>
      <Button onClick={() => router.push("/home")}>Create yours now</Button> 
      <Box color='red' mt={14}>
        Notice: Unfinished. May not work as expected
      </Box>     
    </Flex>
  )
}

export default welcome
