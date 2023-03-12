require('dotenv').config();
const express = require('express');
const server = express();

server.get('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});

const port = process.env.PORT || 9000; // in case there is no PORT in either process.env nor the environment

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
