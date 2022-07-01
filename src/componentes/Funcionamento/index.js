import { render } from '@testing-library/react';
import React, { Component, useEffect } from 'react';
import "./funcionamento.css"


class Bolas extends Component {

    render() {
        return (
            <div className='row d-flex justify-content-center'>
                <span className='bola  '></span>
                <span className='bola  '></span>
                <span className='bola  '></span>

            </div>

        )
    }
}

class Card extends Component {
    render() {
        return (
            <div className='col-lg-4 coluna-card text-center'>

                <div className='subtitulo-corpo'> <h5 className='subtitulo'>
                    {this.props.subtitulo}
                </h5></div>
                <div className='container descricao'>
                    <p className='descricao-texto'>

                        {this.props.descricao}

                    </p>
                </div>
            </div>
        )
    }
}


class Funcionamento extends Component {
    render() {
        return (
            <div className='funcionamento-corpo'>

                <div className='titulo-principal'>
                    <h3 className="titulo-funcionamento">como isso funciona?</h3>
                    <p class="subtitulo">PASSOS FÁCEIS PARA COMPRAR</p>
                    <Bolas />
                </div>


                <div className='container detalhes-corpo '>
                    <div className='row '>
                        <Card subtitulo="escolha o serviço" descricao="Selecione uma das opções de serviço que atendem a sua necessidade" />
                        <Card subtitulo="confirme seu pedido" descricao="Selecione os  detalhes do seu pedido e clique em comprar que o levara para o whatssap " />
                        <Card subtitulo="o booster começa agora" descricao="Sucesso! Agora você pode apenas esperar que nosso booster fara o trabalho dele. " />
                    </div>

                </div>


            </div>
        )
    }
}


export default Funcionamento 