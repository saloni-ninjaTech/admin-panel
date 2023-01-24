import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategories,
  deleteCategories,
  getCategories,
  setDisplayCategories,
  updateCategories,
} from "../../actions";
import { DEFAULT_VALUES_CATEGORY_FORM } from "../../_helpers/constants";
import Breadcrumb from "../shared/Breadcrumb";
import Table from "../shared/Table";

export default function Categories() {
  const { categories, categoryLoaded } = useSelector(
    (state) => state.categoryReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(setDisplayCategories(true));
  }, [dispatch]);

  if (!categoryLoaded) <div>Data not loaded!</div>;

  return (
    <div className="content-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Categories</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <Breadcrumb />
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <Table
        tableData={categories}
        defaultValues={DEFAULT_VALUES_CATEGORY_FORM}
        createData={createCategories}
        deleteData={deleteCategories}
        updateData={updateCategories}
      />
    </div>
  );
}
