import React from "react";
import axios from "axios";
import { Status } from "./status";
import styled from "styled-components";

const GreenButton = styled.div`
  border-radius: 50%;
  border-color: black;
  height: 75px;
  width: 75px;
  text-align: center;
  vertical-align: middle;
  line-height: 75px;
  display: inline-block;
  margin: 3px;
  background-color: lightgreen;
  :hover {
    cursor: pointer;
  }
`;
const RedButton = styled(GreenButton)`
  background-color: red;
  color: white;
`;

const BlueButton = styled(GreenButton)`
  background-color: blue;
  color: white;
`;
const navigate = (url) => {
  axios.get(url).then((response) => {
    console.log(response);
    return Status(response.data.response);
  });
};

export const PLCButton = (props) => {
  return (
    <React.Fragment>
      {props.color === "red" && (
        <RedButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </RedButton>
      )}
      {props.color === "green" && (
        <GreenButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </GreenButton>
      )}
      {props.color === "blue" && (
        <BlueButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </BlueButton>
      )}
    </React.Fragment>
  );
};
