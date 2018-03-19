class ListaNegociacoes{

    constructor(contexto, acao){
        this._negociacoes = [];
        this._acao = acao;
        this._contexto = contexto;
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        //mudando o contexto da função atravez do metodo apply da classe Reflect
        //parametros: a função a qual mudar, o contexto, e seus parametros
        Reflect.apply(this._acao, this._contexto, [this]);
    }
    
    get negociacoes(){
        //retornando uma nova referencia de negociações
        //programação defenciva para proteger as negociações    
        return [].concat(this._negociacoes);
    }
    
    esvazia(){
        this._negociacoes = [];
        Reflect.apply(this._acao, this._contexto, [this]);
    }

}