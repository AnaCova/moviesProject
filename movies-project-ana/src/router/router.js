import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import HomeListContainer from "../components/main/home/HomeListContainer";
import MoviesListContainer from '../components/main/moviesListContainer/MoviesListContainer'
import MovieDetailsContainer from "../components/main/movieDetails/MovieDetailsContainer";
import SeriesListContainer from "../components/main/seriesListContainer/SeriesListContainer";
import Login from '../components/login/Login'
import SerieDetailsContainer from "../components/main/serieDetails/SerieDetailsContainer";
import UserProfile from "../components/main/userProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: "Not Found",
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/home",
        element: <HomeListContainer/>,
      },
      {
        path: "/movies",
        element: <MoviesListContainer/>
      },
      {
        path: "/movie/:id",
        element: <MovieDetailsContainer/>,
      },
   {
        path: "/series",
        element: <SeriesListContainer/>
      },
      {
        path: "/series/:id",
        element: <SerieDetailsContainer/>,
      },
      {
        path: "/favorites",
        element: "Favorites",
      },
    ],
  },
  {
    path: "/user_profile",
    element: <UserProfile/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
/*   {
    path: "/register",
    element: <Register/>,
  }, */
]);

export default router