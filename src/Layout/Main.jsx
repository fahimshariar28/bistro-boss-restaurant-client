import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
