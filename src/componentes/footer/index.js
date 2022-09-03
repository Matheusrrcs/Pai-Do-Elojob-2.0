import React, { Component } from 'react';
import logo from "../../assets/img/logo/logo.png";
import payment from "../../assets/img/cards/payment-methods.webp";
import "./footer.css"


class Servicos extends Component {

    render() {

        return (
            <div className='servicos'>
                <div className="titulo">
                    <p>{this.props.titulo}</p>
                </div>
                <div className="body-item-service">
                    <ul className="item-service-list">
                        <li className="item-service">
                            <a  >
                                Eloboost
                            </a>
                        </li>
                        <li className="item-service">
                            <a  >
                                Duoboost
                            </a>
                        </li>
                        <li className="item-service">
                            <a  >
                                Md10/Md5
                            </a>
                        </li>
                        <li className="item-service">
                            <a  >
                                Coach
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }


}


class Footer extends Component {


    render() {
        return (
            <footer className='footer-body '>
                <div className="footer">
                    <div className="container cont-footer">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="body-logo pay">
                                    <img src={logo} alt="logo do site" className="logo" />
                                </div>
                                <div className="texto">
                                    <p className="paragrafo"><strong>O PAI DO ELO JOB</strong>, preza sempre por serviços rápidos e discretos, mantendo nossa transparência e responsabilidade com nossos clientes. </p>
                                </div>
                                <div className="body-payment">
                                    <img src={payment} alt="formas de pagamento" className="payment img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-7 serv">
                                <div className="row">
                                    <div className="col-lg-3"><Servicos titulo="LOL" /></div>
                                    <div className="col-lg-3"><Servicos titulo="WDR" /></div>
                                    <div className="col-lg-3"><Servicos titulo="Valorant" /></div>
                                    <div className="col-lg-3">

                                        <div className='servicos'>
                                            <div className="titulo">
                                                <p>Outros</p>
                                            </div>
                                            <div className="body-item-service">
                                                <ul className="item-service-list">
                                                    <li className="item-service">
                                                        <a  >
                                                            Contato
                                                        </a>
                                                    </li>
                                                    <li className="item-service">
                                                        <a  >
                                                            Termos
                                                        </a>
                                                    </li>
                                                    <li className="item-service">
                                                        <a  >
                                                            Juntar-se
                                                        </a>
                                                    </li>
                                                    <li className="item-service">
                                                        <a  >
                                                            Politicas
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="pt-4 last-footer">
                        <div className="container">

                            <div className="direitos">
                                <p className='paragrafo'>
                                    <span className='color'>©</span> PAI DO ELOJOB <span className='color'> 2022 todos os direitos reservador</span>
                                </p>
                            </div>
                            <div className="info">
                                <p className="paragrafo">


                                    League of Legends é uma marca registrada da Riot Games, Inc. Nós não somos de nenhuma forma afiliados, associados ou endossado pela Riot Games, Inc. Todos os direitos autoriais, marcas, imagens e marcas de serviço pertencem a seus respectivos proprietários.

                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        )
    }

}



export default Footer;

