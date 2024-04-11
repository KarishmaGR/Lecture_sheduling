import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header/Header.jsx";
import Footer from "./Components/Common/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <div className=" flex flex-col justify-around items-center h-screen  bg-slate-900 overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default App;
