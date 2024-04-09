import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header/Header.jsx";
import Footer from "./Components/Common/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
