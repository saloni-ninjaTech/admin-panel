import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { signin } from "../../actions/auth";
import AuthForm from "./AuthForm";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitSigninForm = bindActionCreators(signin, dispatch);

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <Link to="/">
            <b>Admin</b>LTE
          </Link>
        </div>
        <AuthForm
          {...props}
          submitSigninForm={submitSigninForm}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default Login;
