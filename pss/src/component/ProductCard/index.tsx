import { Box, Flex, Text } from "@chakra-ui/react";

export const ProductCard = () => {
  return (
    <Box
      h={"264px"}
      boxShadow={"lg"}
      borderRadius={"1em"}
      overflow={"hidden"}
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
          Product Name
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={".75em"}
          as={"s"}
        >
          Rp 15.000
        </Text>
        <Text color={"#F99B2A"} fontWeight={"bold"}>
          Rp 10.000
        </Text>
      </Flex>
    </Box>
  );
};
