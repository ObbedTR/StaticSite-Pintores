
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/run'));

app.listen(3000, ()=>{

    console.log('Escuchando el puerto tcp 3000')

});
