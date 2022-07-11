import React, { Component, useEffect } from 'react'
import Braum from "../../assets/img/cards/imagem-braum.png"
import Botao from "../../componentes/Botao"
import "./contratar.css"

class Titulo extends Component {
    render() {
        return (
            <h3 className="Titulo-Contratar"><span className="traco"></span><i class="fas fa-play"></i>{this.props.titulo}</h3>
        )
    }
}

class Paragrafo extends Component {
    render() {
        return (
            <p className="Paragrafo">{this.props.paragrafo}</p>
        )
    }
}



class Card extends Component {
    render() {
        return (
            <div className="col-lg-6 pt-2">
                <div className="conteudo-icone">
                    <i className={this.props.classeIcone} id="icone-contratar"></i>
                </div>

                <h5 className='Subtitulo'>{this.props.subtitulo}</h5>
                <p className="Paragrafo"> {this.props.paragrafo}</p>

            </div>
        )
    }
}

function Contratar() {



    return (
        <div className="Section-Contratar">

            <div className="container" data-aos="fade-right">

                <div className="row" id="linha-contratar">

                    <div className="col-lg-4" id="img-btn">
                        <img className='img-braum img-fluid' src={Braum} />
                        <Botao nome="Contratar" />
                    </div>


                    <div className="col-lg-8" id="coluna-textos">
                        <Titulo titulo="PORQUE CONTRATRAR NOSSO SERVIÇO" />
                        <Paragrafo paragrafo="O PAIDOJOB tem anos de experiência e muitos serviços concluidos.Buscamos sempre oferecer aos clientes um serviço de qualidade, seguro e com um suporte impecável. " />

                        <div className="row pt-3" id="Cards">

                            <Card classeIcone="fa-solid fa-credit-card" subtitulo="PAGAMENTO SEGURO" paragrafo="Aceitamos Mercado pago e PicPya, conhecido por serem as formas de pagamentos mais seguras para os clientes!" />


                            <Card classeIcone="fa-solid fa-shield-halved" subtitulo="SEGURANÇA E PRIVACIDADE" paragrafo="Todos os nossos serviços são feitos usando VPN e modo offiline em qualquer jogo." />

                            <Card classeIcone="fa-solid fa-rocket" subtitulo="VELOCIDADE" paragrafo="Os boosters são obrigados a colocar 7 horas por pedido no dia. Para você  ter sua conta de volta rapidamente! " />


                            <Card classeIcone="fa-solid fa-headset" subtitulo="SUPORTE AO CLIENTE" paragrafo="Temos agentes treinados para ajudá-lo com qualquer dúvida/consulta. Eles estão disponíveis 24/7/365." />



                        </div>


                    </div>

                </div>
            </div>

            <div className='bgkLeft'>
                <svg width="418" height="868" viewBox="0 0 418 868" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-231.941 252.942C-251.096 234.736 -251.569 204.69 -232.996 185.832L-64.8503 15.1075C-46.2775 -3.75016 -15.6927 -4.27841 3.46285 13.9276L402.33 393.025C421.486 411.231 421.958 441.277 403.385 460.135L16.651 852.8C-1.92189 871.657 -32.5067 872.185 -51.6622 853.98L-225.083 689.157C-244.238 670.952 -244.711 640.902 -226.138 622.045L-74.807 468.394C-56.2343 449.537 -56.7066 419.491 -75.8621 401.285L-231.941 252.942Z" fill="#12161B" />
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


export default Contratar;