class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){
        event.preventDefault();
        
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        
        console.log(typeof(this._inputData.value));
        console.log(negociacao);
        
    }
    
    carregaIniciais(){
        let $ = document.querySelector.bind(document);
        $('#data').value = '2015-01-01';
        $('#quantidade').value = '10';
        $('#valor').value = '2';
        
    }
}