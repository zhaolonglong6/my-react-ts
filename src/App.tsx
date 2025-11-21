import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import type { RootState } from "./store";
import useBearStore from "./zustand";

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const bear = useBearStore((state) => state.bears);
  return (
    <div>
      <div>
        APP组件{count}
        {bear}
      </div>
      <Link to="/">发现音乐</Link>
      <Link to="/my">我的音乐</Link>
      <Link to="/friend">关注</Link>
      <Link to="/download">下载</Link>

      <div>
        <Link to="/discover/recommend">hhh0</Link>
        <Link to="/discover/album">hhh1</Link>
        <Link to="/discover/artist">hhh2</Link>
        <Link to="/discover/djradio">hhh3</Link>
        <Link to="/discover/toplist">hhh4</Link>
        <Link to="/discover/playlist">hhh5</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
