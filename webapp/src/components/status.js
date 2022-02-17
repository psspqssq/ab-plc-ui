import React from "react";
import styled from "styled-components";

const BottomDiv = styled.div`
  margin-bottom: 15px;
`;
export const Status = (props) => {
  return <BottomDiv>{props.message}</BottomDiv>;
};
