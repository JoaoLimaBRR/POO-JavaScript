import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa
{
    curso: string;
    anoMatricula: number;

    public setCurso(curso: string)
    {
        this.curso = curso;
    }
    public getCurso()
    {
        return this.curso;
    }

    public setAnoMatricula(anoMatricula: number): void
    {
        this.anoMatricula = anoMatricula;
    }
    public getAnoMatricula()
    {
        this.anoMatricula;
    }

}