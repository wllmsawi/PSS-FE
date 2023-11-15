import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";

export const Inventory = () => {
  const [product, setProduct] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("product_name");
  const fetchProduct = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `http://localhost:8000/product?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortField=${sortField}`
      );
      setProduct(res?.data?.result);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Box bgColor={"#FFFFFF"} h={"100%"} borderRadius={"1.5em"} p={"1.5em"}>
      <Flex
        bg={"#FFFFFF"}
        h={"100%"}
        borderRadius={"1em"}
        padding={""}
        flexDir={"column"}
      >
        <Flex w={"100%"}>
          <Flex w={"25em"}>
            <Link to={""}>
              <Button
                p={"1em"}
                bg={"#EEF1F2"}
                border={"1px solid #6D6D6D"}
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
            <Spacer />
            <Link to={""}>
              <Button
                p={"1em"}
                bg={"#EEF1F2"}
                border={"1px solid #6D6D6D"}
                _hover={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                  border: "1px solid #F99B2A ",
                }}
                _active={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                }}
              >
                In Stock
              </Button>
            </Link>
            <Spacer />
            <Link to={""}>
              <Button
                p={"1em"}
                bg={"#EEF1F2"}
                border={"1px solid #6D6D6D"}
                _hover={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                  border: "1px solid #F99B2A ",
                }}
                _active={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                }}
              >
                Low Stock
              </Button>
            </Link>
            <Spacer />
            <Link to={""}>
              <Button
                p={"1em"}
                bg={"#EEF1F2"}
                border={"1px solid #6D6D6D"}
                _hover={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                  border: "1px solid #F99B2A ",
                }}
                _active={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                }}
              >
                Out of stock
              </Button>
            </Link>
          </Flex>
          <Spacer />
          <InputGroup w={"11em"}>
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
        </Flex>
        <Spacer />
        <TableContainer
          h={"30em"}
          overflow={"auto"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          borderRadius={".5em"}
        >
          <Table variant={"simple"}>
            <Thead bg={"#ED1C24"}>
              <Tr>
                <Th color={"#FEFEFE"}>Name</Th>
                <Th color={"#FEFEFE"}>Category</Th>
                <Th color={"#FEFEFE"}>Type</Th>
                <Th color={"#FEFEFE"}>In Stock</Th>
                <Th color={"#FEFEFE"}>Unit</Th>
                <Th color={"#FEFEFE"}>Stock Alert</Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.map((el) => {
                return (
                  <Tr>
                    <Td>{el?.product_name}</Td>
                    <Td>{el?.product_category?.product_category_name}</Td>
                    <Td>{el?.product_group?.product_group_name}</Td>
                    <Td>----</Td>
                    <Td>Pieces(pcs)</Td>
                    <Td>----</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Spacer />
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
      </Flex>
    </Box>
  );
};
