import React, { useState, useContext } from "react";
import Input from "./components/input/Input";
import Title from "./components/title/Title";
import { useNavigate } from "react-router-dom";
import { themeContextMode } from "../../context/ThemeContext";
import ReactSwitch from "react-switch";

const Login = () => {
  const { handleClick, theme } = useContext(themeContextMode);

  const [user, setUser] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordError, SetPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  function handleChange(name, value) {
    if (name === "user") {
      //storage variable
      setUser(value);
    } else {
      if (value.length < 6) {
        SetPasswordError(true);
      } else {
        SetPasswordError(false);
        SetPassword(value);
      }
    }
  }

  //console.log("User",user)
  //console.log("pass",password)

  function ifRegistered(param) {
    if (param.user.length > 0 && password.length > 0) {
      if (param.user === "Ana" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
        navigate("/home");
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }

  console.log("Login", isLogin);

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      //console.log(account);
      ifRegistered(account);
    }
  }

  return (
    <div className="login_container">
      <div className="login_content">
        <Title />
        {hasError && (
          <label className="label_title">User or password is not correct</label>
        )}
        <div className="inputs_conteiner">
          {/* <Lable text="User" /> */}
          <Input
            attribute={{
              id: "user",
              name: "user",
              type: "text",
              placeholder: "User",
            }}
            handleChange={handleChange}
          />
          {/*         <Lable text="Password" /> */}
          <Input
            attribute={{
              id: "password",
              name: "password",
              type: "password",
              placeholder: "Password",
            }}
            handleChange={handleChange}
            param={passwordError}
          />
          {passwordError && (
            <label className="label_error">
              Incorrect or incomplete password
            </label>
          )}
        </div>

        <div className="submit_button_container">
          <button onClick={handleSubmit} className="submit_button">
            Login
          </button>
        </div>
        <span className="login_switch">
          <ReactSwitch
            onChange={handleClick}
            checked={theme === "dark"}
            className="mode_switch"
            offColor="#024F59"//x
            onColor="#C5E1E4"//check
            offHandleColor="#C5E1E4"
            onHandleColor="#024F59"
          />
        </span>
      </div>
    </div>
  );

  /* 
return(
  <>
    <form action="/home">
    {hasError && 
          <label className="label_title">
            User or password is not correct
          </label>
        }
<div className="login_container">
<label text="User">User</label>
  <input
          attribute={{
            id: "user",
            name: "user",
            type: "text",
            placeholder: "User",
          }}
          handleChange={handleChange}
        />
  
  <label text="Password">Password</label>
  <input
  attribute={{
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
  }}
  handleChange={handleChange}
  param={passwordError}
/>
{passwordError && 
  <label className="label_error">
    Incorrect or incomplete password
  </label>
}
  <input type="submit" value="Submit"/>
</div>
</form> 
  </>
) */
};

export default Login;
