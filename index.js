const express = require('express');
const app = express();

// Configuración para analizar datos JSON en las solicitudes POST
app.use(express.json());

// Endpoint para la resta
app.post('/resta', (req, res) => {
  // Obtén los valores de la solicitud POST
  const { num1, num2 } = req.body;

  // Realiza la resta
  const resultado = num1 - num2;

  // Devuelve el resultado como respuesta
  res.json({ resultado });
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});