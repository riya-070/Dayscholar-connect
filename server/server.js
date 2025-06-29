require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true, // optional
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// ✅ Define Schema
const inventorySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  "Email ID": { type: String, required: true },
  "Roll No": {
    "": { type: String },
  },
  "LinkedIn Handle": { type: String },
  "Web Technologies": { type: String },
  "What is your Technical Skillset (any software/language) in the selected domain? (WT)": { type: String },
  "What is your Experience (however little) in the selected domain? (WT)": { type: String },
  "What are your Achievements (however small) in the selected domain? (WT)": { type: String },
  "Non - Technical (If Proficient in any)": { type: String },
  "What is your Skillset (any software/language) in the selected domain? (NT)": { type: String },
  "What is your Experience (however little) in the selected domain? (NT)": { type: String },
  "What are your Achievements (however small) in the selected domain? (NT)": { type: String },
  "Media & Design (If Proficient in any)": { type: String },
  "What is your Skillset (any software/language) in the selected domain? (MD)": { type: String },
  "What is your Experience (however little) in the selected domain? (MD)": { type: String },
  "What are your Achievements (however small) in the selected domain? (MD)": { type: String },
  "Core Domains (If Proficient in any)": { type: String },
  "What is your Skillset (any software/language) in the selected domain? (CD)": { type: String },
  "What is your Experience (however little) in the selected domain? (CD)": { type: String },
  "What are your Achievements (however small) in the selected domain? (CD)": { type: String },
  "Miscellaneous (If Proficient in any)": { type: String },
  "What is your Skillset (any software/language) in the selected domain? (MC)": { type: String },
  "What is your Experience (however insignificant) in the selected domain? (MC)": { type: String },
  "What are your Achievements (however small) in the selected domain? (MC)": { type: String },
});

// ✅ Create model
const Inventory = mongoose.model("inventory", inventorySchema);

// ✅ Routes
app.get("/items", (req, res) => {
  Inventory.find()
    .then((items) => {
      res.json(items.map((item) => item.toObject()));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});

// ✅ You can retain your domain-specific routes as-is
// (web-technologies, non-technical, media-design, core-domains)
// 💡 Optional: Move repetitive logic into a helper function to reduce redundancy

// ✅ Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
