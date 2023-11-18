import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import product1 from "./img/product1.png";
import { Image } from "@chakra-ui/image";
import { IconButton } from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Spacer } from "@chakra-ui/react";
import useCounter from "../ProductCard/useCounter";
import { useState, useEffect } from "react";
export default function ProductInCart(props: any) {
  const [count, increment, decrement] = useCounter(props.qty);
  const [totalPPrice, setTotalPPrice] = useState(
    props.product_price * props.qty
  );
  useEffect(() => {
    setTotalPPrice(props.qty * props.product_price);
  }, [totalPPrice, setTotalPPrice, props.qty, count, increment, decrement]);

  const plus = (id: number) => {
    props?.setCart(
      props?.cart.map((el: any) => {
        if (el?.id === id) {
          console.log(el.id === id);
          return {
            ...el,
            qty: el.qty + 1,
          };
        } else {
          return el;
        }
      })
    );
    setTotalPPrice(props.qty * props.product_price);
    increment();
    props?.setTotal(props.total + props.product_price);
  };

  const minus = (id: number) => {
    props?.setCart(
      props?.cart.map((el: any) => {
        if (el?.id === id) {
          return {
            ...el,
            qty: el.qty - 1,
          };
        } else {
          return el;
        }
      })
    );
    setTotalPPrice(totalPPrice - props.product_price);
    decrement();
    props?.setTotal(props.total - props.product_price);
  };

  const handleDelete = (id: number) => {
    props?.setCart(props?.cart.filter((el: any) => el.id !== id));
  };

  return (
    <HStack boxShadow={"sm"} borderRadius={"0.5em"}>
      <Box>
        <Image src={product1} borderRadius={"0.5em"} boxSize={"5em"} />
      </Box>
      <VStack align={"stretch"} spacing={"0"}>
        <Text fontWeight={"400"}>{props.product_name}</Text>
        <Text
          fontWeight={"400"}
        >{`${props.qty} X Rp ${props.product_price}`}</Text>
        <Text>Sum : Rp {totalPPrice}</Text>
      </VStack>
      <Spacer />
      <VStack align={"stretch"}>
        <HStack spacing={"0"}>
          <IconButton
            aria-label="Minus"
            icon={<FaMinusCircle />}
            variant={"ghost"}
            size={"md"}
            onClick={() => {
              count > 1 ? minus(props?.id) : null;
            }}
          />
          <IconButton
            aria-label="Plus"
            icon={<FaPlusCircle />}
            variant={"ghost"}
            size={"md"}
            onClick={() => {
              count !== 100 ? plus(props?.id) : null;
            }}
          />
          <IconButton
            aria-label="Delete"
            icon={<MdDelete />}
            size={"md"}
            variant={"ghost"}
            onClick={() => {
              handleDelete(props?.id);
              setTotalPPrice(0);
              props.setTotal(0);
            }}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
