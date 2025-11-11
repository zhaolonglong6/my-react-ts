import { memo } from "react";
import type React from "react";

interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FC<IProps> = () => {
  return <div>discover</div>;
};

export default memo(Discover);
