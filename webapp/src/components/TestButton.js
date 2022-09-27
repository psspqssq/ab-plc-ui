import axios from "axios";
import React from "react";
import styled from "styled-components";

const TestButtonStyled = styled.button`
  width: 300px;
  height: 75px;
  font-size: 25px;
  background-color: cornflowerblue;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

const TestButton = (props) => {
  const handleTestClick = () => {
    axios.get("http://localhost:4000/plc/read/cableinputs").then((response) => {
      props.returnValues(response.data.values);
    });
  };
  return (
    <TestButtonStyled onClick={handleTestClick}>{props.text}</TestButtonStyled>
  );
};

export default TestButton;
