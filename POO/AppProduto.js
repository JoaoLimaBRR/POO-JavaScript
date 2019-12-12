"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var p1;
p1 = new Produto_1.Produto("Maça", 12, "Maça Argentina ", 15, 100);
var nome = p1.getNome();
console.log(nome);
p1.getPreco();
