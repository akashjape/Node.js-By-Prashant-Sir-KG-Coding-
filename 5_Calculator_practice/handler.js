const inputHandler = require("./calculator");
const resultHandler = require("./calculator-result");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url.toLowerCase() === "/") {
    res.write(`
      <html>
      <head><title>Calculator</title></head>
      <body>
      <h1>Welcome to Calculator</h1>
      <a href='/calculator'>Go to calculator</a>
      </body>
      </html>
      `);
    return res.end();
  }
  if (req.url.toLowerCase() === "/calculator") {
    return inputHandler(req, res); // Don't call res.end() here
  }

  if (req.url.toLowerCase() === "/calculator-result" && req.method === "POST") {
    return resultHandler(req, res); // Don't call res.end() here
  }

  res.write(`
    <html>
    <head><title>Calculator</title></head>
    <body>
    <h1>404 page not found</h1>
    <a href='/'>Go to Home</a>
    </body>
    </html>
    `);
  return res.end();
};

module.exports = requestHandler;
