import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout";
import ProductInCart from "../ProductInCart";
import { Button } from "@chakra-ui/button";
import { BsCartPlusFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Cart() {
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
            Chasier
          </Text>
          <Text fontWeight={"500"}>Samuel Williams</Text>
        </VStack>
        <Divider borderColor={"black"} borderWidth={"1px"} mt={"0.5em"}/>
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
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
          </Grid>
        </Box>
        <Divider borderColor={"black"} borderWidth={"1px"} />
        <VStack align={"stretch"}>
          <Flex>
            <Text fontWeight={"500"}>Total Sales</Text>
            <Spacer />
            <Text fontWeight={"500"}>30000</Text>
          </Flex>
          <Flex>
            <Text fontWeight={"500"}>Total Diskon</Text>
            <Spacer />
            <Text fontWeight={"500"}>300</Text>
          </Flex>
          <Flex>
            <Text fontWeight={"500"}>PPN</Text>
            <Spacer />
            <Text fontWeight={"500"}>3000</Text>
          </Flex>
        </VStack>
        <Divider borderColor={"black"} borderWidth={"1px"} />
        <HStack>
          <Text fontSize={"x-large"} fontWeight={"700"}>
            Total :
          </Text>
          <Spacer />
          <Text fontSize={"x-large"} fontWeight={"700"}>
            33000
          </Text>
        </HStack>
        <Spacer/>
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
          >
            Payment
          </Button>
        </HStack>
      </VStack>
  );
}
