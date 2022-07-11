
import React, { Component, useEffect } from 'react';
import "./funcionamento.css"
import $ from 'jquery';


class Bolas extends Component {

    render() {
        return (
            <div className='row d-flex justify-content-center  ml-4 mr-4'>
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

    constructor(props) {
        super(props);
        this.state = {
            btn: ""
        }

        this.ativarAnimacao = this.ativarAnimacao.bind(this)
    }



    ativarAnimacao() {

        let anime = this.state;

        if ($(window.document).scrollTop() > 450) {


            anime.btn = "open"
            this.setState({ anime })
        }
        else {

            anime.btn = ""
            this.setState({ anime })
        }

    }




    componentDidMount() {
        window.addEventListener('scroll', () => { this.ativarAnimacao() });

    }
    render() {
        return (
            <div className='funcionamento-corpo'>

                <div className='titulo-principal'>
                    <h3 className="titulo-funcionamento">como isso funciona?</h3>
                    <p class="subtitulo-principal">PASSOS FÁCEIS PARA COMPRAR</p>
                    <Bolas />
                </div>


                <div className='container detalhes-corpo '>
                    <div className='row '>
                        <Card subtitulo="escolha o serviço" descricao="Selecione uma das opções de serviço que atendem a sua necessidade" />
                        <Card subtitulo="confirme seu pedido" descricao="Selecione os  detalhes do seu pedido e clique em comprar que o levara para o whatssap " />
                        <Card subtitulo="o booster começa agora" descricao="Sucesso! Agora você pode apenas esperar que nosso booster fara o trabalho dele. " />
                    </div>

                </div>

                <button class={`scroll-top scroll-to-target ${this.state.btn}`} onClick={() => {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                }}>
                    <i class="fas fa-angle-up" ></i>
                </button>

                <div className='bgkLeft'>
                    <svg width="336" height="704" viewBox="0 0 336 704" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M296.988 2.09839C319.826 -4.30005 340.707 17.0818 333.769 39.7616L137.173 682.447C130.508 704.236 102.942 710.933 87.0222 694.632L-363.544 233.261C-379.464 216.96 -372.115 189.56 -350.175 183.413L296.988 2.09839Z" fill="#12161B" />
                    </svg>

                </div>

                <div className='bgkRight'>
                    <svg width="304" height="928" viewBox="0 0 304 928" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1146.85 185.759C1180.34 151.958 1180.34 97.1568 1146.85 63.3562L843.68 -242.65C810.193 -276.45 755.899 -276.45 722.411 -242.65L25.1157 461.165C-8.37189 494.965 -8.37189 549.766 25.1157 583.567L722.411 1287.38C755.899 1321.18 810.193 1321.18 843.68 1287.38L1146.85 981.375C1180.34 947.577 1180.34 892.768 1146.85 858.97L873.997 583.567C840.51 549.766 840.51 494.965 873.997 461.165L1146.85 185.759Z" fill="#12161B" />
                    </svg>
                </div>
            </div>
        )
    }
}


export default Funcionamento 