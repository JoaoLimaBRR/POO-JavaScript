import { Produto } from "./Produto";

let p2: Produto;
let p3: Produto;

p2 = new Produto("Uvas Thompson", 2, "Uvas doces sem sementes colhidas pelas mãos divinas", 15.00, 200);
p3 = new Produto("Laranja Pera", 3, "Laranja pera, mais doce do que beijo de viuva apaixonada, 1 laranja 4 litros de suco", 5.00, 100);

let info = p2.getInfo();
console.log(info);

let info2 = p3.getInfo();
console.log(info2);