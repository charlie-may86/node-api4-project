const server = require("./api/server");
const { PORT } = require("./config");

server.listen(PORT, () => {
  console.log("***Server listening on port 4000***");
});
