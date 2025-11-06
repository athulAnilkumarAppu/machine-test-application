import { Route, Routes } from "react-router-dom";

import LoginPage from "../components/login/Login";
import LandingIndex from "../components";
import HomePage from "../components/home/HomePage";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<LandingIndex />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RouterPage;
