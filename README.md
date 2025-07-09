# 🛒 Simple Store API

A complete backend for an eCommerce store built with **Node.js**, **Express**, and **MongoDB**. This project features secure RESTful API routes, user authentication, product management, and a clean, modular file structure. Built as part of mastering Node.js and backend architecture.

---

## 🚀 Features
- 🧾 **Product CRUD** – Add, update, fetch, and delete products
- 🔐 **User Authentication** – Signup, login, and access protected routes
- 📦 **MongoDB Atlas** – Cloud database integration using Mongoose
- 🧠 **JWT Tokens** – Stateless user sessions
- 📁 **Modular Codebase** – Easy to navigate and scale
- 🌐 **RESTful API** – Clean HTTP methods and status responses
- ⚙️ **Environment Config** – `.env` based secrets for flexibility

---

## 🧑‍💻 Tech Stack
| Tech        | Role                                |
|-------------|-------------------------------------|
| Node.js     | Backend runtime                     |
| Express.js  | Web server framework                |
| MongoDB     | NoSQL Database (Cloud via Atlas)    |
| Mongoose    | MongoDB ODM                         |
| bcryptjs    | Password hashing                    |
| JSON Web Token (JWT) | Authentication             |
| dotenv      | Manage environment variables        |
| nodemon     | Auto-reload for dev environment     |

---

## 📂 Project Structure

```bash
simple-store-api/
├── config/             # Database connection & environment setup
│   └── db.js
│
├── controllers/        # Route logic (products, users, etc.)
│   └── productController.js
│   └── userController.js
│
├── models/             # Mongoose data models
│   └── Product.js
│   └── User.js
│
├── routes/             # API endpoints
│   └── productRoutes.js
│   └── userRoutes.js
│
├── middleware/         # Auth, error handling, validators
│   └── authMiddleware.js
│   └── errorHandler.js
│
├── utils/              # Helper functions or constants (optional)
│   └── generateToken.js
│
├── .env.example        # Sample env file
├── .gitignore          # Ignored files
├── server.js           # Entry point of the app
└── README.md


---

## ⚙️ Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/sahilmane69/simple-store-api.git
cd simple-store-api



---

Let me know if you want a matching **`.env.example`** file or a **Postman collection export** too — helpful if you want others to test it smoothly!
