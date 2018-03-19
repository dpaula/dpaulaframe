class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    template(model){
        throw new Error('O método template deve ser implementado!');
    }

    update(model) {
        //recebe um texto e transforma em documento html
        this._elemento.innerHTML = this.template(model);
    }

}