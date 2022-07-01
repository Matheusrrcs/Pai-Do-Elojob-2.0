
import React, { Component, useEffect } from 'react'
import line from '../../assets/img/divider/line.svg'
import Botao from "../Botao"
import Divider from '../../assets/img/divider/titleDivider.svg'
import Ashe from '../../assets/img/cards/ashe.png'
import Shen from '../../assets/img/cards/shen.png'
import Volieber from '../../assets/img/cards/volibier.png'
import "./cards.css"

class TpbIcons extends Component {

    render() {
        return (
            <div className="col-lg-3 card-tpb">
                <div className="row">
                    <div className="col-3  ">  <i className={this.props.iconClass} /></div>
                    <div className="col-9  "> <h4 className="title-tpb">{this.props.nome}</h4>
                        <p className="text-tpb">{this.props.text}</p></div>
                </div>


            </div>
        )
    }
}

class Tpb extends Component {
    render() {
        return (
            <div className='row body-tpb p-3'>
                <TpbIcons iconClass="fa-solid fa-hourglass-start " nome="4 minutos" text="Tempo medio de inicio" />
                <img src={line} />
                <TpbIcons iconClass="fa-solid fa-medal" nome="250" text="pedidos completados" />
                <img src={line} />
                <TpbIcons iconClass="fa-solid fa-user-group" nome="23" text="boosters online" />
                <Botao nome="COMPRAR" />
            </div>
        )
    }
}


class Title extends Component {
    render() {
        return (
            <div className="title-body">

                <h3 className="Titulo-Contratar">{this.props.nome}</h3>
                <img src={this.props.caminho} alt={this.props.alt} />
            </div>
        )
    }
}


class CardImg extends Component {
    render() {
        return (
            <div class="col-lg-4 col-md-6 col-sm-8 card-body">
                <div class="game-features-item mb-30">
                    <div class="game-features-thumb">
                        <img src={this.props.caminho} alt={this.props.alt} />
                    </div>
                    <div class="game-features-content">
                        <div class="game-features-tag">
                            <Botao nome="Comprar" />
                        </div>
                        <h3> {this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>

        )
    }

}

function Cards() {


    return (

        <div className="cards"  >

            <div  >
                <div className="container pt-5 " >
                    <div className="row  linha-cards">
                        <div className='col-lg-12 col-md-6 col-sm-8 body-cards'>

                            <Tpb />
                        </div>

                    </div>


                    <Title nome="SERVIÇOS DISPONIVEIS" caminho={Divider} alt="Imagem da divisão do texto" />


                </div>
            </div>

            <div className='container '  data-aos="fade-up">
                <div class="row justify-content-center">
                    <CardImg caminho={Ashe} alt="imagem da Ashe" title="ELOBOOST" text="LEAGUE OF LEGENDS" />
                    <CardImg caminho={Shen} alt="imagem do Shen" title="DUOBOOST" text="LEAGUE OF LEGENDS" />
                    <CardImg caminho={Volieber} alt="imagem do Volieber" title="MD10" text="LEAGUE OF LEGENDS" />
                </div>
            </div>

        </div>
    )
}



export default Cards