import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiNotification3Fill } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import budi from "./img/budi.jpg";
export const NavBar = (props?: any | null) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
    props?.setDay(`${days[date.getDay()]}`);
  });
  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"0 .5em 0 0"}
      zIndex={100}
      // bg={"red"}
    >
      <HStack>
        <Text fontWeight={"bold"}>{time}</Text>
        <Text>{day}</Text>
      </HStack>
      <Spacer />
      <HStack spacing={"1em"}>
        <Box borderRadius={"50%"} bgColor={"#FAFAFA"} p={".5em"}>
          <BsCartFill />
        </Box>
        <Box borderRadius={"50%"} bgColor={"#FAFAFA"} p={".5em"}>
          <RiNotification3Fill />
        </Box>

        <Box borderRadius={"50%"} p={".5em"}>
          <Box overflow={"hidden"} onClick={onOpen}>
            <Image src={budi} borderRadius={"50%"} boxSize={"2em"} />
          </Box>
        </Box>
        <VStack spacing={"0"} align={"flex-start"} lineHeight={"1"}>
          <Text fontWeight={"bold"}>Budi</Text>
          <Text fontSize={".75em"}>Admin</Text>
        </VStack>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Center>
            <Text fontWeight={"bold"} fontSize={"x-large"}>
              Update Profile Picture
            </Text>
          </Center>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
