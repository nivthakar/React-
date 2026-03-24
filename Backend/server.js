const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/market-turnover", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.nseindia.com/api/NextApi/apiClient?functionName=getMarketTurnover",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
          "Referer": "https://www.nseindia.com/",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "API error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});