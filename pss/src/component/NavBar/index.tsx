import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
export const NavBar = () => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    setTime(`${date.getHours()}:${date.getMinutes()}`);
  });
  useEffect(() => {
    setDay(
      `${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`
    );
  });
  return (
    <Flex
      w={"100%"}
      h={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"0 .5em 0 0"}
    >
      <HStack>
        <Text fontWeight={"bold"}>{time}</Text>
        <Text>{day}</Text>
      </HStack>
      <Spacer />
      <HStack spacing={"1em"}>
        <Box
          borderRadius={"50%"}
          bgColor={"#FAFAFA"}
          p={".5em"}
        >
          <IoIosNotifications />
        </Box>
        <Box
          borderRadius={"50%"}
          bgColor={"#FAFAFA"}
          p={".5em"}
        >
          <Box overflow={"hidden"}>
            <Image src={"./img/budi.jpg"} />
          </Box>
        </Box>
        <VStack
          spacing={"0"}
          align={"flex-start"}
          lineHeight={"1"}
        >
          <Text fontWeight={"bold"}>Budi</Text>
          <Text fontSize={".75em"}>Admin</Text>
        </VStack>
      </HStack>
    </Flex>
  );
};
