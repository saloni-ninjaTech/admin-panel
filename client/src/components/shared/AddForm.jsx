import React from "react";
import { withFormik } from "formik";

const AddForm = (props) => {
  const {
    defaultValues,
    handleSubmit,
    handleChange,
    values,
    setShowForm,
    isUpdate,
  } = props;

  return (
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">
          {isUpdate ? "Update Record" : "Create New"}
        </h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setShowForm(false);
        }}
      >
        <div className="card-body">
          {Object.keys(defaultValues).map((key) => {
            if (key !== "_id" && key !== "__v")
              return (
                <div className="form-group" key={key}>
                  <label htmlFor={key}>{key.toUpperCase()}</label>
                  <input
                    type="text"
                    className="form-control"
                    id={key}
                    name={key}
                    onChange={handleChange}
                    value={values[key]}
                    placeholder={`Enter ${key} here...`}
                    disabled={isUpdate && key === "password" ? true : false}
                  />
                </div>
              );
          })}
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success">
            {isUpdate ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: ({ defaultValues }) => defaultValues,

  // // Custom sync validation
  // validate: values => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }

  //   return errors;
  // },

  handleSubmit: (values, { props }) => {
    const { createData, isUpdate, updateData } = props;
    isUpdate ? updateData(values._id, values) : createData(values);
    window.location.reload(true);
  },
  enableReinitialize: true,
  displayName: "Form",
})(AddForm);
