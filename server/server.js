const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "waitlist.json");

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]");
}

app.post("/api/waitlist", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  data.push({ email, timestamp: new Date().toISOString() });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  console.log("Signup:", email);
  res.json({ success: true, message: "You're on the list!" });
});

app.get("/api/waitlist", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  res.json(data);
});

const PORT = 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`VitalLink waitlist API running on port ${PORT}`);
});
