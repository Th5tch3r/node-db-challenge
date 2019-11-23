const server = require("./server.js");

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`This server in alive in ${PORT}`);
});