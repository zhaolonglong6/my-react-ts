import { memo } from "react";
import type React from "react";
import { Outlet } from "react-router-dom";

interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <h1>discover</h1>
      <Outlet />
    </div>
  );
};

export default memo(Discover);
