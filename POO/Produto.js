"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(_nome, _codigo, _detalhes, _preco, _estoque) {
        this.nome = _nome;
        this.codigo = _codigo;
        this.detalhes = _detalhes;
        this.preco = _preco;
        this.estoque = _estoque;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (_codigo) {
        this.codigo = _codigo;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (_detalhes) {
        this.detalhes = _detalhes;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (_preco) {
        this.preco = _preco;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (_estoque) {
        this.estoque = _estoque;
    };
    Produto.prototype.getInfo = function () {
        return "O nome do produto \u00E9 " + this.nome + " tras o seguintes beneficios " + this.detalhes + " na promocao por apenas" + this.preco + " que tem o seguinte codigo " + this.codigo + " e esta quantidade em estoque " + this.estoque;
    };
    return Produto;
}());
exports.Produto = Produto;
