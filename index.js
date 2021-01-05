const express = require("express");
const fetch = require("node-fetch");
const app = express();

const port = process.env.PORT || 3001;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/:query", async (request, response) => {
  const baseURL = "https://api.datamuse.com/words?ml=";
  const query = request.params.query;

  const endpoint = baseURL + query;

  const res = await fetch(endpoint);
  const data = await res.json();

  response.json(data);
});

console.log("listeninig on", port);
app.listen(port);
