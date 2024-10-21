import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EditProduct from "./components/EditProduct";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit_product/:id" element={<EditProduct />} />
        <Route path="/add_product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
