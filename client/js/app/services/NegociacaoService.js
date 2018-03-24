class NegociacaoService {

    obterNegociacoesDaSemana() {

        //retornando uma promise, passando uma funcao (arrow function) com dois parametros
        //primeiro resolve, onde será passada o resultado de sucesso (cai no then)
        //depois o reject, resultado de insucesso (cath)
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        //resolve retornando a lista de negociações
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        //reject retornando mensagem do erro
                        reject('Não foi possível obter as negociações da semana.');
                    }
                }
            };
            xhr.send();
        });

    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        reject('Não foi possível obter as negociações da semana retrasada.');
                    }
                }
            };
            xhr.send();

        });

    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        reject('Não foi possível obter as negociações da semana anterior.');
                    }
                }
            };
            xhr.send();
        });
    }
}