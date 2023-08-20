import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV !== "production"
    ? "https://order-management-backend-1.onrender.com"
    : "/";
