const inputHandler = (req, res) => {
  res.setHeader("Content-Type", "text.html");
  res.write(`
  <html>
  <head><title>Calculator</title></head>
  <body>
  <h1>Welcome to Calculator</h1>
  <form action='./calculator-result', method='POST'>
  <input type='text' name='first' placeholder='First num'>
  <input type='text'  name='second' placeholder='Second num'>
  <input type='submit' value='sum'/>
  </form>
  </body>
  </html>
  `);
  return res.end();
};

module.exports = inputHandler;
