class NegociacaoService {

    constructor() {
        this.http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        //retornando uma promise, passando uma funcao (arrow function) com dois parametros
        //primeiro resolve, onde será passada o resultado de sucesso (cai no then)
        //depois o reject, resultado de insucesso (cath)
        return new Promise((resolve, reject) => {

            this.http.get('negociacoes/semana')
                .then(res => {
                    resolve(res.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana.');
                });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this.http.get('negociacoes/retrasada')
                .then(res => {
                    resolve(res.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada.');
                });
        });

    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this.http.get('negociacoes/anterior')
                .then(res => {
                    resolve(res.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior.');
                });
        });
    }
}