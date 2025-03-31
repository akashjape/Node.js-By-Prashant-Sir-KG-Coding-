const http = require("http");
const testingSyntax = require("./testing-syntax");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax(req, res);
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}]`);
});
