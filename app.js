const app = require('express')();
const { PORT = 3000 } = process.env;

app.get('/', (_, res) => {
  res.end("Hello world");
});

app.get('/api', (_, res) => {
  res.setHeader('content-type', 'application/json');
  res.json({ msg: 'JSON response' });
});

app.get('/hi/:name', (req, res) => {
  const { name = "John" } = req.params;

  res.setHeader('content-type', 'application/json');
  res.json({ msg: 'Hello ' + name });
});



app.listen(PORT, (err) => {
  if (err) throw err;

  console.log("App run on port", PORT);
});
