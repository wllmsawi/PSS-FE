import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout";
import ProductInCart from "../ProductInCart";
import { Button } from "@chakra-ui/button";
import { BsCartPlusFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  Center,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineWallet } from "react-icons/md";
import { MdOutlineQrCode2 } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function Cart(props: any) {
  const [cash, setCash] = useState(false);
  const [qris, setQris] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [change, setChange] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ppn, setPpn] = useState(0);
  // const [totalPpn = setPpn(totalSales * 0.10)
  return (
    <VStack
      bgColor={"#FAFAFA"}
      h={"100%"}
      p={"1.5em"}
      borderRadius={"1.5em"}
      align={"stretch"}
    >
      <VStack spacing={"0.5em"}>
        <Text fontWeight={"700"} fontSize={"large"}>
          Cashier
        </Text>
        <Text fontWeight={"500"}>Samuel Williams</Text>
      </VStack>
      <Divider borderColor={"black"} borderWidth={"1px"} mt={"0.5em"} />
      <Text fontWeight={"700"} alignSelf={"flex-start"} fontSize={"large"}>
        Item
      </Text>
      <Box
        overflow={"auto"}
        h={"18em"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.5em",
            borderRadius: "0.5em",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            height: "1em",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
            borderRadius: "0.5em",
          },
        }}
      >
        <Grid gap={"1em"}>
          {props?.cartPC?.map((el: any, index: any) => {
            return (
              <ProductInCart
                {...el}
                key={index}
                total={props.total}
                setTotal={props.setTotal}
              />
            );
          })}
        </Grid>
      </Box>
      <Divider borderColor={"black"} borderWidth={"1px"} />
      <VStack align={"stretch"}>
        <Flex>
          <Text fontWeight={"500"}>Total Sales</Text>
          <Spacer />
          <Text fontWeight={"500"}>{props.total}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={"500"}>Total Diskon</Text>
          <Spacer />
          <Text fontWeight={"500"}>300</Text>
        </Flex>
        <Flex>
          <Text fontWeight={"500"}>PPN</Text>
          <Spacer />
          <Text fontWeight={"500"}>{ppn}</Text>
        </Flex>
      </VStack>
      <Divider borderColor={"black"} borderWidth={"1px"} />
      <HStack>
        <Text fontSize={"x-large"} fontWeight={"700"}>
          Total :
        </Text>
        <Spacer />
        <Text fontSize={"x-large"} fontWeight={"700"}></Text>
      </HStack>
      <Spacer />
      <HStack align={"stretch"}>
        <Button
          leftIcon={<BsCartPlusFill />}
          w={"50%"}
          borderRadius={"0.5em"}
          colorScheme="red"
          fontWeight={"bold"}
        >
          Add to Cart
        </Button>
        <Spacer />
        <Button
          leftIcon={<FaMoneyBillWave />}
          w={"50%"}
          borderRadius={"0.5em"}
          colorScheme="red"
          fontWeight={"bold"}
          onClick={onOpen}
        >
          Payment
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Text fontWeight={"bold"} fontSize={"x-large"}>
                  Choose Payment
                </Text>
              </Center>
              <VStack p={"3em"} spacing={"1em"}>
                <Link to={""}>
                  <Box
                    w={"15em"}
                    h={"8em"}
                    display={"flex"}
                    flexDir={"row"}
                    _focusVisible={{ color: "red" }}
                    _hover={{ bgColor: "orange.100" }}
                    borderRadius={"0.5em"}
                    bgColor={"#EEF1F2"}
                    border={cash ? "solid #F99B2A" : "solid #6D6D6D"}
                    boxShadow={"lg"}
                  >
                    <VStack
                      spacing={"0"}
                      onClick={() => {
                        setWallet(false);
                        setQris(false);
                        setCash(!cash);
                        setChange(!change);
                      }}
                      bgColor={cash ? "#FFDAAD" : "transparent"}
                      w={"100%"}
                      borderRadius={".5em"}
                      p={".65em"}
                      cursor={"pointer"}
                    >
                      <Box
                        color={cash ? "#F99B2A" : "#6D6D6D"}
                        fontSize={"5em"}
                      >
                        <FaRegMoneyBillAlt />
                      </Box>
                      <Box color={cash ? "#F99B2A" : "#6D6D6D"}>
                        <Text as={cash ? "b" : "b"} fontSize={"xl"}>
                          Cash
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Link>
                <Input
                  boxShadow={"md"}
                  display={change ? "block" : "none"}
                  type={"number"}
                  placeholder={"Payment Amount"}
                  w={"15em"}
                  focusBorderColor={"#6D6D6D"}
                />
                <Link to={""}>
                  <Box
                    w={"15em"}
                    h={"8em"}
                    display={"flex"}
                    flexDir={"row"}
                    _focusVisible={{ color: "red" }}
                    _hover={{ bgColor: "orange.100" }}
                    borderRadius={"0.5em"}
                    bgColor={"#EEF1F2"}
                    border={qris ? "solid #F99B2A" : "solid #6D6D6D"}
                    boxShadow={"lg"}
                  >
                    <VStack
                      spacing={"0"}
                      onClick={() => {
                        setWallet(false);
                        setCash(false);
                        setChange(false);
                        setQris(!qris);
                      }}
                      bgColor={qris ? "#FFDAAD" : "transparent"}
                      w={"100%"}
                      borderRadius={".5em"}
                      p={".65em"}
                      cursor={"pointer"}
                    >
                      <Box
                        color={qris ? "#F99B2A" : "#6D6D6D"}
                        fontSize={"5em"}
                      >
                        <MdOutlineQrCode2 />
                      </Box>
                      <Box color={qris ? "#F99B2A" : "#6D6D6D"}>
                        <Text as={qris ? "b" : "b"} fontSize={"xl"}>
                          Qris
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Link>
                <Link to={""}>
                  <Box
                    w={"15em"}
                    h={"8em"}
                    display={"flex"}
                    flexDir={"row"}
                    _focusVisible={{ color: "red" }}
                    _hover={{ bgColor: "orange.100" }}
                    borderRadius={"0.5em"}
                    bgColor={"#EEF1F2"}
                    border={wallet ? "solid #F99B2A" : "solid #6D6D6D"}
                    boxShadow={"lg"}
                  >
                    <VStack
                      spacing={"0"}
                      onClick={() => {
                        setCash(false);
                        setQris(false);
                        setChange(false);
                        setWallet(!wallet);
                      }}
                      bgColor={wallet ? "#FFDAAD" : "transparent"}
                      w={"100%"}
                      borderRadius={".5em"}
                      p={".65em"}
                      cursor={"pointer"}
                    >
                      <Box
                        color={wallet ? "#F99B2A" : "#6D6D6D"}
                        fontSize={"5em"}
                      >
                        <MdOutlineWallet />
                      </Box>
                      <Box color={wallet ? "#F99B2A" : "#6D6D6D"}>
                        <Text as={wallet ? "b" : "b"} fontSize={"xl"}>
                          E-Wallet
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Link>
              </VStack>
            </ModalBody>
            <Box p={"1em"}>
              <Center>
                <Button
                  leftIcon={<FaCheckCircle />}
                  type={"submit"}
                  onClick={onClose}
                  colorScheme={"red"}
                  w={"20em"}
                  fontWeight={"bold"}
                >
                  Process Order
                </Button>
              </Center>
            </Box>
          </ModalContent>
        </Modal>
      </HStack>
    </VStack>
  );
}
