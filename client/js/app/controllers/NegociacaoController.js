class NegociacaoController{

    adiciona(event){
        event.preventDefault();

        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');
        
        console.log(inputData);
        console.log(inputQuantidade);
        console.log(inputValor);
        
    }
    
    carregaIniciais(){
        let $ = document.querySelector.bind(document);
        $('#data').value = '2015-01-01';
        $('#quantidade').value = '10';
        $('#valor').value = '2';
        
    }
}