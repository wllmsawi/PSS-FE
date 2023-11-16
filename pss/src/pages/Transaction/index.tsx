import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../../component/SideBar";
import Cart from "../../component/Cart";
import { NavBar } from "../../component/NavBar";
import { ProductList } from "../../component/ProductList";
import { useState, useEffect } from "react";

export default function Transaction() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Grid
      templateAreas={`
      "nav header header"
      "nav product cart"
      "nav product cart"`}
      gridTemplateRows={"3em 1fr 3em"}
      gridTemplateColumns={"1fr 3fr 2fr"}
      h={"100vh"}
      maxW={"100vw"}
      gap={".5em"}
      bg={"#EEF1F2"}
      overflow={"hidden"}
      p={"0 1em 0 0"}
    >
      <GridItem area={"nav"}>
        <SideBar />
      </GridItem>
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem area={"product"} p={"0 0 1em 0"}>
        <ProductList
          cartPL={cart}
          setCartPL={setCart}
          total={total}
          setTotal={setTotal}
        />
      </GridItem>
      <GridItem area={"cart"} p={"0 0 1em 0"}>
        <Cart cartPC={cart} total={total} setTotal={setTotal} />
      </GridItem>
    </Grid>
  );
}
