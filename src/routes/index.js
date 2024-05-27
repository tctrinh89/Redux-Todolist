import Home from "./../page/Home";
import News from "./../page/Main";
import Count from "../page/CountPage";
import { NavbarOnly } from "../component/Layout";

const pulicRoutes = [
  { path: "/", component: Home },
  { path: "/contact", component: Count, layout: NavbarOnly },
  { path: "/news", component: News, layout: null },
];
const privateRoutes = [];

export { pulicRoutes, privateRoutes };
