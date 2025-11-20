import { memo } from "react";
import type React from "react";

interface IProps {
  children?: React.ReactNode;
}

const Playlist: React.FC<IProps> = () => {
  return <div className="text-red-200 h-[200px]">Playlist</div>;
};

export default memo(Playlist);
