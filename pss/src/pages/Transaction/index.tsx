import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../../component/SideBar";
import Cart from "../../component/Cart";
import { NavBar } from "../../component/NavBar";
import { ProductList } from "../../component/ProductList";
import { useState, useEffect } from "react";

export default function Transaction() {
  const [cart, setCart] = useState([] as any);
  const [total, setTotal] = useState(0);
  const [ppn, setPpn] = useState(0);
  const [totalPpn, setTotalPpn] = useState(0);
  const [diskon, setDiskon] = useState(0);
  const [day, setDay] = useState("");

  useEffect(() => {
    if (day === "Friday") {
      setDiskon(10000);
    }
    setPpn(total * 0.1);
    setTotalPpn(total + total * 0.1 - diskon);
  }, [total, setTotal, ppn, setPpn, day]);

  const handlePlus = async (id: number, params: any) => {
    const exist = await cart.map((el: any) => {
      if (el.id === Number(id)) {
        return {
          ...el,
          qty: el.qty + el.qty,
        };
      }
    });
    if (exist.length > 0) {
      alert("Product Sudah Ada");
    } else {
      setCart([params, ...cart]);
      //   cart.map((el: any) => {
      //     if (el.id == id) {
      //       return {
      //         ...el,
      //         qty: 100,
      //       };
      //     } else {
      //       setCart([...params, ...cart]);
      //     }
      //   });
    }
  };
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
        <NavBar day={day} setDay={setDay} />
      </GridItem>
      <GridItem area={"product"} p={"0 0 1em 0"}>
        <ProductList
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          handlePlus={handlePlus}
        />
      </GridItem>
      <GridItem area={"cart"} p={"0 0 1em 0"}>
        <Cart
          cart={cart}
          total={total}
          setTotal={setTotal}
          totalPpn={totalPpn}
          ppn={ppn}
          diskon={diskon}
        />
      </GridItem>
    </Grid>
  );
}
