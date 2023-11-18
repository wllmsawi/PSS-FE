import { Box, Image, VStack } from "@chakra-ui/react";
import cklogo from "./components/cklogo.png";
import { useState } from "react";
import { SidebarBox } from "./components/SidebarBox";
export default function SideBar() {
  const [order, setOrder] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [logout, setLogout] = useState(false);
  return (
    <VStack
      top={"0"}
      w={"100%"}
      h={"100%"}
      bgColor={"red.400"}
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
        <SidebarBox text={"Dashboard"} />
        <SidebarBox text={"Report"} />
        <SidebarBox
          text={"Inventory"}
          to={"/admin/inventory"}
        />
        <SidebarBox
          text={"Product"}
          to={"/admin/product"}
        />
        <SidebarBox
          text={"Employee"}
          to={"/admin/dashboard"}
        />
      </VStack>
      <SidebarBox text={"LogOut"} />
    </VStack>
  );
}
