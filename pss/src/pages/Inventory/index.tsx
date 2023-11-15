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
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export const Inventory = () => {
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
          <Table variant={"simple"}>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Type</Th>
                <Th>In Stock</Th>
                <Th>Unit</Th>
                <Th>Stock Alert</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>----</Td>
                <Td>----</Td>
                <Td>----</Td>
                <Td>----</Td>
                <Td>----</Td>
                <Td>----</Td>
              </Tr>
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
