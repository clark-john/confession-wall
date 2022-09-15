import Link from "next/link";
import { useRouter } from "next/router";
import { 
  Box, 
  Button, 
  Flex, 
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import navbar from "styles/navbar.module.scss";
import { ConfessionModal } from "components/Modal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const isWelcomePage = (path: string): boolean => path === "/welcome";
  const [isMobile] = useMediaQuery("(max-width: 380px)");
  const [breakpoint1] = useMediaQuery("(max-width: 625px)");

  return (
    <Box>
      <Flex
      // @ts-ignore
        mx={() => {
          switch (true) {
            case isMobile: return "1rem";
            case breakpoint1: return "2rem";
            default: return "9rem";
          }
        }}
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
            mr={isMobile ? 7 : 0}
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
  );
};

export default Navbar;
