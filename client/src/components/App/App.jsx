import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Categories from "../Categories/Categories";
import User from "../User/User";
import { Empty } from "../shared/Empty";
import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      const id = JSON.parse(localStorage.getItem("profile")).data?._id;
      console.log("id", id);
      dispatch(getUser(id));
    } else {
      navigate("/login", { replace: true });
    }
  }, [dispatch, navigate]);

  return (
    <div className="wrapper">
      {localStorage.getItem("profile") && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<User />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Empty />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
