class NegociacaoController{

    constructor(){
        debugger
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //nas arrow function o this é lexo, ou seja, não muda em seu escopo
        this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model) );

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        

        this._mensagem.texto = 'Negociação adicionada com sucesso!!';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    apaga(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociaçoes apagadas com sucesso !';
        this._mensagemView.update(this._mensagem);
    }
    
    _criaNegociacao(){
        let data = DataHelper.textoParaData(this._inputData.value);
    
        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    carregaIniciais(){
        let $ = document.querySelector.bind(document);
        $('#data').value = '2015-01-01';
        $('#quantidade').value = '10';
        $('#valor').value = '2';
        
    }
}