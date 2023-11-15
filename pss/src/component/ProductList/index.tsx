import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  return (
    <Box bgColor={"#FFFFFF"} h={"100%"} borderRadius={"1.5em"} p={"1.5em"}>
      <VStack align={"stretch"} spacing={"1.875em"}>
        <HStack spacing={"1.875em"}>
          <Link to={""}>Kitchen</Link>
          <Link to={""}>Beverages</Link>
        </HStack>
        <HStack spacing={"2em"}>
          <Link to={""}>
            <Button
              p={"1em"}
              bg={"#EEF1F2"}
              border={"1px solid #6D6D6D"}
              size={"sm"}
              _hover={{
                bg: "#FFDAAD",
                color: "#F99B2A",
                border: "1px solid #F99B2A ",
              }}
              _active={{
                bg: "#FFDAAD",
                color: "#F99B2A",
                border: "1px solid #F99B2A ",
              }}
            >
              All
            </Button>
          </Link>
          <Link to={""}>
            <Button
              p={"1em"}
              bg={"#EEF1F2"}
              border={"1px solid #6D6D6D"}
              size={"sm"}
              _hover={{
                bg: "#FFDAAD",
                color: "#F99B2A",
                border: "1px solid #F99B2A ",
              }}
              _active={{ bg: "#FFDAAD", color: "#F99B2A" }}
            >
              Food
            </Button>
          </Link>
          <Link to={""}>
            <Button
              p={"1em"}
              bg={"#EEF1F2"}
              border={"1px solid #6D6D6D"}
              size={"sm"}
              _hover={{
                bg: "#FFDAAD",
                color: "#F99B2A",
                border: "1px solid #F99B2A ",
              }}
              _active={{ bg: "#FFDAAD", color: "#F99B2A" }}
            >
              Beverages
            </Button>
          </Link>
          <Spacer/>
          <Select size={"sm"} borderRadius={"0.5em"}>
            <option>Product Name A-Z</option>
            <option>Product Name Z-A</option>
            <option>Most Expensive</option>
            <option>Cheapest</option>
          </Select>
        </HStack>
        <InputGroup>
          <InputLeftElement color={"#6D6D6D"} pointerEvents="none">
            <IoIosSearch />
          </InputLeftElement>
          <Input
            type="text"
            borderRadius={"1.25em"}
            bg={"#EEF1F2"}
            border={"none"}
            focusBorderColor={"transparent"}
          />
        </InputGroup>
        <Grid
          gap={"1em"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          h={"20em"}
          overflow={"auto"}
          p={"1em 0"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            }
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
        <Box
          overflow={"hidden"}
          bgColor={"#FAFAFA"}
          p={".875em"}
          borderRadius={"1em"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <HStack spacing={"2.5em"} fontWeight={"bold"}>
              <Text>Page</Text>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
              <Text>4</Text>
              <Text>5</Text>
            </HStack>
            <Spacer />
            <Input
              type="number"
              borderRadius={".5em"}
              bg={"#EEF1F2"}
              border={"none"}
              w={"2.5em"}
              focusBorderColor={"transparent"}
              p={".5em"}
            />
            <Spacer />
            <Text>of 30 pages</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};
