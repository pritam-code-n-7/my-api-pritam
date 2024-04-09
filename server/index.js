const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

let data = [];

// Create operation
app.post("/api/myitems", (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Read operation
app.get("/api/myitems", (req, res) => {
  res.json(data);
});

// Update operation
app.put("/api/myitems/:id", (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  data[id] = updatedItem;
  res.json(updatedItem);
});

// Delete operation
app.delete("/api/myitems/:id", (req, res) => {
  const id = req.params.id;
  const deletedItem = data[id];
  data = data.filter((item, index) => index != id); // Use '!=' instead of '!==' to compare values without considering types
  res.json(deletedItem);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
