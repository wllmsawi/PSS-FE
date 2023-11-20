import {
  Box,
  Button,
  Flex,
  HStack,
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
} from "@chakra-ui/react";
import { CreateCategoryModal } from "../Category/component/CreateCategoryModal";
import { CreateProductModal } from "../AdminProductList/component/CreateProductModal";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { EditProductModal } from "../AdminProductList/component/EditProductModal";

export const Report = (props: any) => {
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
                  {props?.product?.map(
                    (el: any, index: number) => {
                      return (
                        <Tr
                          cursor={"pointer"}
                          key={index}
                          p={".875em"}
                          bgColor={"#FAFAFA"}
                        >
                          <Td textAlign={"center"}>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Image
                                src={`${
                                  import.meta.env
                                    .VITE_APP_API_IMAGE_URL
                                }/product/${
                                  el?.product_image
                                }`}
                                maxH={"3em"}
                                objectFit={"contain"}
                              />
                            </Flex>
                          </Td>
                          <Td textAlign={"center"}>
                            {el?.product_name}
                          </Td>
                          <Td
                            textAlign={"center"}
                          >{`PSS-CK-${el?.id}`}</Td>
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
                          <Td textAlign={"center"}>
                            <Link to={""}>
                              <EditProductModal
                              // {...el}
                              // product_status={status}
                              // group={group}
                              // category={category}
                              />
                            </Link>
                          </Td>
                        </Tr>
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
                  // setPage(
                  //   Number(
                  //     (e.target as HTMLInputElement).value
                  //   )
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
                  // setPage(
                  //   Number(
                  //     (e.target as HTMLInputElement).value
                  //   )
                  // );
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
                  // setPage(
                  //   Number(
                  //     (e.target as HTMLInputElement).value
                  //   )
                  // );
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
                  // setPage(
                  //   Number(
                  //     (e.target as HTMLInputElement).value
                  //   )
                  // );
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
                  // setPage(
                  //   Number(
                  //     (e.target as HTMLInputElement).value
                  //   )
                  // );
                }}
                variant={"link"}
                value={5}
              >
                5
              </Button>
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  // setPage(page + 1);
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
                      // setCatId(0);
                      // setGroupId(0);
                      // setPage(
                      //   Number(
                      //     (e.target as HTMLInputElement)
                      //       .value
                      //   )
                      // );

                      // e.currentTarget.value = "";
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
