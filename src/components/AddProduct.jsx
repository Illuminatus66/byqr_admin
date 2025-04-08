import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/index";
import "./AddProduct.css";

const placeholderImage =
  "https://via.placeholder.com/150/000000/FFFFFF/?text=Placeholder";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    thumbnail: "",
    imgs: [""],
    brand: "",
    frameMaterial: "",
    weight: "",
    wheelSize: "",
    gearSystem: "",
    brakeType: "",
    suspension: "",
    tyreType: "",
    warranty: "",
    stores: [{ name: "", latitude: "", longitude: "" }],
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...productData.imgs];
    updatedImages[index] = value;
    setProductData({ ...productData, imgs: updatedImages });
  };

  const handleAddImageField = () => {
    setProductData({ ...productData, imgs: [...productData.imgs, ""] });
  };

  const handleRemoveImageField = (index) => {
    const updatedImages = productData.imgs.filter((_, i) => i !== index);
    setProductData({ ...productData, imgs: updatedImages });
  };

  const isValidImageURL = (url) => {
    return /\.(jpeg|jpg|gif|png)$/.test(url);
  };

  const handleStoreChange = (index, field, value) => {
    const updatedStores = [...productData.stores];
    updatedStores[index][field] = value;
    setProductData({ ...productData, stores: updatedStores });
  };

  const handleAddStoreField = () => {
    setProductData({
      ...productData,
      stores: [
        ...productData.stores,
        { name: "", latitude: "", longitude: "" },
      ],
    });
  };

  const handleRemoveStoreField = (index) => {
    const updatedStores = productData.stores.filter((_, i) => i !== index);
    setProductData({ ...productData, stores: updatedStores });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", productData);
    dispatch(addProduct(productData));
    navigate("/dashboard");
  };

  return (
    <div className="edit-product-container">
      <h2 className="edit-product-title">Add Product</h2>
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
            step={0.01}
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
        <div className="form-group">
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Frame Material:</label>
          <input
            type="text"
            name="frameMaterial"
            value={productData.frameMaterial}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            step={0.001}
            name="weight"
            value={productData.weight}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Wheel Size (inches):</label>
          <input
            type="number"
            step={0.001}
            name="wheelSize"
            value={productData.wheelSize}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Gear System:</label>
          <input
            type="text"
            name="gearSystem"
            value={productData.gearSystem}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Brake Type:</label>
          <input
            type="text"
            name="brakeType"
            value={productData.brakeType}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Suspension:</label>
          <input
            type="text"
            name="suspension"
            value={productData.suspension}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Tyre Type:</label>
          <input
            type="text"
            name="tyreType"
            value={productData.tyreType}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Warranty:</label>
          <input
            type="text"
            name="warranty"
            value={productData.warranty}
            onChange={handleChange}
            required
            className="form-input"
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
            src={
              isValidImageURL(productData.thumbnail)
                ? productData.thumbnail
                : placeholderImage
            }
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
              {/* Button to remove an image field */}
              {productData.imgs.length > 1 && (
                <button
                  type="button"
                  className="remove-image-button"
                  onClick={() => handleRemoveImageField(index)}
                >
                  -
                </button>
              )}
            </div>
          ))}

          {/* Button to add a new image field */}
          <button
            type="button"
            className="add-image-button"
            onClick={handleAddImageField}
          >
            +
          </button>
        </div>

        {/* Stores array */}
        <div className="form-group">
          <label>Stores:</label>
          {productData.stores.map((store, index) => (
            <div key={index} className="store-group">
              <input
                type="text"
                placeholder="Store Name"
                value={store.name}
                onChange={(e) =>
                  handleStoreChange(index, "name", e.target.value)
                }
                className="form-input"
              />
              <input
                type="number"
                step="any"
                placeholder="Latitude"
                value={store.lat}
                onChange={(e) =>
                  handleStoreChange(index, "lat", e.target.value)
                }
                className="form-input"
              />
              <input
                type="number"
                step="any"
                placeholder="Longitude"
                value={store.long}
                onChange={(e) =>
                  handleStoreChange(index, "long", e.target.value)
                }
                className="form-input"
              />
              {/* Button to remove a store field */}
              {productData.stores.length > 1 && (
                <button
                  type="button"
                  className="remove-store-button"
                  onClick={() => handleRemoveStoreField(index)}
                >
                  -
                </button>
              )}
            </div>
          ))}

          {/* Button to add a new store field */}
          <button
            type="button"
            className="add-store-button"
            onClick={handleAddStoreField}
          >
            +
          </button>
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
