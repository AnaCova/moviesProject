import { createBrowserRouter } from "react-router-dom";
import App from '../App'
//import MoviesListContainer from "../components/main/moviesListContainer/MoviesListContainer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: "Not Found",
    Children: [
      {
        path: "/",
        element: "Home",
      },
/*       {
        path: "/products",
        element: <MoviesListContainer />
      }, */
      {
        path: "/movies/:id",
        element: "MovieDetails",
      },
      {
        path: "/series",
        element: "Series",
      },
      {
        path: "/series/:id",
        element: "SeriesDetails",
      },
      {
        path: "/favorites",
        element: "Favorites",
      },
    ],
  },
  {
    path: "/login",
    element: "Login",
  },
  {
    path: "/register",
    element: "Register",
  },
]);

export default router