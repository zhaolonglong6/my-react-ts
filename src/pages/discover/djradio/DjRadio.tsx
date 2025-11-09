import { memo } from "react";
import type React from "react";

interface IProps {
  children?: React.ReactNode;
}

const DjRadio: React.FC<IProps> = () => {
  return <div>DjRadio</div>;
};

export default memo(DjRadio);
