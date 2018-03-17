class DataHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada!!');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {


        //\d{4} - busca numerod(d) com 4 digitos
        //\d{4} - busca numerod(d) com 2 digitos

        const expressao = /\d{4}-\d{2}-\d{2}/;

        if(!expressao.test(texto)){
            throw new Error('Deve estar no formato yyyy-MM-dd');
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}