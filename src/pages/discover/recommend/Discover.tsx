import { memo } from "react";
import type React from "react";
import { MyWrapper } from "./style";

interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FC<IProps> = () => {
  return (
    <MyWrapper isShow={true}>
      <div className="text1">discover</div>
      <div className="text2">recommend</div>
    </MyWrapper>
  );
};

export default memo(Discover);
