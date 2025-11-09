import { memo } from "react";
import type React from "react";

interface IProps {
  children?: React.ReactNode;
}

const Friend: React.FC<IProps> = () => {
  return <div>Friend</div>;
};

export default memo(Friend);
