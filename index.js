const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.get('/info', (req, res) => {
  res.send(`
    Jonathan Marcos Valiente González-201931581 \n
    Denilson Florentín de León Aguilar-201830313 \n
    Jose Diego Perez Toralla-201504081 \n
    Herberth Abisai Avila Ruiz-201504464 \n

  `);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});