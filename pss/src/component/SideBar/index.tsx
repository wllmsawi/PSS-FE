import { Box, Flex, HStack, Image, Spacer, VStack } from "@chakra-ui/react";
import cklogo from "./cklogo.png";
import { PiBasketFill } from "react-icons/pi";
import { PiCalculatorFill } from "react-icons/pi";
import { PiNotepadFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [order, setOrder] = useState(false);
  return (
    <Box bgColor={"#EEF1F2"}>
      <VStack
        w={"236px"}
        h={"1024px"}
        bgColor={"#FAFAFA"}
        p={"3em 1em 1em 1em"}
        spacing={"3.75em"}
      >
        <Box>
          <Image src={cklogo} w={"9.75em"} />
        </Box>
        <VStack w={"100%"} spacing={"1.5em"} align={"flex-end"}>
          <Box
            w={"100%"}
            h={"2.5em"}
            display={"flex"}
            flexDir={"row"}
            _focusVisible={{ color: "red" }}
            _hover={{ bgColor: "#FFD6D8" }}
            borderRadius={"0.5em"}
          >
            <HStack
              spacing={"1em"}
              onClick={() => setOrder(!order)}
              bgColor={order ? "red.200" : "transparent"}
              w={"100%"}
              borderRadius={".5em"}
              p={".65em"}
              cursor={"pointer"}
            >
              <Box>
                <PiBasketFill />
              </Box>
              <Box>
                <Link to={""}>Order</Link>
              </Box>
            </HStack>
          </Box>
          <Box
            w={"100%"}
            h={"2.5em"}
            display={"flex"}
            flexDir={"row"}
            _focusVisible={{ color: "red" }}
            _hover={{ bgColor: "#FFD6D8" }}
            borderRadius={"0.5em"}
          >
            <Flex w={"100%"} gap={"1em"}>
              <Box _focus={{ bgColor: "#FFD6D8" }} w={"100%"}>
                <Link to={""}>Order</Link>
              </Box>
            </Flex>
          </Box>
          <Box
            w={"100%"}
            h={"2.5em"}
            display={"flex"}
            flexDir={"row"}
            _focusVisible={{ color: "red" }}
            _hover={{ bgColor: "#FFD6D8" }}
            borderRadius={"0.5em"}
          >
            <Flex w={"100%"} gap={"1em"}>
              <Box _focus={{ bgColor: "#FFD6D8" }} w={"100%"}>
                <Link to={""}>Order</Link>
              </Box>
            </Flex>
          </Box>
        </VStack>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          _hover={{ bgColor: "#FFD6D8" }}
          borderRadius={"0.5em"}
        >
          <Flex w={"100%"} gap={"1em"}>
            <Box _focus={{ bgColor: "#FFD6D8" }} w={"100%"}>
              <Link to={""}>Order</Link>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
