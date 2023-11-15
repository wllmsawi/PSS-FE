import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import { AdminView } from "./pages/AdminView";
import { ErrorPages } from "./pages/ErrorPages";
import { ProductList } from "./component/ProductList";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/transaction"
        element={<Transaction />}
      />
      <Route path="/admin" element={<AdminView />} />
      <Route
        path="/admin/dashboard"
        element={<AdminView view={<ProductList />} />}
      />
      <Route
        path="/admin/report"
        element={<AdminView view={<Text>Product</Text>} />}
      />

      <Route path="*" element={<ErrorPages />} />
    </Routes>
  );
}

export default App;
