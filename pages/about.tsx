import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { Flex, Box } from "@chakra-ui/react"

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Confession Wall</title>
      </Head>
      <Box padding="10px" textAlign='center'>
        <Box fontSize={24} my="20px">About Confession Wall</Box>
        <Box mt="10px" mb="3rem">
          Personal project
          <Box>Stack: </Box>
          <Box mt="10px" mb="3rem">
            <Box>
              <li>Prisma</li>
              <li>Vite</li>
              <li>SCSS</li>
              <li>Vue</li>
            </Box>
          </Box>
          <div style={{marginBottom: "2rem"}}>
            Email: <a href="mailto:daprogrammer1@gmail.com">Clark</a>
          </div>
          <div>
            Back to 
            {" "} 
            <Link href="/home">
              <span className="linkToHome">Confession Wall</span>
            </Link>
            <style jsx>{`
              .linkToHome {
                color: #009EFF;
                transition: filter 100ms;
              }
              .linkToHome:hover {
                filter: brightness(.6);
              }
            `}
            </style>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default About
