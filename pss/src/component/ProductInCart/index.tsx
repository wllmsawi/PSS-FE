import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import product1 from "./img/product1.png";
import { Image } from "@chakra-ui/image";
import { IconButton } from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Spacer } from "@chakra-ui/react";

export default function ProductInCart(props: any) {
  return (
    <HStack>
      <Box>
        <Image src={product1} borderRadius={"0.5em"} boxSize={"5em"} />
      </Box>
      <VStack align={"stretch"} spacing={"1em"}>
        <Text fontWeight={"400"}>{props.product_name}</Text>
        <Text fontWeight={"400"}>{`1 X Rp. ${props.product_price}`}</Text>
      </VStack>
      <Spacer />
      <VStack align={"stretch"}>
        <HStack spacing={"0"}>
          <IconButton
            aria-label="Minus"
            icon={<FaMinusCircle />}
            variant={"ghost"}
            size={"md"}
          />
          <IconButton
            aria-label="Plus"
            icon={<FaPlusCircle />}
            variant={"ghost"}
            size={"md"}
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
