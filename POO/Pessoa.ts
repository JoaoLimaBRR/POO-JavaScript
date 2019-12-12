export class Pessoa
{
    numRegistro: number;
    nome: string;
    email: string;
    telefone: string;


    public setNumRegistro(numRegistro:number):void
    {
        this.numRegistro = numRegistro;
    }
    public getNumRegistro()
    {
        return this.numRegistro;
    }
    public setNome(nome:string):void
    {
        this.nome = nome;
    }
    public getNome()
    {
        return this.nome;
    }
    public setEmail(email:string):void
    {
        this.email = email;
    }
    public getEmail()
    {
        return this.email;
    }
    public setTelefone(telefone:string)
    {
        this.telefone = telefone;
    }
    public getTelefone()
    {
        return this.telefone;
    }


}