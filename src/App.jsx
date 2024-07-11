import "./App.css";
import Products from "./Pages/Products";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
