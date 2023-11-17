import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../../component/SideBar";
import { NavBar } from "../../component/NavBar";
export default function ProductView() {
  return (
    <Grid
      templateAreas={`
      "nav header"
      "nav main"
      "nav main"`}
      gridTemplateColumns={"1fr 3fr"}
      gridTemplateRows={"3em 1fr 3em"}
      h={"100vh"}
      maxW={"100vw"}
      overflow={"hidden"}
      gap={".5em"}
      bgColor={"#EEF1F2"}
      p={"0 1em 0 0"}
    >
      <GridItem bg={"orange.300"} area={"nav"}><SideBar/></GridItem>
      <GridItem area={"header"} bg={"red"}><NavBar/></GridItem>
      <GridItem area={"main"} bg={"blue"}></GridItem>
    </Grid>
  );
}
