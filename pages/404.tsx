import type { NextPage } from "next";
import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";

const Custom404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Flex alignItems="center" flexDirection="column">
        <Box fontSize={30}>404</Box>
        <Box>Sorry, we can't find the page you're looking for.</Box>
      </Flex>
    </div>
  );
};

export default Custom404;
