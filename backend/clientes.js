/*eslint no-console: 0*/
"use strict";

const express = require('express');
const appClient = express();

const dbClient = [
	{codigo: 10, nome: "Carlos"},
  	{codigo: 11, nome: "José"},
  	{codigo: 12, nome: "Maria"}
];

appClient.get('/clientes', (req, res) => {
	res.status(200).json(dbClient);
});

appClient.post('/clientes', (req, res) => {
	const { codigo, nome } = req.body;
	
	dbClient.push({ codigo, nome });
	
	res.status(200).send("Adicionado com sucesso");
});

module.exports = appClient; 