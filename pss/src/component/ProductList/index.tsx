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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { ProductCard } from "../ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductList = (props: any) => {
  const [branchId, setBranchId] = useState(1);
  const [product, setProduct] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("product_name");
  const [search, setSearch] = useState("");
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
  }, [page, pageSize, sortOrder, sortField]);

  return (
    <Box bgColor={"#FFFFFF"} h={"100%"} borderRadius={"1.5em"} p={"1.5em"}>
      <Flex flexDir={"column"} h={"100%"}>
        <HStack spacing={"1.875em"}>
          <Link to={""}>Kitchen</Link>
          <Link to={""}>Beverages</Link>
        </HStack>
        <Spacer />
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
          <Spacer />
          <HStack>
            <Select
              w={"8em"}
              size={"sm"}
              borderRadius={"0.5em"}
              onChange={(e) => {
                setSortField("product_name");
                setSortOrder(e.target.value);
              }}
            >
              <option value={"asc"}>Name A-Z</option>
              <option value={"desc"}>Name Z-A</option>
            </Select>
            <Select
              w={"8em"}
              size={"sm"}
              borderRadius={"0.5em"}
              onChange={(e) => {
                setSortField("product_price");
                setSortOrder(e.target.value);
              }}
            >
              <option value={"asc"}>Lowest Price</option>
              <option value={"desc"}>Highest Price</option>
            </Select>
          </HStack>
        </HStack>
        <Spacer />
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
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
        <Spacer />
        <Grid
          gap={"1em"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          h={"20em"}
          overflow={"auto"}
          p={"2em 0"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {product
            .filter((el) => {
              if (search === "") {
                return el;
              } else if (
                el.product_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return el;
              }
            })
            .map((el, index) => (
              <ProductCard
                key={index}
                {...el}
                cart={props.cart}
                setCart={props.setCart}
                total={props.total}
                setTotal={props.setTotal}
                handlePlus={props.handlePlus}
              />
            ))}
        </Grid>
        <Spacer />
        <Box
          overflow={"hidden"}
          bgColor={"#FAFAFA"}
          p={".875em"}
          borderRadius={"1em"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <HStack spacing={"2.5em"} fontWeight={"bold"}>
              <Text>Page</Text>
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(Number((e.target as HTMLInputElement).value));
                  // setPageSize(
                  //   Number((e.target as HTMLInputElement).value) * 10
                  // );
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
                  setPage(Number((e.target as HTMLInputElement).value));
                  // setPageSize(
                  //   Number((e.target as HTMLInputElement).value)
                  // );
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
                  setPage(Number((e.target as HTMLInputElement).value));
                  // setPageSize(
                  //   Number((e.target as HTMLInputElement).value)
                  // );
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
                  setPage(Number((e.target as HTMLInputElement).value));
                  // setPageSize(
                  //   Number((e.target as HTMLInputElement).value)
                  // );
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
                  setPage(Number((e.target as HTMLInputElement).value));
                  // setPageSize(
                  //   Number((e.target as HTMLInputElement).value)
                  // );
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
                textAlign={"center"}
                type="number"
                borderRadius={".5em"}
                bg={"#EEF1F2"}
                border={"none"}
                w={"2.5em"}
                focusBorderColor={"transparent"}
                p={".5em"}
                onChange={(e) => {
                  setPage(Number((e.target as HTMLInputElement).value));
                  setPageSize(10);
                }}
              />
            </form>
            <Spacer />
            <Text>of 30 pages</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
