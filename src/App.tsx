import { useEffect } from "react";

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
