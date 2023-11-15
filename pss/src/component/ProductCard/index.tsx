import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import useCounter from "./useCounter";
import product1 from "../ProductInCart/img/product1.png"

export const ProductCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, increment, decrement] = useCounter(0);
  const minus = () => {
    decrement();
  };
  const plus = () => {
    increment();
  };
  return (
    <Box h={"264px"} boxShadow={"lg"} borderRadius={"1em"} overflow={"hidden"}>
      <Box bgColor={"gray.300"} h={"50%"}>
        {/* <Image src="" /> */}
      </Box>
      <Flex
        h={"50%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text color={"#ED1C24"} fontWeight={"bold"}>
          Product Name
        </Text>
        <Text fontWeight={"bold"} fontSize={".75em"} as={"s"}>
          Rp 15.000
        </Text>
        <Text color={"#F99B2A"} fontWeight={"bold"}>
          Rp 10.000
        </Text>
        <Button size={"xs"} w={"8em"} onClick={onOpen}>
          Add
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <VStack p={".5em"}>
            <Center>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                ADD ITEM
              </Text>
            </Center>
            <Spacer/>
            <Divider/>
            </VStack>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                
                <Text fontWeight={"bold"} color={"red"}>Iced Coffe Latte</Text>
                <Text fontWeight={"bold"} color={"orange"}>Rp.10.000</Text>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <HStack>
                <Button
                  size={"md"}
                  bgColor={"transparent"}
                  _hover={{ bgColor: "transparent" }}
                  _active={{ bgColor: "lightgrey" }}
                  fontSize={"xl"}
                  onClick={() => {
                    count !== 0 ? minus() : null;
                  }}
                >
                  <FaMinusCircle />
                </Button>
                <Text fontWeight={"bold"} fontSize={"md"}>
                  {count}
                </Text>
                <Button
                  size={"md"}
                  bgColor={"transparent"}
                  _hover={{ bgColor: "transparent" }}
                  _active={{ bgColor: "lightgrey" }}
                  fontSize={"xl"}
                  onClick={() => {
                    count !== 100 ? plus() : null;
                  }}
                >
                  <FaPlusCircle />
                </Button>
              </HStack>
              <Spacer />
              <Button type={"submit"} colorScheme={"red"} onClick={onClose}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};
