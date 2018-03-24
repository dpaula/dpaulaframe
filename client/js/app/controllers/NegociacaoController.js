class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');


        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso!!';

        this._limpaFormulario();

    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociaçoes apagadas com sucesso !';
    }

    _criaNegociacao() {
        let data = DataHelper.textoParaData(this._inputData.value);

        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    importaNegociacoes() {
        let negService = new NegociacaoService();

        //executa cada chamada na rodem do array
        Promise.all([
            negService.obterNegociacoesDaSemana(),
            negService.obterNegociacoesDaSemanaAnterior(),
            negService.obterNegociacoesDaSemanaRetrasada()
        ]).then(negociacoes => {//retorna uma lista da lista
            //pega um array 3d e transforma em 2d
            negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
            .forEach(n => this._listaNegociacoes.adiciona(n));
            this._mensagem.texto = 'Negociacoes da semana impotadas com sucesso!';
        })
        .catch(erro => this._mensagem.texto = erro);


        // negService.obterNegociacoesDaSemana()
        //     .then(negociacoes => {
        //         negociacoes.forEach(n => this._listaNegociacoes.adiciona(n));
        //         this._mensagem.texto = 'Negociacoes da semana impotadas com sucesso!';
        //     })
        //     .catch(erro => this._mensagem.texto = erro);

        // negService.obterNegociacoesDaSemanaAnterior()
        //     .then(negociacoes => {
        //         negociacoes.forEach(n => this._listaNegociacoes.adiciona(n));
        //         this._mensagem.texto = 'Negociacoes da semana impotadas com sucesso!';
        //     })
        //     .catch(erro => this._mensagem.texto = erro);

        // negService.obterNegociacoesDaSemanaRetrasada()
        //     .then(negociacoes => {
        //         negociacoes.forEach(n => this._listaNegociacoes.adiciona(n));
        //         this._mensagem.texto = 'Negociacoes da semana impotadas com sucesso!';
        //     })
        //     .catch(erro => this._mensagem.texto = erro);



        // negService.obterNegociacoesDaSemana((erro, negociacoes) => {
        //     if(erro){
        //         this._mensagem.texto = erro;
        //         return;
        //     }
        //     negociacoes.forEach(negociacao => {
        //         this._listaNegociacoes.adiciona(negociacao);
        //     });
        //     negService.obterNegociacoesDaSemanaAnterior((erro, negociacoes) => {
        //         if(erro){
        //             this._mensagem.texto = erro;
        //             return;
        //         }
        //         negociacoes.forEach(negociacao => {
        //             this._listaNegociacoes.adiciona(negociacao);
        //         });
        //         negService.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => {
        //             if(erro){
        //                 this._mensagem.texto = erro;
        //                 return;
        //             }
        //             negociacoes.forEach(negociacao => {
        //                 this._listaNegociacoes.adiciona(negociacao);
        //             });
        //             this._mensagem.texto = 'Negociações importadas com sucesso!!';
        //         });
        //     });
        // });




    }

    carregaIniciais() {
        let $ = document.querySelector.bind(document);
        $('#data').value = '2015-01-01';
        $('#quantidade').value = '10';
        $('#valor').value = '2';
    }
}