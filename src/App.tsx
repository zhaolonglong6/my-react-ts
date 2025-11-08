import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div>APP组件</div>
      <Link to="/">首页</Link>
      <Link to="/login">登录</Link>
      <Link to="/404">404</Link>
      <Link to="/about">关于</Link>
      <Link to="/mine">我的</Link>
      <Outlet />
    </div>
  );
}
