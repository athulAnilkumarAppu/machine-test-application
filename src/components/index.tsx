import { Outlet } from "react-router-dom";

const LandingIndex = () => {
  return (
    <div className="main-wrapper">
      <Outlet />
    </div>
  );
};

export default LandingIndex;
