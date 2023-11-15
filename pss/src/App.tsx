import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import { AdminView } from "./pages/AdminView";
import { ErrorPages } from "./pages/ErrorPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/transaction"
        element={<Transaction />}
      />
      <Route path="/admin" element={<AdminView />} />
      <Route path="/admin/:link" element={<AdminView />} />
      <Route path="*" element={<ErrorPages />} />
    </Routes>
  );
}

export default App;
