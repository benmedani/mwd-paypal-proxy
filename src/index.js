const app = require("./server");
const { port } = require("./config");

const server = app.listen(port, function() {
  console.log("Webserver is ready");
});
