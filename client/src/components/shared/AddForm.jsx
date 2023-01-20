import React from "react";
import { withFormik } from "formik";

let initialValues = {};

const AddForm = (props) => {
  const { defaultValues, handleSubmit, handleChange, values, setShowForm } =
    props;

  initialValues = defaultValues;

  return (
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">Create New</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setShowForm(false);
        }}
      >
        <div className="card-body">
          {Object.keys(defaultValues).map((key) => (
            <div className="form-group">
              <label htmlFor={key}>{key.toUpperCase()}</label>
              <input
                type="text"
                className="form-control"
                id={key}
                name={key}
                onChange={handleChange}
                value={values[key]}
                placeholder={`Enter ${key} here...`}
              />
            </div>
          ))}
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => initialValues,

  // // Custom sync validation
  // validate: values => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }

  //   return errors;
  // },

  handleSubmit: (values, { props }) => {
    const { createData } = props;
    console.log("handle submit", createData, values);
    createData(values);
  },
  enableReinitialize: true,
  displayName: "Create New",
})(AddForm);
