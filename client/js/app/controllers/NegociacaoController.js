class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){
        event.preventDefault();
        
        const dtHelper = new DataHelper();
        let data = dtHelper.textoParaData(this._inputData.value);

        console.log('texto para data: '+data);
        console.log('data para texto: '+dtHelper.dataParaTexto(data));
        

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    
    carregaIniciais(){
        let $ = document.querySelector.bind(document);
        $('#data').value = '2015-01-01';
        $('#quantidade').value = '10';
        $('#valor').value = '2';
        
    }
}