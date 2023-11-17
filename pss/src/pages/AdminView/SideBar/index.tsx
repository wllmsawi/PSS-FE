import {
  Box,
  HStack,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import cklogo from "./cklogo.png";
import { PiBasketFill } from "react-icons/pi";
import { PiCalculatorFill } from "react-icons/pi";
import { PiNotepadFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [order, setOrder] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [logout, setLogout] = useState(false);
  const { link } = useParams();
  return (
    <VStack
      top={"0"}
      w={"100%"}
      h={"100%"}
      bgColor={"#FAFAFA"}
      p={"3em 1em 1em 1em"}
      spacing={"3.75em"}
    >
      <Box>
        <Image src={cklogo} w={"9.75em"} />
      </Box>
      <VStack
        w={"100%"}
        spacing={"1.5em"}
        align={"flex-end"}
      >
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          _hover={{ bgColor: "red.50" }}
          borderRadius={"0.5em"}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {}}
            bgColor={order ? "red.100" : "transparent"}
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={order ? "red" : "black"}>
              <PiBasketFill />
            </Box>
            <Box color={order ? "red" : "black"}>
              <Link to={"/admin/dashboard"}>
                <Text as={order ? "b" : "b"}>
                  Dashboard
                </Text>
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          _hover={{ bgColor: "red.50" }}
          borderRadius={"0.5em"}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {}}
            bgColor={
              transaction ? "red.100" : "transparent"
            }
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={transaction ? "red" : "black"}>
              <PiCalculatorFill />
            </Box>
            <Box color={transaction ? "red" : "black"}>
              <Link to={"/admin/report"}>
                <Text as={transaction ? "b" : "b"}>
                  Report
                </Text>
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          _hover={{ bgColor: "red.50" }}
          borderRadius={"0.5em"}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {}}
            bgColor={inventory ? "red.100" : "transparent"}
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={inventory ? "red" : "black"}>
              <PiNotepadFill />
            </Box>
            <Box color={inventory ? "red" : "black"}>
              <Link to={"/admin/inventory"}>
                <Text as={inventory ? "b" : "b"}>
                  Inventory
                </Text>
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          _hover={{ bgColor: "red.50" }}
          borderRadius={"0.5em"}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {}}
            bgColor={order ? "red.100" : "transparent"}
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={order ? "red" : "black"}>
              <PiBasketFill />
            </Box>
            <Box color={order ? "red" : "black"}>
              <Link to={"/admin/product"}>
                <Text as={order ? "b" : "b"}>Product</Text>
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          _hover={{ bgColor: "red.50" }}
          borderRadius={"0.5em"}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {}}
            bgColor={
              transaction ? "red.100" : "transparent"
            }
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={transaction ? "red" : "black"}>
              <PiCalculatorFill />
            </Box>
            <Box color={transaction ? "red" : "black"}>
              <Link to={""}>
                <Text as={transaction ? "b" : "b"}>
                  Employee
                </Text>
              </Link>
            </Box>
          </HStack>
        </Box>
      </VStack>
      <Box
        w={"100%"}
        h={"2.5em"}
        display={"flex"}
        flexDir={"row"}
        _focusVisible={{ color: "red" }}
        _hover={{ bgColor: "red.50" }}
        borderRadius={"0.5em"}
      >
        <HStack
          spacing={"1em"}
          onClick={() => {}}
          bgColor={logout ? "red.100" : "transparent"}
          w={"100%"}
          borderRadius={".5em"}
          p={".65em"}
          cursor={"pointer"}
        >
          <Box color={logout ? "red" : "black"}>
            <IoLogOut />
          </Box>
          <Box color={logout ? "red" : "black"}>
            <Link to={""}>
              <Text as={logout ? "b" : "b"}>Log Out</Text>
            </Link>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}
