import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const LandingIndex = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingIndex;
