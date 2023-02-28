import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";
import "./index.scss";
//import App from './App';
import router from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeContext>
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      </ThemeContext>
  </React.StrictMode>
);
