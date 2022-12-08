import React, { useState,createContext, useEffect } from 'react'

export const themeContextMode = createContext();
const { Provider } = themeContextMode;

const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState("light");
  console.log("theme",theme)
/* 
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  const themeData = {
    theme,
    toggleTheme
  } */

useEffect(()=>{
  document.body.classList.add(theme);
},[theme]);

const changeTheme = () => {
  if(theme ==="light"){
    document.body.classList.remove("light");
    setTheme("dark");
  }else{
    document.body.classList.remove("dark");
    setTheme("light");
  }
}

const handleClick = () => {
  changeTheme();
}

const themeData = {
  handleClick,
  theme
}

  return (
    <Provider value={themeData}>{children}</Provider>
  )
}

export default ThemeContext

