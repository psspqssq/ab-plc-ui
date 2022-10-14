var nodepccc = require("nodepccc");
var conn = new nodepccc();

conn.initiateConnection({ port: 44818, host: "192.168.0.20" });

const validateTest = () => {};

const modify = (address, value, callback) => {
  if (!address || !value) {
    return "Albahaca";
  }
  conn.writeItems(tag(address), Number(value));
  callback({ address: tag(address), value });
};

const read = (callback) => {
  conn.addItems(tag("ReturnInputs"));
  conn.readAllItems(callback);
};
const test = (params, callback) => {
  conn.writeItems(tag(params.output), 1);
  conn.readAllItems((response, values) => {
    callback(values);
    conn.writeItems(tag(params.output), 0);
  });
};
const tag = (tag) => {
  switch (tag) {
    case "ActivateOutput1":
      return "B3:0/0";
    case "ActivateOutput2":
      return "B3:0/1";
    case "ActivateOutput3":
      return "B3:0/2";
    case "ActivateOutput4":
      return "B3:0/3";
    case "ActivateOutput5":
      return "B3:0/4";
    case "ActivateOutput6":
      return "B3:0/5";
    case "ActivateOutput7":
      return "B3:0/6";
    case "ActivateOutput8":
      return "B3:0/7";
    case "ReturnInputs":
      return [
        "I:0/0",
        "I:0/1",
        "I:0/2",
        "I:0/3",
        "I:0/4",
        "I:0/5",
        "I:0/6",
        "I:0/7",
      ];
  }
};
conn.addItems(tag("ReturnInputs"));

module.exports = {
  modify,
  read,
  test,
};
