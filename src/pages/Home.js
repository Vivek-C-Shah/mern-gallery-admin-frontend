import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  getSingleImage,
} from "../redux/reducers/gallerySlice";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, []);

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
  };

  return (
    <div class="container my-3">
      <div class="row ">
        <div align="center">
          <button
            onClick={() => dispatch(getAllImages())}
            class="btn btn-primary filter-button"
            data-filter="all"
          >
            All
          </button>

          {categories &&
            categories.map((item) => {
              return (
                <button
                  onClick={() => handleCategories(item._id)}
                  class="btn btn-default filter-button border mx-2"
                  data-filter="hdpe"
                >
                  {item.name}
                </button>
              );
            })}
        </div>

        <br />

        {images &&
          images.map((item) => {
            return (
              <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
                <img
                  src={`http://localhost:8000/${item.name}`}
                  class="img img-responsive"
                  height="300px"
                  width="300px"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
