const express = require('express');
const app = express();


function areNumbers(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return true;
    }
    return false;
}

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

//Suma
app.post('/suma', (req, res) => {
    const {num1, num2} = req.body;
    if(num1 != undefined && num2 !=undefined){
      if(areNumbers(num1, num2)){
        res.send(`La suma es: ${num1 + num2}`);
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