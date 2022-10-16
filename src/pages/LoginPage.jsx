import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../reducer/context";

function LoginPage() {
  const { login, password, setPassword, setLogin, setAllow } =
    useContext(ContextProvider);
  const navigate = useNavigate();
  function enter(e) {
    e.preventDefault();
    if (login === "ad" && password === "ad") {
      setAllow();
      setLogin("");
      setPassword("");
      navigate("/main")
    } else {
      alert("Your password or login is not correct");
      console.log("Not allowed");
    }
  }
  return (
    <>
      <section className="login container">
        <div className="login__card">
          <h1 className="login__title logo">Logo</h1>
          <form action="" className="login__form">
            <input
              type="text"
              placeholder=" &#xf007; Логин"
              onInput={(e) => setLogin(e.target.value)}
            />

            <input
              type="password"
              placeholder=" &#xf023; Парол"
              onInput={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value={"Войти"} onClick={(e) => enter(e)} />
          </form>
        </div>
        <footer className="footer">
          <p className="footer__text">
            Copyright &copy; 2022 Jasurbek Mashrabjonov
          </p>
        </footer>
      </section>
    </>
  );
}

export default LoginPage;
