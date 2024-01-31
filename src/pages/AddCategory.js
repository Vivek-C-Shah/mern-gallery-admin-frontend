import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postNewCategory,
  getAllCategories,
} from "../redux/reducers/gallerySlice";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postNewCategory(input));
    dispatch(getAllCategories());
    navigate("/add-image");
  };
  return (
    <div class="container">
      <div class="row ">
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Category:</label>
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                class="form-control"
                placeholder="Enter Category"
              />
            </div>

            <button type="submit" class="btn btn-primary mt-4">
              Add Category
            </button>
          </form>

          <button className="btn btn-primary">Go to Home</button>
        </div>

        <br />
      </div>
    </div>
  );
};

export default AddCategory;
