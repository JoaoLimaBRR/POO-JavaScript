import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

var a1 : Aluno;

a1 = new Aluno();

a1.setNumRegistro(1);
a1.setNome("Joao Vitor Soares Lima");
a1.setEmail("joaovitorosareslima12@gmail.com");
a1.setTelefone("(11) 94022-6032");
a1.setCurso("Analise e desenvolvimento de sitemas");
a1.setAnoMatricula(2018);
console.log(a1);

var p1: Professor;

p1 = new Professor();

p1.setNumRegistro(2);
p1.setNome("Isidro ");
p1.setEmail("isidro@gmail.com");
p1.setTelefone("(11) 97070-7070");
p1.setValorHora(100.00);
p1.setNumHoras(200);
p1.setAreaFormacao("Mega Blaster Big Programador");
console.log(p1);


