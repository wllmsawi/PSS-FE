import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../../component/SideBar";
import Cart from "../../component/Cart";

export default function Transaction() {
  return (
    <Grid
    templateAreas={`
      "nav header header"
      "nav product cart"
      "nav product cart"`}
    gridTemplateColumns={"1fr 3fr 2fr"}
    gridTemplateRows={"3em 1fr 3em"}
    maxH={"100vh"}
    maxW={"100vw"}
    gap={".5em"}
    bg={"#EEF1F2"}
    overflow={"hidden"}
  >
    <GridItem area={"nav"}><SideBar/></GridItem>
    <GridItem bg={"red.300"} area={"header"}></GridItem>
    <GridItem bg={"green.300"} area={"product"}></GridItem>
    <GridItem area={"cart"}><Cart/></GridItem>
  </Grid>
  );
}
