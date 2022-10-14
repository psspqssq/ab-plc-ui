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

// Props values
// text *
// url *
// setInputs()

const TestButton = (props) => {
  const handleTestClick = async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let status = {};
    for (let i = 0; i < 10; i++) {
      if (i > 1) {
        status = {
          ...status,
          ["pin" + String(i - 1)]: {
            ...status["pin" + String(i - 1)],
            activated: false,
          },
        };
      }
      await wait(1000);
      status = {
        ...status,
        ["pin" + String(i + 1)]: { activated: true },
      };
      axios.get(props.url + String(i + 1)).then(async (response) => {
        const val = response.data.values;
        status = {
          ...status,
          ...response.data.values,
        };
        for (let j = 0; j < 8; j++) {
          console.log(val[Object.keys(val)[j]]);
          if (val[Object.keys(val)[j]] === true && j === i) {
            status = {
              ...status,
              ["pin" + String(i + 1)]: {
                ...status["pin" + String(i + 1)],
                continuity: true,
                tested: true,
              },
            };
          }
          if (val[Object.keys(val)[j]] === false && j === i) {
            console.log(status.errors);
            status = {
              ...status,
              ["pin" + String(i + 1)]: {
                ...status["pin" + String(i + 1)],
                continuity: false,
                tested: true,
                errors: {
                  ...status["pin" + String(i + 1)]?.errors,
                  ErrorContinuity: `No continuity on pin ${i + 1}`,
                },
              },
            };
          }
          if (val[Object.keys(val)[j]] === true && j !== i) {
            status = {
              ...status,
              ["pin" + String(i + 1)]: {
                ...status["pin" + String(i + 1)],
                errors: {
                  ...status["pin" + String(i + 1)]?.errors,
                  ["error" + String(j + 1)]: `Pin ${
                    j + 1
                  } is energized, check wiring or bad soldering`,
                },
              },
            };
          }
        }
        props.setInputs(status);
      });
    }
  };
  return (
    <TestButtonStyled onClick={handleTestClick}>{props.text}</TestButtonStyled>
  );
};

export default TestButton;
