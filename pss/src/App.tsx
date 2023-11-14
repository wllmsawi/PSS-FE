import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/transaction" element={<Transaction/>}/>
  </Routes>);
}

export default App;
