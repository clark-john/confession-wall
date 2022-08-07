import Link from "next/link"
import { useRouter } from "next/router"
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react"
import navbar from "styles/navbar.module.scss"
import { ConfessionModal } from "components/Modal"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const isWelcomePage = (path: string): boolean => {
    if (path === "/welcome") {
      return true
    } else {
      return false
    }
  }

  return (
    <Box>
      <Flex
        mx="calc(3rem + 30px)"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          href={router.pathname === "/welcome" ? "/welcome" : "/home"}
          className={navbar.link}
        >
          <div className={navbar.h2}>Confession Wall</div>
        </Link>
        <Link href="/about">
          <Box
            className={navbar.aboutlink}
          // @ts-ignore
            visibility={isWelcomePage(router.pathname) ? "hidden" : ""}
          >
            About
          </Box>
        </Link>
        <Button
          onClick={onOpen}
          colorScheme="blue"
          // @ts-ignore
          visibility={
            router.pathname === "/about" || isWelcomePage(router.pathname)
              ? "hidden"
              : ""
          }
          px={30}
        >
          Create
        </Button>
      </Flex>
      <ConfessionModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Navbar
