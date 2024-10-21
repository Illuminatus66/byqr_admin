import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeProduct, logOut } from "../actions/index";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleEdit = (product) => {
    navigate(`/edit_product/${product._id}`);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handleAddProduct = () => {
    navigate("/add_product");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button className="add-product-button" onClick={handleAddProduct}>
          +Add Product
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.thumbnail} alt={product.name} className="product-thumbnail" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-stock">Stock: {product.stock}</p>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-description">{product.description}</p>
            </div>

            <div className="product-carousel">
              {product.imgs.map((img, index) => (
                <img key={index} src={img} alt={`Number ${index + 1}`} className="carousel-image" />
              ))}
            </div>

            <div className="product-actions">
              <button className="edit-button" onClick={() => handleEdit(product)}>
                Edit
              </button>
              <button className="remove-button" onClick={() => handleRemove(product._id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
