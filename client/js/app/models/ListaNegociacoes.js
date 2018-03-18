class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //retornando uma nova referencia de negociações
        //programação defenciva para proteger as negociações    
        return [].concat(this._negociacoes);
    }


}