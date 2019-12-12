export class Produto 
{
    private nome    : string;
    private codigo  : number;
    private detalhes: string;
    private preco   : number;
    private estoque : number;

    public constructor(_nome:string, _codigo:number, _detalhes:string, _preco:number, _estoque:number)
    {
        this.nome     = _nome;
        this.codigo   = _codigo;
        this.detalhes = _detalhes;
        this.preco    = _preco;
        this.estoque  = _estoque;
    }

    public getNome()
    {
        return this.nome
    }
    public setNome(_nome:string):void
    {
        this.nome = _nome;
    }
    public getCodigo()
    {
        return this.codigo
    }
    public setCodigo(_codigo:number):void
    {
        this.codigo = _codigo;
    }
    public getDetalhes()
    {
        return this.detalhes
    }
    public setDetalhes(_detalhes:string):void
    {
        this.detalhes = _detalhes;
    }
    public getPreco()
    {
        return this.preco;
    }
    public setPreco(_preco:number):void
    {
        this.preco = _preco;
    }
    public getEstoque()
    {
        return this.estoque
    }
    public setEstoque(_estoque:number):void
    {
        this.estoque = _estoque;
    }

    public getInfo():string
    {
        return `O nome do produto é ${this.nome} tras o seguintes beneficios ${this.detalhes} na promocao por apenas${this.preco} que tem o seguinte codigo ${this.codigo} e esta quantidade em estoque ${this.estoque}`
    }
}