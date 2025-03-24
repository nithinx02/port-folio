const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const auth = new google.auth.GoogleAuth({
  keyFile: "YOUR_JSON_FILE.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";
const SHEET_NAME = "Sheet1"; // Change if needed

app.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const sheets = google.sheets({ version: "v4", auth });
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[name, email, message, new Date().toLocaleString()]],
      },
    });

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
