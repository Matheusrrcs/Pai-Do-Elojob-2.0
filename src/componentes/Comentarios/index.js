
import React, { Component, useEffect } from 'react';
import "./comentarios.css"

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
                <div className='col-lg-2  col-md-12 col-sm-12 card-img'>
                    <img src={this.props.src} alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" width="300" height="386" className='img-fluid' />
                </div>
                <div className='col-lg-10  col-md-12 col-sm-12 contet-comentario'>
                    <div className='row  ' >
                        <div className='col-lg-5'></div>
                        <div className='col-lg-7'>
                            <h5 className='subtitulo-comentario'>{this.props.nome}</h5>
                            <p className='paragrafo  text-left'>{this.props.texto}</p></div>

                    </div>
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

        )
    }
}

class Carrosel extends Component {

    render() {
        return (<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <CardComentario src={sylas} nome="Roberto Silva" texto="O serviços é impe cavel e maravilhoso,não tenho palavras pra descrever, super indico e vou contratar novamente com certeza!!!" />
                </div>
                <div className='carousel-item'>
                    <CardComentario src={corvo} nome="Filipe Santos" texto="Perfeito irmão, obrigado, sempre cumprindo com as expectativas. Logo menos contrato mais." />
                </div>

                <div className='carousel-item'>
                    <CardComentario src={raiva} nome="Fernando Silva" texto="Nossa melhor empresa que já vi pra subir de elo vou indicar aos meus amigos bronze" />
                </div>

                <div className='carousel-item'>
                    <CardComentario src={cervo} nome="Maria Fatima" texto="Gostaria de agradecer, o rapaz que me ajudou jogou bem, ganhamos muitas e teve paciência até nas partidas mais podres kkkk." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        )
    }

}


class Comentarios extends Component {

    render() {
        return (
            <div className='comentarios-corpo '>
                <div className='container'>
                    <h3 className="titulo-comentarios">FEEDBACK DOS CLIENTES </h3>
                    <Divisao />
                </div>
                <div className="container corpo-carousel">
                    <Carrosel />
                </div>

            </div>



        )
    }
}

export default Comentarios