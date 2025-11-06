import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import RouterPage from "./router/Router";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return <RouterPage />;
}

export default App;
