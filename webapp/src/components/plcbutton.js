import React, { useEffect, useState } from "react";
import axios from "axios";
import { Status } from "./Status";
import styled from "styled-components";

const GreenButton = styled.div`
  border-radius: 50%;
  border-color: black;
  height: 100px;
  width: 100px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  line-height: 100px;
  display: inline-block;
  margin: 3px;
  cursor: pointer;
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
const GrayButton = styled(GreenButton)`
  background-color: gray;
  color: white;
`;

let defaultState = {
  activated: false,
  color: "gray",
};

export const PLCButton = (props) => {
  const [state, setState] = useState(defaultState);
  useEffect(() => {
    if (props.activated == true) {
      setState({ ...state, activated: true, color: "green" });
    } else {
      setState({ ...state, activated: false, color: "gray" });
    }
  }, [props.activated]);
  const navigate = (url) => {
    if (state.activated) {
      axios.get(url + "/0").then((response) => {
        console.log(response);
        if (response.data.response.value == 0) {
          setState({ ...state, color: "gray", activated: false });
        }
        axios
          .get("http://192.168.0.14:4000/plc/read/cableinputs")
          .then((response) => {
            props.returnValues(response.data.values);
          });
      });
    } else {
      axios.get(url + "/1").then((response) => {
        console.log(response);
        if (response.data.response.value == 1) {
          setState({ ...state, color: "green", activated: true });
        }
        axios
          .get("http://192.168.0.14:4000/plc/read/cableinputs")
          .then((response) => {
            props.returnValues(response.data.values);
          });
      });
    }
  };

  return (
    <React.Fragment>
      {state.color === "red" && (
        <RedButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </RedButton>
      )}
      {state.color === "green" && (
        <GreenButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </GreenButton>
      )}
      {state.color === "blue" && (
        <BlueButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </BlueButton>
      )}
      {state.color === "gray" && (
        <GrayButton
          onClick={() => {
            navigate(props.url);
          }}
        >
          {props.Text}
        </GrayButton>
      )}
    </React.Fragment>
  );
};
