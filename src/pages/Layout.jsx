import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}