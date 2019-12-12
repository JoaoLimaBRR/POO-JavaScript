export class Carro
{
    private placa : string;
    private cor   : string;
    private modelo: string;
    private ano   : number;
    private ligado: boolean = false;

    public getPlaca(): string
    {
        return this.placa;
    }
    public setPlaca(_placa:string):void
    {
        this.placa = _placa;
    }

    public getCor(): string
    {
        return this.cor;
    }
    public setCor(_cor:string):void
    {
        this.cor = _cor;
    }

    public getModelo(): string
    {
        return this.modelo;
    }
    public setModelo(_modelo:string):void
    {
        this.modelo = _modelo;
    }

    public getAno(): number
    {
        return this.ano;
    }
    public setAno(_ano:number):void
    {
        if(_ano < 1990 || _ano > 2100)
        {
            console.log("Ei!! Voce digitou o ano do carro invalido");
        }
        else
        {
            this.ano = _ano;
        }
    
    }

    

    




    private andar():void
    {
        console.log("O carro " + this.modelo + " do ano " + this.ano + " da cor " + this.cor + " da placa " + this.placa + " ligado ....");
    }

    private parar():void
    {
        console.log(`O carro ${this.modelo} do ano ${this.ano} da cor ${this.cor}  da placa ${this.placa} desligou ....`);
    }

    public ligar():void
    {
       if(this.ligado == false)
       {
           this.ligado = true;
           if(this.ligado == true)
           {
               this.andar();
           } 
       }
       else
       {
            console.log("Voce tentou ligar, o carro ligado");
       }
    }
    public desligar():void
    {
        if(this.ligado == true)
        {
            this.ligado = false;
            if(this.ligado == false)
            {
                this.parar();
            }
        }
        else
        {
            console.log("Voce tentou delsigar o carro desligado");
        }
    }
}

