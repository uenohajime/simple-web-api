const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  const name = req.query.name || 'world';
  res.json({ message: `hello, ${name}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
