import styled from "styled-components";

export const MyWrapper = styled.div<{ isShow: boolean }>`
  padding: 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  ${(props) => props.isShow && "background-color: #f5f5f5;"}

  .text1 {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }

  .text2 {
    font-size: 16px;
    color: red;
  }
`;
