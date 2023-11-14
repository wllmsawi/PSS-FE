import { Box, Grid, GridItem } from "@chakra-ui/react";

export const AdminView = () => {
  return (
    <Grid
      templateAreas={`
        "nav header"
        "nav main"
        "nav footer"`}
      gridTemplateColumns={"1fr 3fr"}
      gridTemplateRows={"3em 1fr 3em"}
      minH={"100vh"}
      maxW={"100vw"}
      gap={".5em"}
    >
      <GridItem bg={"orange.300"} area={"nav"}></GridItem>
      <GridItem bg={"red.300"} area={"header"}></GridItem>
      <GridItem bg={"green.300"} area={"main"}></GridItem>
      <GridItem bg={"blue.300"} area={"footer"}></GridItem>
    </Grid>
  );
};
