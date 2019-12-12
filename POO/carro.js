"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
        this.ligado = false;
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1990 || _ano > 2100) {
            console.log("Ei!! Voce digitou o ano do carro invalido");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.andar = function () {
        console.log("O carro " + this.modelo + " do ano " + this.ano + " da cor " + this.cor + " da placa " + this.placa + " ligado ....");
    };
    Carro.prototype.parar = function () {
        console.log("O carro " + this.modelo + " do ano " + this.ano + " da cor " + this.cor + "  da placa " + this.placa + " desligou ....");
    };
    Carro.prototype.ligar = function () {
        if (this.ligado == false) {
            this.ligado = true;
            if (this.ligado == true) {
                this.andar();
            }
        }
        else {
            console.log("Voce tentou ligar, o carro ligado");
        }
    };
    Carro.prototype.desligar = function () {
        if (this.ligado == true) {
            this.ligado = false;
            if (this.ligado == false) {
                this.parar();
            }
        }
        else {
            console.log("Voce tentou delsigar o carro desligado");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
