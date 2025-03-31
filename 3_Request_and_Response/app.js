const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-type", "text/html");
  if (req.url.toLowerCase() === "/") {
    res.write("<html>");
    res.write("<head><title>First Response</title></head>");
    res.write("<body><h1>Enter The Details</h1></br>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username"/></br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" value="male" name="male">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" value="female" name="female"></br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "Akash");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // Default response for undefined routes
  res.write("<html>");
  res.write("<head><title>404 Not Found</title></head>");
  res.write("<body><h1>Page Not Found</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
