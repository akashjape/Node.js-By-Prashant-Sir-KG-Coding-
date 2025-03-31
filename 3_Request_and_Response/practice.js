const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  if (req.url.toLowerCase() === "/") {
    res.write("<html>");
    res.write("<head><title>Myntra Navigation</title></head>");
    res.write("<body><h1>Welcome To Home</h1></body>");
    res.write('<a href="/">Home</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/men">Men</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.write("<html>");
    res.write("<head><title>Myntra Navigation</title></head>");
    res.write("<body><h1>Welcome To Men</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.write("<html>");
    res.write("<head><title>Myntra Navigation</title></head>");
    res.write("<body><h1>Welcome To Women</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.write("<html>");
    res.write("<head><title>Myntra Navigation</title></head>");
    res.write("<body><h1>Welcome To Kids</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.write("<html>");
    res.write("<head><title>Myntra Navigation</title></head>");
    res.write("<body><h1>Welcome To cart</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Myntra Navigation</title></head>");
  res.write("<body><h1>404</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
