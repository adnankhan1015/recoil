const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3002;

app.get("/notifications", (req, res) => {
  res.json({
    network: 7,
    jobs: 8,
    messaging: 7,
    notification: 5,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
