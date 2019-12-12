import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa
{
    valorHora   : number;
    numHoras    : number;
    areaFormacao: string;

    public getValorHora()
    {
        this.valorHora;
    }
    public setValorHora(valorHora: number)
    {
        this.valorHora = valorHora;
    }

    public getNumHoras()
    {
        this.getNumHoras;
    }
    public setNumHoras(numHoras: number)
    {
        this.numHoras = numHoras;
    }

    public getAreaFormacao()
    {
        this.areaFormacao;
    }
    public setAreaFormacao(areaFormacao: string): void
    {
        this.areaFormacao = areaFormacao;
    }
}