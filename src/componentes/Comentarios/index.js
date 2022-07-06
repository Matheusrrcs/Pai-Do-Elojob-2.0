
import React, { Component, useEffect } from 'react';
import "./comentarios.css"
import sylas from "../../assets/img/cards/comentario-sylas.png"

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
                <div className='col-lg-2 card-img'>
                    <img src={this.props.src} alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" width="300" height="386" />
                </div>
                <div className='col-lg-10  contet-comentario'>
                    <div className='row  ' >
                        <div className='col-lg-5'></div>
                        <div className='col-lg-7'>
                            <h5 className='subtitulo-comentario'>{this.props.nome}</h5>
                            <p className='paragrafo  '>{this.props.texto}</p></div>

                    </div>
                    <div className='row  linha-emojis' >
                        <div className='col-lg-5'></div>
                        <div className='col-lg-7'>

                            <div className='row  ' >
                                <div className='col-lg-5 corpo-star'>
                                    <span className='star'> <i class="fa-solid fa-star"></i></span>
                                    <span className='star'> <i class="fa-solid fa-star"></i></span>
                                    <span className='star'> <i class="fa-solid fa-star"></i></span>
                                    <span className='star'> <i class="fa-solid fa-star"></i></span>
                                    <span className='star'> <i class="fa-solid fa-star"></i></span>

                                </div>
                                <div className='col-lg-7 d-flex justify-content-end align-item-center'>
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
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <CardComentario src={sylas} nome="Roberto Silva" texto="O serviços é impe cavel e maravilhoso,não tenho palavras pra descrever, super indico e vou contratar novamente com certeza!!!" />
                </div>
                <div className='carousel-item'>
                    <CardComentario />
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
                <h3 className="titulo-comentarios">FEEDBACK DOS CLIENTES </h3>
                <Divisao />

                <div className="container corpo-carousel">
                    <Carrosel />
                </div>

            </div>



        )
    }
}

export default Comentarios