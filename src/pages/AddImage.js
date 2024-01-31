import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  postNewImage,
} from "../redux/reducers/gallerySlice";

const AddImage = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const { categories } = useSelector((state) => state.gallery);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewImage({ url, category }));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                className="form-control"
                placeholder="Enter image URL"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="category">Category:</label>
              <select
                className="form-control custom-select"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Please Select
                </option>
                {categories &&
                  categories.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                  })}
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Upload
            </button>
          </form>

          <button className="btn btn-primary">Go to Home</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AddImage;