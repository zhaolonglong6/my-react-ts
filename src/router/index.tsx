import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/404/404";
import Login from "../pages/login/Login";
import Discover from "../pages/discover/Discover";
import Album from "../pages/discover/album/Album";
import Artist from "../pages/discover/artist/Artist";
import DjRadio from "../pages/discover/djradio/DjRadio";
import Playlist from "../pages/discover/playlist/Playlist";
import TopList from "../pages/discover/toplist/TopList";
import Friend from "../pages/friend/Friend";
import My from "../pages/my/My";
import Download from "../pages/download/Download";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: () => <Navigate to="/discover" replace />,
  },
  {
    path: "/discover",
    Component: App,
    children: [
      { path: "", Component: () => <Navigate to="/discover"></Navigate> },
      { index: true, Component: Discover },
      { path: "album", Component: Album },
      { path: "artist", Component: Artist },
      { path: "djradio", Component: DjRadio },
      { path: "playlist", Component: Playlist },
      { path: "toplist", Component: TopList },
    ],
  },
  { path: "/friend", Component: Friend },
  { path: "/my", Component: My },
  { path: "/download", Component: Download },
  { path: "/login", Component: Login },
  { path: "*", Component: NotFound },
]);
