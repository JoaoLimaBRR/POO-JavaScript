import { Produto } from "./Produto";

var p1: Produto;

p1 = new Produto("Manga Palmer",12,"Alisa o cabelo, afina a cintura e engrossa as canelas ", 10.00, 100);


var nome = p1.getNome();
console.log(nome);
p1.getPreco();