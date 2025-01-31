const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3002;

const TODOS = [
  {
    id: 1,
    title: "Go to Gym",
    description: "Hit the gym from 7-9",
  },
  {
    id: 2,
    title: "Go to eat food",
    description: "Eat food from from 9-11",
  },
];

app.get("/notifications", (req, res) => {
  res.json({
    network: 7,
    jobs: 8,
    messaging: 7,
    notification: 5,
  });
});

app.get("/todos", (req, res) => {
  res.json(TODOS);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
