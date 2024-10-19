import React, { useState } from "react";
import { useSelector, useEffect, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editProduct } from "../actions/index";
import "../styles/EditProduct.css";

const placeholderImage = "https://via.placeholder.com/150/000000/FFFFFF/?text=Placeholder";

const EditProduct = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product._id === id);
    if (product) {
      setProductData(product);
    }
  }, [id, products]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...productData.imgs];
    updatedImages[index] = value;
    setProductData({ ...productData, imgs: updatedImages });
  };

  // Function to check if a URL is a valid image
  const isValidImageURL = (url) => {
    return /\.(jpeg|jpg|gif|png)$/.test(url);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(productData));
    navigate("/dashboard");
  };

  return (
    <div className="edit-product-container">
      <h2 className="edit-product-title">Edit Product</h2>
      <form onSubmit={handleSubmit} className="edit-product-form">

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>

        {/* Thumbnail URL with live preview */}
        <div className="form-group">
          <label>Thumbnail URL:</label>
          <input
            type="text"
            name="thumbnail"
            value={productData.thumbnail}
            onChange={handleChange}
            required
            className="form-input"
          />
          <img
            src={isValidImageURL(productData.thumbnail) ? productData.thumbnail : placeholderImage}
            alt="Thumbnail Preview"
            className="image-preview"
          />
        </div>

        {/* Images array with live previews */}
        <div className="form-group">
          <label>Images:</label>
          {productData.imgs.map((img, index) => (
            <div key={index} className="image-group">
              <input
                type="text"
                value={img}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="form-input"
              />
              <img
                src={isValidImageURL(img) ? img : placeholderImage}
                alt={`Number ${index + 1} Preview`}
                className="image-preview"
              />
            </div>
          ))}
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-button">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
