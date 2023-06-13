const express = require('express');
const app = express();


function areNumbers(num1, num2){
    return !isNaN(num1) && !isNaN(num2);
}

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
//Suma
app.post('/suma', (req, res) => {
    
    const {num1, num2} = req.query;
    console.log(req.query)
    if(num1 != undefined && num2 !=undefined){
      if(areNumbers(num1, num2)){
        const result = parseFloat(num1) + parseFloat(num2);
        res.send(`La suma es: ${result}`);
      }else{
        res.send(`Error: Los valores ingresados no son números`);
      }
    }else{
      res.send(`Error: No se ingresaron los valores`);
    }
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