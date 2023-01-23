import React from "react";
import { withFormik } from "formik";
import { Link } from "react-router-dom";

const AuthForm = (props) => {
  const { handleSubmit, values, handleChange, isSignup } = props;
  const { name, email, password, confirm_password, phone } = values;
  return (
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">
          {isSignup ? "Register a new user!" : "Login to your Account!"}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {isSignup && (
            <>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-phone" />
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          {isSignup && (
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
                name="confirm_password"
                value={confirm_password}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-8">
              {/* <div className="icheck-primary">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="terms"
                  defaultValue="agree"
                />
              </div> */}
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">
                {isSignup ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </form>
        {/* <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" />
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" />
                  Sign up using Google+
                </a>
              </div> */}
        {isSignup ? (
          <Link to="/login" className="text-center">
            I already have a Account!
          </Link>
        ) : (
          <Link to="/auth" className="text-center">
            Register?
          </Link>
        )}
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    phone: "",
    email: "",
    password: "",
    image: "",
  }),
  handleSubmit: (values, { props }) => {
    const { submitSigninForm, submitSignupForm, isSignup, navigate } = props;
    isSignup
      ? submitSignupForm(values, navigate)
      : submitSigninForm(values, navigate);
  },
  enableReinitialize: true,
  displayName: "Register/Login form",
})(AuthForm);
