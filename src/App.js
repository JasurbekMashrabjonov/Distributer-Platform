// import { useState } from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { ContextProvider } from "./reducer/context";
import "./styles/all.css";
import "./styles/css/main.css";

function App() {
  const { allow } = useContext(ContextProvider);
  return (
    <div className="App">
      <Routes>
        {allow ? (
          <Route path="/main"  element={<MainPage />} />
        ) : (
          <Route path="/" index element={<LoginPage />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
