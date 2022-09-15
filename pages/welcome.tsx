import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import { Button, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const welcome: NextPage = () => {
  const router = useRouter();
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Head>
        <title>Welcome</title>
      </Head>
      <Box fontWeight='bold'>Welcome to Confession Wall</Box>
      <Link href="/home">
        <Button>
          Create yours now
        </Button>         
      </Link>
    </Flex>
  );
};

export default welcome;
