/*eslint no-console: 0*/
"use strict";

const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const clientServer = require('./clientes');

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
	res.json("Utilizando Express no SAP Web IDE");
});

app.use(clientServer);