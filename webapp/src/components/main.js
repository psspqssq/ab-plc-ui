import React from "react";
import { PLCButton } from "./plcbutton";

export const Main = () => {
  return (
    <React.Fragment>
      <PLCButton
        color="green"
        Text="ON"
        url="http://localhost:4000/plc/add/LightOn/1"
      />
      <PLCButton
        color="green"
        Text="BLINK"
        url="http://localhost:4000/plc/add/BlinkingLights/1"
      />
      <PLCButton
        color="red"
        Text="STOP"
        url="http://localhost:4000/plc/add/Stop/0"
      />
      <PLCButton
        color="blue"
        Text="RESET"
        url="http://localhost:4000/plc/add/Stop/1"
      />
    </React.Fragment>
  );
};
