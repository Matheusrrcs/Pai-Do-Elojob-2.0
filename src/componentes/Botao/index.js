import React, { Component } from 'react';
import "../Botao/botao.css"
class Botao extends Component {


    render() {
        return (
            <div className="icone">

                <a href="/" className="btn">
                    {this.props.nome}</a>
 
            </div>

        )
    }

}



export default Botao;

