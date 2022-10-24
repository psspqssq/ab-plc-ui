import React, { useState } from "react";
import { PLCButton } from "./plcbutton";
import TestButton from "./TestButton";
import "../styles/main.css";

const defaultState = {
  "I:0/0": false,
  "I:0/1": false,
  "I:0/2": false,
  "I:0/3": false,
  "I:0/4": false,
  "I:0/5": false,
  "I:0/6": false,
  "I:0/7": false,
};

export const Main = () => {
  const [state, setState] = useState(defaultState);
  const handleInputResponse = (inputs) => {
    setState(inputs);
  };
  return (
    <div className="mainDiv">
      <h1>GH Cat5 Cable Testing</h1>
      <h3>Outputs</h3>
      <span></span>
      <PLCButton
        color="gray"
        Text="(P1) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput1"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P2) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput2"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P5) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput3"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P6) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput4"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P7) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput5"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P8) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput6"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P9) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput7"
        activated={false}
        returnValues={handleInputResponse}
      />
      <PLCButton
        color="gray"
        Text="(P10) Output"
        url="http://192.168.0.25:4000/plc/add/ActivateOutput8"
        activated={false}
        returnValues={handleInputResponse}
      />
      <br></br>
      <br></br>
      <h3>Inputs</h3>
      <PLCButton Text="(P1 Input)" activated={state["I:0/0"]} />
      <PLCButton Text="(P2 Input)" activated={state["I:0/1"]} />
      <PLCButton Text="(P5 Input)" activated={state["I:0/2"]} />
      <PLCButton Text="(P6 Input)" activated={state["I:0/3"]} />
      <PLCButton Text="(P7 Input)" activated={state["I:0/4"]} />
      <PLCButton Text="(P8 Input)" activated={state["I:0/5"]} />
      <PLCButton Text="(P9 Input)" activated={state["I:0/6"]} />
      <PLCButton Text="(P10 Input)" activated={state["I:0/7"]} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TestButton
        text="Test Cable"
        url="http://localhost:4000/plc/read/cableinputs"
        returnValues={handleInputResponse}
      ></TestButton>
    </div>
  );
};
