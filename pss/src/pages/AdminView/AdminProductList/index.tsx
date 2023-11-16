import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
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
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

import esKopiSusuGulaAren from "../../../../../../PSS/src/public/images/product/product_2023_10_13_es_kopi_susu_gula_aren.jpg";

export const AdminProductList = () => {
  const [product, setProduct] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] =
    useState("product_name");
  const [branchId, setBranchId] = useState(1);
  const fetchProduct = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `http://localhost:8000/product?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortField=${sortField}&branch_id=${branchId}`
      );
      setProduct(res?.data?.result);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [page, pageSize]);
  return (
    <Box
      bgColor={"#FFFFFF"}
      h={"100%"}
      borderRadius={"1.5em"}
      p={"1.5em"}
    >
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
            <InputLeftElement
              color={"#6D6D6D"}
              pointerEvents="none"
            >
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
        >
          <Table
            variant={"simple"}
            style={{
              borderCollapse: "separate",
              borderSpacing: "0 .5em",

              borderRadius: ".5em",
              border: "1px solid red",
              overflow: "hidden",
            }}
          >
            <Thead bg={"#ED1C24"}>
              <Tr>
                <Th color={"#FEFEFE"} textAlign={"center"}>
                  Photo
                </Th>
                <Th color={"#FEFEFE"} textAlign={"center"}>
                  Name
                </Th>
                <Th color={"#FEFEFE"} textAlign={"center"}>
                  SKU
                </Th>

                <Th color={"#FEFEFE"} textAlign={"center"}>
                  Category
                </Th>
                <Th color={"#FEFEFE"} textAlign={"center"}>
                  Type
                </Th>
                <Th color={"#FEFEFE"} textAlign={"center"}>
                  Unit
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.map((el) => {
                return (
                  <Tr p={".875em"} bgColor={"#FAFAFA"}>
                    <Td textAlign={"center"}>
                      <Image
                        src={`/../../../../../../PSS/src/public/images/product/es_kopi_susu_gula_aren.jpg`}
                      />
                    </Td>
                    <Td textAlign={"center"}>
                      {el?.product_name}
                    </Td>
                    <Td textAlign={"center"}></Td>
                    <Td textAlign={"center"}>
                      {
                        el?.product_category
                          ?.product_category_name
                      }
                    </Td>
                    <Td textAlign={"center"}>
                      {
                        el?.product_group
                          ?.product_group_name
                      }
                    </Td>
                    <Td textAlign={"center"}>
                      Pieces(pcs)
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Spacer />
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
        >
          <HStack spacing={"2.5em"} fontWeight={"bold"}>
            <Text>Page</Text>
            <Button
              _active={{ color: "#ED1C24" }}
              _focus={{ color: "#ED1C24" }}
              onClick={(e) => {
                setPage(
                  Number(
                    (e.target as HTMLInputElement).value
                  )
                );
                setPageSize(
                  Number(
                    (e.target as HTMLInputElement).value
                  ) * 10
                );
              }}
              variant={"link"}
              value={1}
            >
              1
            </Button>
            <Button
              _active={{ color: "#ED1C24" }}
              _focus={{ color: "#ED1C24" }}
              onClick={(e) => {
                setPage(
                  Number(
                    (e.target as HTMLInputElement).value
                  )
                );
                setPageSize(
                  Number(
                    (e.target as HTMLInputElement).value
                  ) * 10
                );
              }}
              variant={"link"}
              value={2}
            >
              2
            </Button>
            <Button
              _active={{ color: "#ED1C24" }}
              _focus={{ color: "#ED1C24" }}
              onClick={(e) => {
                setPage(
                  Number(
                    (e.target as HTMLInputElement).value
                  )
                );
                setPageSize(
                  Number(
                    (e.target as HTMLInputElement).value
                  ) * 10
                );
              }}
              variant={"link"}
              value={3}
            >
              3
            </Button>
            <Button
              _active={{ color: "#ED1C24" }}
              _focus={{ color: "#ED1C24" }}
              onClick={(e) => {
                setPage(
                  Number(
                    (e.target as HTMLInputElement).value
                  )
                );
                setPageSize(
                  Number(
                    (e.target as HTMLInputElement).value
                  ) * 10
                );
              }}
              variant={"link"}
              value={4}
            >
              4
            </Button>
            <Button
              _active={{ color: "#ED1C24" }}
              _focus={{ color: "#ED1C24" }}
              onClick={(e) => {
                setPage(
                  Number(
                    (e.target as HTMLInputElement).value
                  )
                );
                setPageSize(
                  Number(
                    (e.target as HTMLInputElement).value
                  ) * 10
                );
              }}
              variant={"link"}
              value={5}
            >
              5
            </Button>
          </HStack>

          <Spacer />
          <form>
            <Input
              type="number"
              borderRadius={".5em"}
              bg={"#EEF1F2"}
              border={"none"}
              w={"2.5em"}
              focusBorderColor={"transparent"}
              p={".5em"}
              onChange={(e) => {
                setPage(
                  Number(
                    (e.target as HTMLInputElement).value
                  )
                );
                setPageSize(
                  Number(
                    (e.target as HTMLInputElement).value
                  ) * 10
                );
              }}
            />
          </form>
          <Spacer />
          <Text>of 30 pages</Text>
        </Flex>
      </Flex>
    </Box>
  );
};