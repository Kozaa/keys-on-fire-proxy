const express = require("express");
const fetch = require("node-fetch");
const app = express();

const port = process.env.PORT || 3001;

app.get("/:query", async (request, response) => {
  const baseURL = "https://api.datamuse.com/words?ml=";
  const query = request.params.query;

  const endpoint = baseURL + query;

  const res = await fetch(endpoint);
  const data = await res.json();

  response.header("Access-Control-Allow-Origin", "*");
  response.json(data);
});

console.log("listeninig on", port);
app.listen(port);
