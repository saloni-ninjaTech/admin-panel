import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Categories from "../Categories/Categories";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (products) console.log("products:", products);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
