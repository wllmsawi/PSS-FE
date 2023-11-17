import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import useCounter from "./useCounter";
import product1 from "../ProductInCart/img/product1.png";
import { BsCartPlusFill } from "react-icons/bs";

export const ProductCard = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, increment, decrement] = useCounter(1);
  return (
    <Box
      h={"264px"}
      boxShadow={"lg"}
      borderRadius={"1em"}
      overflow={"hidden"}
      onClick={onOpen}
      transition="transform .3s"
      _hover={{ transform: "scale(1.05)" }}
    >
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
          {props.product_name}
        </Text>
        <Text color={"#F99B2A"} fontWeight={"bold"}>
          {props.product_price}
        </Text>
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <VStack p={"1.5em"}>
                <Image
                  src={product1}
                  boxSize={"20emem"}
                  borderRadius={".5em"}
                />
                <Text fontWeight={"bold"} color={"red"}>
                  {props.product_name}
                </Text>
                <Text fontWeight={"bold"} color={"orange"}>
                  {props.product_price}
                </Text>
                <HStack>
                  <Button
                    size={"md"}
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent" }}
                    _active={{ bgColor: "lightgrey" }}
                    fontSize={"xl"}
                    color={"#ED1C24"}
                    onClick={() => {
                      count > 0 ? decrement() : null;
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
                    color={"#ED1C24"}
                    onClick={() => {
                      count !== 100 ? increment() : null;
                    }}
                  >
                    <FaPlusCircle />
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
            <Box p={"1em"}>
              <Center>
                <Button
                  leftIcon={<BsCartPlusFill />}
                  type={"submit"}
                  color={"#6D6D6D"}
                  onClick={async () => {
                    const test = {
                      id: props.id,
                      product_name: props.product_name,
                      product_price: props.product_price,
                      qty: count,
                    };

                    await props.handlePlus(Number(props.id), {
                      ...test,
                    });
                    // await props.setCart([test, ...props.cart]);
                    props.setTotal(props.total + count * props.product_price);
                  }}
                  w={"15em"}
                >
                  Add to Cart
                </Button>
              </Center>
            </Box>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};
