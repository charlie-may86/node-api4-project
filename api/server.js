const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`
    <h1>This is my node module four project<h1>
    `);
});

server.use("*", (req, res) => {
  res.json({ message: "You hit the catch all" });
});

module.exports = server;
