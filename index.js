const express = require('express');
const app = express();


function areNumbers(num1, num2){
    return !isNaN(num1) && !isNaN(num2);
}

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

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


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});