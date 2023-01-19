import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (products) console.log("products:", products);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
