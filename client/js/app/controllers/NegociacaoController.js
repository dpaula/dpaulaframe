class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){
        event.preventDefault();
        
        const d2 = new Date(this._inputData.value.split('-'));
        console.log(d2);
        
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        console.log(data);
        

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        
        
        
        console.log(typeof(this._inputData.value));
        
    }
    
    carregaIniciais(){
        let $ = document.querySelector.bind(document);
        $('#data').value = '2015-01-01';
        $('#quantidade').value = '10';
        $('#valor').value = '2';
        
        let d1 = new Date([2011, 10, 20]);
        console.log(d1);
        let d3 = new Date('2011,10,25');
        console.log(d3);
        
    }
}