
import React, { Component, useEffect } from 'react';
import "./comentarios.css"
import { Carousel } from '3d-react-carousal';
import sylas from "../../assets/img/cards/comentario-sylas.png"
import corvo from "../../assets/img/cards/comentario-corvo.png"
import raiva from "../../assets/img/cards/comentario-raiva.png"
import cervo from "../../assets/img/cards/comentario-cervo.png"

class Divisao extends Component {
    render() {
        return (
            <div className="row divisao">
                <span className='bola-divisao'></span>
                <span className='bola-divisao'></span>
                <span className='bola-divisao'></span>
                <span className='linha'></span>
            </div>

        )
    }

}

class CardComentario extends Component {
    render() {
        return (
            <div className='row comentario-body'>
                <div className='col-lg-5  col-md-12 col-sm-12 card-img'>
                    <img src={this.props.src} alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" width="300" height="386" className='img-fluid' />
                </div>
                <div className='col-lg-7  col-md-12 col-sm-12 contet-comentario'>
                    <div className='row  corpo-card-comentario ' >
                        <div className='col-lg-5'></div>
                        <div className='col-lg-7'>
                            <h5 className='subtitulo-comentario'>{this.props.nome}</h5>
                            <p className='paragrafo  text-left'>{this.props.texto}</p></div>
                        <div className='row  linha-emojis' >
                            <div className='col-lg-5'></div>
                            <div className='col-lg-7'>

                                <div className='row  corpo-bottom' >
                                    <div className='col-lg-4 corpo-star'>
                                        <span className='star'> <i class="fa-solid fa-star"></i></span>
                                        <span className='star'> <i class="fa-solid fa-star"></i></span>
                                        <span className='star'> <i class="fa-solid fa-star"></i></span>
                                        <span className='star'> <i class="fa-solid fa-star"></i></span>
                                        <span className='star'> <i class="fa-solid fa-star"></i></span>

                                    </div>
                                    <div className='col-lg-8 d-flex justify-content-end align-item-center corpo-emoji'>
                                        <span className='emoji-star'><i class="fa-solid fa-face-grin-stars"></i></span>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


class Comentarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                <CardComentario src={sylas} nome="Roberto Silva" texto="O serviços é impe cavel e maravilhoso,não tenho palavras pra descrever, super indico e vou contratar novamente com certeza!!!" />,
                <CardComentario src={corvo} nome="Filipe Santos" texto="Perfeito irmão, obrigado, sempre cumprindo com as expectativas. Logo menos contrato mais." />,
                <CardComentario src={raiva} nome="Fernando Silva" texto="Nossa melhor empresa que já vi pra subir de elo vou indicar aos meus amigos bronze" />,
                <CardComentario src={cervo} nome="Maria Fatima" texto="Gostaria de agradecer, o rapaz que me ajudou jogou bem, ganhamos muitas e teve paciência até nas partidas mais podres kkkk." />

            ]
        }


    }



    render() {
        return (
            <div className='comentarios-corpo '>
                <div className='container'>
                    <h3 className="titulo-comentarios">FEEDBACK DOS CLIENTES </h3>
                    <Divisao />
                </div>
                <div className="container corpo-carousel">

                    <Carousel slides={this.state.slides} />

                </div>




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

            </div >



        )
    }
}

export default Comentarios