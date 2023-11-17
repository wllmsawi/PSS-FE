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
  useToast,
} from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import useCounter from "./useCounter";
import product1 from "../ProductInCart/img/product1.png";
import { BsCartPlusFill } from "react-icons/bs";

export const ProductCard = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, increment, decrement, reset] = useCounter(1);
  const toast = useToast();
  const checkExist = () => {
    let condition;
    try {
      props?.cart?.map((el: any) => {
        if (el?.id === props?.id) {
          toast({
            title: "Product Already Added!",
            description: "Please Check the Cart",
            status: "warning",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
          throw new Error();
        } else {
          condition = true;
          return true;
        }
      });
    } catch (err) {
      throw err;
    }

    return condition;
  };
  return (
    <Box
      h={"264px"}
      boxShadow={"lg"}
      borderRadius={"1em"}
      overflow={"hidden"}
      onClick={onOpen}
      transition="transform .3s"
      _hover={{ transform: "scale(1.05)" }}
      cursor={"pointer"}
    >
      <Box bgColor={"gray.300"} h={"50%"}></Box>
      <Flex
        h={"50%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text color={"#ED1C24"} fontWeight={"bold"}>
          {props.product_name}
        </Text>
        <Text color={"#F99B2A"} fontWeight={"500"}>
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
                    _active={{ bgColor: "transparent" }}
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
                    _active={{ bgColor: "transparent" }}
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
                  _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                  onClick={() => {
                    const test = {
                      id: props.id,
                      product_name: props.product_name,
                      product_price: props.product_price,
                      qty: count,
                    };
                    const check = checkExist();
                    if (check === false) {
                    } else {
                      props.setCart([test, ...props.cart]);
                      props.setTotal(props.total + count * props.product_price);
                      reset();
                    }
                    onClose();
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
