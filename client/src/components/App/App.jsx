import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
