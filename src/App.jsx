import { useEffect, useState } from "react";
import Footer from "./components/pages/Footer";
import NavBar from "./components/pages/NavBar";
import Routers from "./routers/Routers";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("loginUser"));
    if (data) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routers isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  );
};

export default App;
