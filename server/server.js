const app = require("./app");
const plc = require("./plc");
const cors = require("cors");
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/plc/add/:address/:value", (req, res) => {
  console.log(req.params);
  if (Object.keys(req.params) < 2) {
    res.status(500).send({ message: "<h1n1>Albahaca</h1n1>" });
  } else {
    plc.modify(req.params.address, req.params.value, (response) => {
      console.log("Sending a response");
      console.log(response);
      res.status(200).send({ response });
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
