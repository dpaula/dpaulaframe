class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    update(model) {
        //recebe um texto e transforma em documento html
        this._elemento.innerHTML = this._template(model);
    }

}