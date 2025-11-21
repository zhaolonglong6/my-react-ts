import { memo } from "react";
import type React from "react";
import { MyWrapper } from "./style";
import { decrement, increment, incrementByAmount } from "@/store/slice/countSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import useBearStore from "@/zustand";

interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FC<IProps> = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const bear = useBearStore((state) => state.bears);
  const addBear = useBearStore((state) => state.addBear);

  return (
    <MyWrapper isShow={true}>
      <div className="text1 flex flex-col gap-4">
        <div>当前Redux计数: {count}</div>
        <button onClick={() => dispatch(increment())}>加+1</button>
        <button onClick={() => dispatch(decrement())}>减-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>加+5</button>
      </div>
      <div className="text2">
        <div>当前zustand计数: {bear}</div>
        <button onClick={() => addBear(5)}>加+5</button>
      </div>
    </MyWrapper>
  );
};

export default memo(Discover);
