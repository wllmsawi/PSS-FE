import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { CreateCategoryModal } from "../Category/component/CreateCategoryModal";
import { CreateProductModal } from "../AdminProductList/component/CreateProductModal";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import {
  FaAngleRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { EditProductModal } from "../AdminProductList/component/EditProductModal";
import { useEffect, useState } from "react";
import axios from "axios";
import * as toRupiah from "@develoka/angka-rupiah-js";
import ProductInCart from "../../../component/ProductInCart";
export const Report = (props: any) => {
  const [transaction, setTransaction] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/transaction?page=${page}&pageSize=${pageSize}&startDate=2023-11-01&endDate=2023-11-30`
      );
      setTransaction(res?.data?.data);
    } catch (err) {
      throw err;
    }
  };
  const [show, setShow] = useState<any>({});
  const toggleShow = (id: number) => () => {
    setShow((set: any) => ({
      ...set,
      [id]: !set[id],
    }));
  };
  console.log("SHOW", show);
  useEffect(() => {
    fetchTransactions();
  }, [page, pageSize]);
  return (
    <Flex
      h={"100%"}
      borderRadius={"1em"}
      padding={""}
      flexDir={"column"}
    >
      <Box alignSelf={"flex-end"}></Box>
      <Spacer m={".3em 0"} />
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
          flexDir={"column"}
        >
          <HStack spacing={"1.875em"}></HStack>
          <Spacer m={".3em"} />
          <Flex w={"100%"}>
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
                onKeyDown={(e: any) => {
                  if (e.keyCode == 13) {
                    e.currentTarget.value = "";
                  }
                }}
              />
            </InputGroup>
          </Flex>
          <Spacer m={".3em"} />
          <Box
            h={"25em"}
            overflowX={"scroll"}
            overflowY={"scroll"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <TableContainer w={"100%"}>
              <Table
                variant={"simple"}
                style={{
                  borderCollapse: "separate",
                  borderSpacing: "0 .5em",
                  padding: "0",
                  borderRadius: ".5em",
                  overflow: "hidden",
                }}
              >
                <Thead
                  bg={"#ED1C24"}
                  position={"relative"}
                  top={"-.5em"}
                >
                  <Tr>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Transaction No
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Name
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Date & Time
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Payment
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Amount
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Cashier
                    </Th>
                    <Th textAlign={"center"}></Th>
                  </Tr>
                </Thead>
                <Tbody
                  position={"relative"}
                  top={"-.5em"}
                  color={"#6D6D6D"}
                  fontWeight={"500"}
                >
                  {transaction?.map(
                    (el: any, index: number) => {
                      return (
                        <>
                          <Tr
                            cursor={"pointer"}
                            key={index}
                            p={".875em"}
                            bgColor={"#FAFAFA"}
                          >
                            <Td textAlign={"center"}>
                              {`PSS-CK-${el?.id}`}
                            </Td>
                            <Td textAlign={"center"}>
                              {el?.customer_name
                                ? el?.customer_name
                                : "Customer"}
                            </Td>
                            <Td textAlign={"center"}>
                              {`${
                                (el?.date).split("T")[0]
                              }`}
                            </Td>
                            <Td textAlign={"center"}>
                              {
                                el?.payment_method
                                  ?.method_name
                              }
                            </Td>
                            <Td textAlign={"center"}>
                              {toRupiah(el?.payment_amount)}
                            </Td>
                            <Td textAlign={"center"}>
                              {
                                (el?.user?.full_name).split(
                                  " "
                                )[0]
                              }
                            </Td>
                            <Td
                              textAlign={"center"}
                              onClick={toggleShow(el?.id)}
                            >
                              <Flex align={"center"}>
                                <Text color={"#F99B2A"}>
                                  Details
                                </Text>
                                <IconButton
                                  aria-label=""
                                  bg={"transparent"}
                                  color={"#F99B2A"}
                                  size={"sm"}
                                  _hover={{
                                    bg: "transparent",
                                  }}
                                  icon={
                                    show[el?.id] ? (
                                      <FaChevronUp />
                                    ) : (
                                      <FaChevronDown />
                                    )
                                  }
                                />
                              </Flex>
                            </Td>
                          </Tr>
                          <Tr
                            display={
                              show[el?.id] ? "" : "none"
                            }
                          >
                            <Td
                              colSpan={7}
                              color={"#1C1D21"}
                            >
                              <Flex w={"100%"}>
                                <Box w={"50%"} h={"100%"}>
                                  <VStack align={"stretch"}>
                                    <Text>Item</Text>
                                    {el?.transaction_detail.map(
                                      (el: any) => {
                                        return (
                                          <Box w={"100%"}>
                                            <ProductInCart
                                              display={
                                                "none"
                                              }
                                              product_name={
                                                el?.product
                                                  ?.product_name
                                              }
                                              qty={1}
                                              product_price={
                                                el?.product
                                                  ?.product_price
                                              }
                                              image={
                                                el?.product
                                                  ?.product_image
                                              }
                                            />
                                          </Box>
                                        );
                                      }
                                    )}
                                  </VStack>
                                </Box>
                                <Spacer m={"0 .5em"} />
                                <Box w={"50%"}>
                                  <VStack
                                    flexDir={"column"}
                                    align={"stretch"}
                                  >
                                    <Divider
                                      borderColor={"black"}
                                      borderWidth={"1px"}
                                    />
                                    <Flex>
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        Total Sales
                                      </Text>
                                      <Spacer />
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        {toRupiah(
                                          el?.total_price_ppn
                                        )}
                                      </Text>
                                    </Flex>
                                    <Flex>
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        Total Diskon
                                      </Text>
                                      <Spacer />
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        {el?.diskon
                                          ? ""
                                          : toRupiah("0")}
                                      </Text>
                                    </Flex>
                                    <Flex>
                                      <Text>DPP</Text>
                                      <Spacer />
                                      <Text>
                                        {toRupiah(
                                          el?.total_price
                                        )}
                                      </Text>
                                    </Flex>
                                    <Flex>
                                      <Text>PPN</Text>
                                      <Spacer />
                                      <Text>
                                        {toRupiah(
                                          el?.total_price_ppn -
                                            el?.total_price
                                        )}
                                      </Text>
                                    </Flex>
                                    <Divider
                                      borderColor={"black"}
                                      borderWidth={"1px"}
                                    />
                                    <Flex
                                      fontWeight={"bold"}
                                    >
                                      <Text>Total</Text>
                                      <Spacer />
                                      <Text>
                                        {toRupiah(
                                          el?.total_price_ppn
                                        )}
                                      </Text>
                                    </Flex>
                                  </VStack>
                                </Box>
                              </Flex>
                            </Td>
                          </Tr>
                        </>
                      );
                    }
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Spacer />
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"28em"}
          >
            <Flex fontWeight={"bold"}>
              <Box>
                <Text>Page</Text>
              </Box>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
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
                }}
                variant={"link"}
                value={2}
              >
                2
              </Button>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={3}
              >
                3
              </Button>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={4}
              >
                4
              </Button>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={5}
              >
                5
              </Button>
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={() => {
                  setPage(page + 1);
                }}
                variant={"link"}
                value={5}
              >
                <FaAngleRight />
              </Button>
            </Flex>
            <Spacer />
            <Box>
              <form>
                <Input
                  textAlign={"center"}
                  type="number"
                  borderRadius={".5em"}
                  bg={"#EEF1F2"}
                  border={"none"}
                  w={"2.5em"}
                  color={"#6D6D6D"}
                  fontWeight={"500"}
                  focusBorderColor={"transparent"}
                  p={".5em"}
                  onChange={() => {
                    // setCatId(0);
                    // setGroupId(0);
                  }}
                  onKeyDown={(e: any) => {
                    console.log("CHECK ENTER", e.code);
                    if (e.keyCode == 13) {
                      e.preventDefault();
                      setPage(
                        Number(
                          (e.target as HTMLInputElement)
                            .value
                        )
                      );

                      e.currentTarget.value = "";
                    }
                  }}
                />
              </form>
            </Box>
            <Spacer />
            <Box>
              <Text color={"#6D6D6D"} fontWeight={"500"}>
                of 5 pages
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
