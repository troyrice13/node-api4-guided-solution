require('dotenv').config();
const express = require('express');
const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
  res.json(`hello, ${process.env.FRIEND || "my friend"}!`);
});

server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});

const port = process.env.PORT || 9000; // in case there is no PORT in either process.env nor the environment

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
