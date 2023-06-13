const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.post('/primo-201504081/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    res.send(`El número ${numero} ${esPrimo(numero) ? 'es primo' : 'no es primo'}`);
  });
  
const esPrimo = (numero) => {
    if (numero <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(numero); i <= sqrt; i++)
      if (numero % i === 0) return false;
    return true;
} 


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});