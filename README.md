# BYQR Admin Interface

The **BYQR Admin Interface** is a React-based web application designed to manage products for the BYQR marketplace. Admin users can use this interface to create, edit, and delete product entries, upload product images to AWS S3, and monitor product details such as stock levels, pricing, and descriptions.

---

## v1.0.0 - Current Features

### Functionalities
1. **Product Management**:
   - Add new products with details such as name, price, stock, description, and category.
   - Edit existing product details.
   - Delete products, including their associated images from AWS S3.
2. **Image Uploads**:
   - Upload product images directly to AWS S3.
   - Retrieve and use the image URLs for product thumbnails and galleries.
3. **Role-Based Access Control**:
   - Restricted to admin users authenticated via backend middleware.

---

## Technology Stack

### Frontend
- **React** with **JavaScript** for component-based architecture and UI.
- Hosted on **Netlify**.

### Backend
- **Node.js** and **Express.js**: Unified backend serves both admin interface and mobile app.
- **MongoDB Atlas**: Stores product and user data.
- **AWS S3**: Stores product images and generates accessible URLs.

---

## Installation & Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed on your system.
- Access to the BYQR backend server (ensure you have the API base URL).

### Steps to Set Up the Admin Interface

#### 1. Clone the Repository
```bash
$ git clone https://github.com/Illuminatus66/byqr_admin.git
$ cd byqr_admin
```

#### 2. Install Dependencies
```bash
$ npm install
```

#### 3. Configure the API Base URL
- Navigate to the API configuration file ( `src/api/index.js`).
- Update the `baseURL` to point to your backend server:
```javascript
const API = axios.create({
  baseURL: "https://your-backend-url/",
});
```

#### 4. Start the Application
```bash
$ npm start
```
- The app will be available at `http://localhost:3000` in your browser.

---

## Future Development (v2.0.0)

### Planned Features
1. **Analytics Dashboard**:
   - Visualize user activity such as visits to product pages and order frequencies.
2. **Enhanced Security**:
   - Multi-factor authentication for admin access.
3. **Order Management**:
   - View and manage customer orders.
4. **Bulk Product Uploads**:
   - Enable CSV uploads for adding or updating multiple products at once.

---

## How to Use
1. Create an admin user manually in MongoDB according to the User model with the role set to 'admin'.
2. Log in as an admin using your credentials.
3. Use the dashboard to manage product details:
   - Add new products by filling out the product form and uploading images.
   - Edit existing products directly from the product list.
   - Delete products, which automatically removes related images from AWS S3.
4. Changes made via the admin interface will reflect in the mobile app and other user-facing platforms.

---

## Contributing
Contributions to the admin interface are welcome! Please feel free to open an issue or submit a pull request on the repository.

Built with ❤️ for seamless product management.

