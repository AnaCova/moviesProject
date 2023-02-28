import "./App.scss";
//import Header from "./components/header/Header";
//import Main from "./components/main/Main";
//import Footer from "./components/footer/Footer";
import { themeContextMode } from "./context/ThemeContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";



function App() {
  //const { user } = useContext(userContext);
  const {theme} = useContext(themeContextMode)
  //console.log("theme context",theme)

   return(
     <div className="app_container" id={theme}>
      <Outlet/>
    </div>

  ) 


}

export default App;
