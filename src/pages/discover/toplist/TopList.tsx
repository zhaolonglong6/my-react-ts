import { memo } from "react";
import type React from "react";

interface IProps {
  children?: React.ReactNode;
}

const TopList: React.FC<IProps> = () => {
  return <div>TopList</div>;
};

export default memo(TopList);
