import { Box, HStack, Text, VStack,} from "@chakra-ui/layout";
import product1 from "./img/product1.png"
import { Image } from "@chakra-ui/image";


export default function ProductInCart() {
    return(
            <HStack>
                <Box>
                <Image src={product1} borderRadius={"0.5em"} boxSize={"5em"}/>
                </Box>
                <VStack align={"stretch"} spacing={"1em"}>
                    <Text fontWeight={"400"}>Iced Coffe Latte</Text>
                    <Text fontWeight={"400"}>1 X 10.000</Text>
                </VStack>
            </HStack>
    )
}