const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-type", "text/html");
  if (req.url.toLowerCase() === "/") {
    res.write("<html>");
    res.write("<head><title>First Response</title></head>");
    res.write("<body><h1>Enter The Details</h1></br>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username"/></br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" value="male" name="gender">');

    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" value="female" name="gender"></br>'
    );
    res.write('<button type="submit">Submit</button>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);

      const bodyObject = Object.fromEntries(params);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
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
};

module.exports = requestHandler;
