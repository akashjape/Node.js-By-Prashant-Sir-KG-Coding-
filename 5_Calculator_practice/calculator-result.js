const resultHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log(body);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);

    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    res.write(`<h1>Sum is : ${result}</h1>
      <a href='/'>Go home</a>
      `);
    res.end();
  });
};

module.exports = resultHandler;
