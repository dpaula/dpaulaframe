class NegociacoesView{

    constructor(elemento){

        this._elemento = elemento;
    }

    update(){
        //recebe um texto e transforma em documento html
        this._elemento.innerHTML = this._template();
    }

    _template(){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}

