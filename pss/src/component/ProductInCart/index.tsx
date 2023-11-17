import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import product1 from "./img/product1.png";
import { Image } from "@chakra-ui/image";
import { IconButton } from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useCounter from "../ProductCard/useCounter";
export default function ProductInCart(props: any) {

  const [count, increment, decrement] = useCounter(props.qty);
  const plus = () => {
    increment();
    props.setTotal(props.total + props.product_price);
  };

  const minus = () => {
    decrement();
    props.setTotal(props.total - props.product_price);
  };

  return (
    <HStack>
      <Box>
        <Image src={product1} borderRadius={"0.5em"} boxSize={"5em"} />
      </Box>
      <VStack align={"stretch"} spacing={"1em"}>
        <Text fontWeight={"400"}>{props.product_name}</Text>
        <Text
          fontWeight={"400"}
        >{`${count} X Rp. ${props.product_price}`}</Text>
      </VStack>
      <Spacer />
      <VStack align={"stretch"}>
        <HStack spacing={"0"}>
          <IconButton
            aria-label="Minus"
            icon={<FaMinusCircle />}
            variant={"ghost"}
            size={"md"}
            onClick={() => { count > 0 ? minus() : null}}
          />
          <IconButton
            aria-label="Plus"
            icon={<FaPlusCircle />}
            variant={"ghost"}
            size={"md"}
            onClick={() => { count !== 100 ? plus() : null}}
          />
          <IconButton
            aria-label="Delete"
            icon={<MdDelete />}
            size={"md"}
            variant={"ghost"}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
