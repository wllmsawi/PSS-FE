import {
  Box,
  Text,
  Image,
  Center,
  VStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import logo from "../../component/SideBar/cklogo.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box w={"100vw"} h={"100vh"} bg={"#ED1C24"}>
      <VStack>
        <Box>
          <Image src={logo} />
        </Box>
        <VStack>
          <Button w={"20em"} onClick={() => navigate("/transaction")}>
            Transaction
          </Button>
          <Button w={"20em"} onClick={() => navigate("/admin")}>
            Admin
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
