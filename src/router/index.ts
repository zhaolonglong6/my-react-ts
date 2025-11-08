import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/404/404";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Mine from "../pages/about/Mine";
import Home from "../pages/about/Home";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", Component: Home },
      { path: "about", Component: About },
      { path: "mine", Component: Mine },
    ],
  },
  {
    path: "/404",
    Component: NotFound,
  },
  { path: "/login", Component: Login },
]);
