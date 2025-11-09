import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div>APP组件</div>
      <Link to="/">发现音乐</Link>
      <Link to="/my">我的音乐</Link>
      <Link to="/friend">关注</Link>
      <Link to="/download">下载</Link>
    </div>
  );
}
