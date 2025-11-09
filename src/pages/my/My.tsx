import { memo } from "react";
import type React from "react";

interface IProps {
  children?: React.ReactNode;
}

const My: React.FC<IProps> = () => {
  return <div>My</div>;
};

export default memo(My);
