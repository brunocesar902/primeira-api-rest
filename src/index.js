const express = require('express'); // ok
const rotas = require('./rotas')

const app = express(); // ok

app.use(express.json());

app.use(rotas);

app.listen(3000); // ok