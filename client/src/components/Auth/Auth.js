import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { signup } from "../../actions/auth";
import AuthForm from "./AuthForm";

const Auth = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitSignupForm = bindActionCreators(signup, dispatch);

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
          isSignup
          submitSignupForm={submitSignupForm}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default Auth;
