import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { trataNomeJogo, trataJogo, mudaEscolhido, verificaElos, addLoad } from "../../js/calculadora.js"
import './calculadora.css'
import Footer from '../footer/'
import Botao from '../Botao'
import $ from 'jquery';

import carregamento from '../../assets/img/carregamento/carregamento.svg'

import ferro from '../../assets/img/elos/ferro.webp';
import bronze from '../../assets/img/elos/bronze.webp';
import prata from '../../assets/img/elos/prata.webp';
import ouro from '../../assets/img/elos/ouro.webp';
import platina from '../../assets/img/elos/platina.webp';
import diamante from '../../assets/img/elos/diamante.webp';
import mestre from '../../assets/img/elos/mestre.webp';
import graomestre from '../../assets/img/elos/graomestre.webp';
import desafiante from '../../assets/img/elos/desafiante.webp';

import ferroWd from '../../assets/img/elos/wildRift/ferro.webp';
import bronzeWd from '../../assets/img/elos/wildRift/bronze.webp';
import prataWd from '../../assets/img/elos/wildRift/prata.webp';
import ouroWd from '../../assets/img/elos/wildRift/ouro.webp';
import platinaWd from '../../assets/img/elos/wildRift/platina.webp';
import diamanteWd from '../../assets/img/elos/wildRift/diamante.webp';
import mestreWd from '../../assets/img/elos/wildRift/mestre.webp';
import graomestreWd from '../../assets/img/elos/wildRift/graomestre.webp';
import desafianteWd from '../../assets/img/elos/wildRift/desafiante.webp';
import esmeraldaWd from '../../assets/img/elos/wildRift/esmeralda.webp';

export default function Calculadora() {
    const { jogo, tipoJogo } = useParams();
    const navigate = useNavigate();

    const [laneP, setLaneP] = useState("mid");
    const [laneS, setLaneS] = useState("bot");

    const [eloAtual, setEloAtual] = useState('prata');
    const [eloDesejado, setEloDesejado] = useState('prata');

    const [eloAtualDuo, setEloAtualDuo] = useState('prata');
    const [eloDesejadoDuo, setEloDesejadoDuo] = useState('prata');

    const [eloAtualWd, setEloAtualWd] = useState('prata');
    const [eloDesejadoWd, setEloDesejadoWd] = useState('prata');

    const [eloAtualWdDuo, setEloAtualWdDuo] = useState('prata');
    const [eloDesejadoWdDuo, setEloDesejadoWdDuo] = useState('prata');


    const [divisaoDesejado, setDivisaoDesejado] = useState('III');
    const [divisaoaAtual, setDivisaoAtual] = useState('IV');

    const [divisaoDesejadoWd, setDivisaoDesejadoWd] = useState('III');
    const [divisaoaAtualWd, setDivisaoAtualWd] = useState('IV');

    const [divisaoDesejadoDuo, setDivisaoDesejadoDuo] = useState('III');
    const [divisaoaAtualDuo, setDivisaoAtualDuo] = useState('IV');

    const [divisaoDesejadoWdDuo, setDivisaoDesejadoWdDuo] = useState('III');
    const [divisaoaAtualWdDuo, setDivisaoAtualWdDuo] = useState('IV');

    const [divisao, setDivisao] = useState(['IV', 'III', 'II', 'I']);

    const [elo, setElo] = useState([{ caminho: ferro, nome: "ferro" }, { caminho: bronze, nome: 'bronze' }, { caminho: prata, nome: 'prata' }, { caminho: ouro, nome: 'ouro' }, { caminho: platina, nome: 'platina' }, { caminho: diamante, nome: 'diamante' }, { caminho: mestre, nome: 'mestre' }, { caminho: graomestre, nome: 'graomestre' }, { caminho: desafiante, nome: 'desafiante' }]);

    const [eloDuo, setEloDuo] = useState([{ caminho: ferro, nome: "ferro" }, { caminho: bronze, nome: 'bronze' }, { caminho: prata, nome: 'prata' }, { caminho: ouro, nome: 'ouro' }, { caminho: platina, nome: 'platina' }, { caminho: diamante, nome: 'diamante' }, { caminho: mestre, nome: 'mestre' }]);

    const [eloWd, setEloWd] = useState([{ caminho: ferroWd, nome: "ferro" }, { caminho: bronzeWd, nome: 'bronze' }, { caminho: prataWd, nome: 'prata' }, { caminho: ouroWd, nome: 'ouro' }, { caminho: platinaWd, nome: 'platina' }, { caminho: esmeraldaWd, nome: 'esmeralda' }, { caminho: diamanteWd, nome: 'diamante' }, { caminho: mestreWd, nome: 'mestre' }, { caminho: graomestreWd, nome: 'graomestre' }, { caminho: desafianteWd, nome: 'desafiante' }]);

    const [eloWdDuo, setEloWdDuo] = useState([{ caminho: ferroWd, nome: "ferro" }, { caminho: bronzeWd, nome: 'bronze' }, { caminho: prataWd, nome: 'prata' }, { caminho: ouroWd, nome: 'ouro' }, { caminho: platinaWd, nome: 'platina' }, { caminho: esmeraldaWd, nome: 'esmeralda' }, { caminho: diamanteWd, nome: 'diamante' }, { caminho: mestreWd, nome: 'mestre' }]);

    const [finishedTimeout, setFinishedTimeout] = useState('d-none');

    useEffect(() => {

        verificaElos(eloAtual, eloDesejado, divisaoaAtual, divisaoDesejado, jogo);
        mudaEscolhido("escolha-elo-body-atual");
        setFinishedTimeout("");

        setTimeout(() => { 
            setFinishedTimeout('d-none');
        }, 500);

    }, [divisaoaAtual, divisaoDesejado, eloDesejado, eloAtual]);

 

    return (
        <div className="calculadora">

            <div className="container calculadora-body" >

                {/* titulo com nome do jogo */}
                <div className="title">
                    <h5 className="titulo-calculadora"> {trataNomeJogo(jogo)} </h5>
                    <h6 className="titulo-calculadora">{trataJogo(tipoJogo, jogo)}</h6>
                </div>

                {/* subtitulo com nome do tipo de escolha de serviço */}
                <div className="paragrafo">
                    <p>Serviço {trataNomeJogo(jogo)} premium pronto para começar agora com um preço acessível.</p>
                </div>

                {/* trocar de jogo */}
                <div className="row">

                    <div className="col-lg-4">
                        {
                            jogo == "leagueoflegends" ?
                                <div className="body-jogo active lol" id="bodyLol" onClick={() => navigate(`/leagueoflegends/${tipoJogo === 'md5' ? 'md10' : tipoJogo} `)}>
                                    <h5 className="subtitulo">Lol {trataJogo(tipoJogo, jogo) === 'Md5' ? 'Md10' : trataJogo(tipoJogo, jogo)}</h5>
                                </div>
                                :
                                <div className="body-jogo lol" id="bodyLol" onClick={() => navigate(`/leagueoflegends/${tipoJogo === 'md5' ? 'md10' : tipoJogo} `)}>
                                    <h5 className="subtitulo">Lol {trataJogo(tipoJogo, jogo) === 'Md5' ? 'Md10' : trataJogo(tipoJogo, jogo)}</h5>
                                </div>
                        }

                    </div>
                    <div className="col-lg-4">
                        {
                            jogo == "wildrift" ?
                                <div className="body-jogo active wd" id="bodyWd" onClick={() => navigate(`/wildrift/${tipoJogo === 'md5' ? 'md10' : tipoJogo}`)}>
                                    <h5 className="subtitulo">Wild Rift {trataJogo(tipoJogo, jogo) === 'Md5' ? 'Md10' : trataJogo(tipoJogo, jogo)
                                    }
                                    </h5>
                                </div>
                                :
                                <div className="body-jogo wd" id="bodyWd" onClick={() => navigate(`/wildrift/${tipoJogo === 'md5' ? 'md10' : tipoJogo}`)}>
                                    <h5 className="subtitulo">Wild Rift {trataJogo(tipoJogo, jogo) === 'Md5' ? 'Md10' : trataJogo(tipoJogo, jogo)
                                    }
                                    </h5>
                                </div>
                        }

                    </div>
                    <div className="col-lg-4">
                        {
                            jogo == 'valorant' ?
                                <div className="body-jogo active vava" id="bodyVava" onClick={() => navigate(`/valorant/${tipoJogo === 'md10' ? 'md5' : tipoJogo}`)}>
                                    <h5 className="subtitulo">Valorant {

                                        trataJogo(tipoJogo, jogo) === 'Md10' ? 'Md5' : trataJogo(tipoJogo, jogo)

                                    }</h5>
                                </div>
                                :
                                <div className="body-jogo vava" id="bodyVava" onClick={() => navigate(`/valorant/${tipoJogo === 'md10' ? 'md5' : tipoJogo}`)}>
                                    <h5 className="subtitulo">Valorant {

                                        trataJogo(tipoJogo, jogo) === 'Md10' ? 'Md5' : trataJogo(tipoJogo, jogo)

                                    }</h5>
                                </div>
                        }

                    </div>
                </div>


                <div className="container">

                    {/* escolha do pedido */}
                    <di className="row body-flags">

                        {/* elo atual */}
                        <div className="col-lg-8">
                            <div className="etap">
                                <div class="icone-etap"><i class="fa-solid fa-cart-shopping"></i></div>
                                <h5>Selecione os detalhes do seu pedido</h5>
                            </div>
                            <div className="row body-flags-linha">

                                <div className="col-lg-6">
                                    <div className="title-etap paragrafo"><p>Elo Atual</p></div>

                                    <div className="flag">
                                        <svg _ngcontent-serverApp-c27="" viewBox="0 0 300 408" class="flag flag-silver flag-current"><defs _ngcontent-serverApp-c27=""><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-flag-pole-gradient"><stop _ngcontent-serverApp-c27="" offset="0%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="33%" stop-color="#333333"></stop><stop _ngcontent-serverApp-c27="" offset="50%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="73%" stop-color="#8F8F8F"></stop><stop _ngcontent-serverApp-c27="" offset="100%" stop-color="#000000"></stop></linearGradient><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-base-gradient"><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-start" offset="0%"></stop><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-stop" offset="100%"></stop></linearGradient><clipPath _ngcontent-serverApp-c27="" id="current-baseShape"><path _ngcontent-serverApp-c27="" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z"></path></clipPath></defs><rect _ngcontent-serverApp-c27="" class="flag__pole" height="10" rx="5" width="300" x="0" y="4" style={{ fill: "url(#current-flag-pole-gradient)" }}></rect><path _ngcontent-serverApp-c27="" class="flag__base" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z" style={{ fill: "#222f38" }}></path><path _ngcontent-serverApp-c27="" class="flag__decor--outer" style={{ fill: "#6c91aa" }} d="M280.472,293.517c-0.216,0.046 -0.432,0.094 -0.648,0.143c-17.081,4.032 -28.667,24.458 -21.178,41.931l-109.174,61.948l-108.621,-61.635c4.271,-9.589 3.133,-21.201 -2.755,-29.75c-4.507,-6.545 -11.586,-11.211 -19.457,-12.745l-0.167,-0.032l0,-530.838l262,0l0,530.978Zm-259,-527.978l0,525.442c17.873,4.736 29.545,25.12 23.15,43.56c0,0 104.85,59.549 104.85,59.549l105.449,-59.835c-0.068,-0.2 -0.133,-0.401 -0.197,-0.602c-5.283,-16.84 4.813,-37.203 22.665,-42.455l0.083,-0.024l0,-525.635l-256,0Z"></path><path _ngcontent-serverApp-c27="" style={{ fill: "#6c91aa" }} class="flag__decor--inner" d="M274.472,319.428l-125,70.611l-125,-70.611l0,-549.389l250,0l0,549.389Zm-249,-548.389l0,547.805l124,70.047l124,-70.047l0,-547.805l-248,0Z"></path>

                                            <g _ngcontent-serverApp-c27="" clip-path="url(#current-baseShape)"><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade-2.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade-3.png"></image></g>
                                        </svg>
                                        <div className="body-pedido">
                                            <div className="img-elo">
                                                {
                                                    jogo == 'leagueoflegends' && tipoJogo == 'eloboost' ?

                                                        <img src={require(`../../assets/img/elos/${eloAtual}.webp`)} alt="imagem do elo" />
                                                        :
                                                        jogo == 'leagueoflegends' && tipoJogo == 'duoboost' ?
                                                            <img src={require(`../../assets/img/elos/${eloAtualDuo}.webp`)} alt="imagem do elo" />
                                                            :
                                                            jogo == 'wildrift' && tipoJogo == 'eloboost' ?
                                                                <img src={require(`../../assets/img/elos/wildRift/${eloAtualWd}.webp`)} alt="imagem do elo" />
                                                                :
                                                                jogo == 'wildrift' && tipoJogo == 'duoboost' ?
                                                                    <img src={require(`../../assets/img/elos/wildRift/${eloAtualWdDuo}.webp`)} alt="imagem do elo" />
                                                                    :
                                                                    <img src={require(`../../assets/img/elos/${eloAtual}.webp`)} alt="imagem do elo" />
                                                }
                                            </div>


                                            <a data-toggle="modal" className='btn-elo' data-target="#modalEloAtual">
                                                {

                                                    jogo == 'leagueoflegends' && tipoJogo == 'eloboost' ?
                                                        <div className="body-title-btn-elo">

                                                            <span className="titulo-btn-elo">
                                                                <h4>{eloAtual === "graomestre" ? 'Grão Mestre' : eloAtual}</h4>
                                                            </span>
                                                            <span className="titulo-btn-elo">
                                                                <h5>{eloAtual === "graomestre" || eloAtual === "mestre" || eloAtual === 'desafiante' ? '' : `DIVISÃO ${divisaoaAtual}`}</h5>
                                                            </span>
                                                            <div className="icon-btn-elo">
                                                                <i class="fa-solid fa-pen"></i>
                                                            </div>

                                                        </div>
                                                        :
                                                        jogo == 'leagueoflegends' && tipoJogo == 'duoboost' ?
                                                            <div className="body-title-btn-elo">

                                                                <span className="titulo-btn-elo">
                                                                    <h4>{eloAtualDuo === "graomestre" ? 'Grão Mestre' : eloAtualDuo}</h4>
                                                                </span>
                                                                <span className="titulo-btn-elo">
                                                                    <h5>{eloAtualDuo === "graomestre" || eloAtualDuo === "mestre" || eloAtualDuo === 'desafiante' ? '' : `DIVISÃO ${divisaoaAtualDuo}`}</h5>
                                                                </span>
                                                                <div className="icon-btn-elo">
                                                                    <i class="fa-solid fa-pen"></i>
                                                                </div>

                                                            </div>
                                                            :
                                                            jogo == 'wildrift' && tipoJogo == 'eloboost' ?
                                                                <div className="body-title-btn-elo">

                                                                    <span className="titulo-btn-elo">
                                                                        <h4>{eloAtualWd === "graomestre" ? 'Grão Mestre' : eloAtualWd}</h4>
                                                                    </span>
                                                                    <span className="titulo-btn-elo">
                                                                        <h5>{eloAtualWd === "graomestre" || eloAtualWd === "mestre" || eloAtualWd === 'desafiante' ? '' : `DIVISÃO ${divisaoaAtualWd}`}</h5>
                                                                    </span>
                                                                    <div className="icon-btn-elo">
                                                                        <i class="fa-solid fa-pen"></i>
                                                                    </div>

                                                                </div>
                                                                :
                                                                jogo == 'wildrift' && tipoJogo == 'duoboost' ?
                                                                    <div className="body-title-btn-elo">

                                                                        <span className="titulo-btn-elo">
                                                                            <h4>{eloAtualWdDuo === "graomestre" ? 'Grão Mestre' : eloAtualWdDuo}</h4>
                                                                        </span>
                                                                        <span className="titulo-btn-elo">
                                                                            <h5>{eloAtualWdDuo === "graomestre" || eloAtualWdDuo === "mestre" || eloAtualWdDuo === 'desafiante' ? '' : `DIVISÃO ${divisaoaAtualWdDuo}`}</h5>
                                                                        </span>
                                                                        <div className="icon-btn-elo">
                                                                            <i class="fa-solid fa-pen"></i>
                                                                        </div>

                                                                    </div>
                                                                    :
                                                                    <div className="body-title-btn-elo">

                                                                        <span className="titulo-btn-elo">
                                                                            <h4>{eloAtual === "graomestre" ? 'Grão Mestre' : eloAtual}</h4>
                                                                        </span>
                                                                        <span className="titulo-btn-elo">
                                                                            <h5>{eloAtual === "graomestre" || eloAtual === "mestre" || eloAtual === 'desafiante' ? '' : `DIVISÃO ${divisaoaAtual}`}</h5>
                                                                        </span>
                                                                        <div className="icon-btn-elo">
                                                                            <i class="fa-solid fa-pen"></i>
                                                                        </div>

                                                                    </div>
                                                }
                                            </a>




                                        </div>
                                    </div>

                                </div>

                                {/* elo desejado  */}
                                <div className="col-lg-6">
                                    <div className="title-etap paragrafo"><p>Elo Desejado</p></div>
                                    <div className="flag">

                                        <svg _ngcontent-serverApp-c27="" viewBox="0 0 300 408" class="flag flag-silver flag-current"><defs _ngcontent-serverApp-c27=""><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-flag-pole-gradient"><stop _ngcontent-serverApp-c27="" offset="0%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="33%" stop-color="#333333"></stop><stop _ngcontent-serverApp-c27="" offset="50%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="73%" stop-color="#8F8F8F"></stop><stop _ngcontent-serverApp-c27="" offset="100%" stop-color="#000000"></stop></linearGradient><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-base-gradient"><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-start" offset="0%"></stop><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-stop" offset="100%"></stop></linearGradient><clipPath _ngcontent-serverApp-c27="" id="current-baseShape"><path _ngcontent-serverApp-c27="" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z"></path></clipPath></defs><rect _ngcontent-serverApp-c27="" class="flag__pole" height="10" rx="5" width="300" x="0" y="4" style={{ fill: "url(#current-flag-pole-gradient)" }}></rect><path _ngcontent-serverApp-c27="" class="flag__base" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z" style={{ fill: "#222f38" }}></path><path _ngcontent-serverApp-c27="" class="flag__decor--outer" style={{ fill: "#6c91aa" }} d="M280.472,293.517c-0.216,0.046 -0.432,0.094 -0.648,0.143c-17.081,4.032 -28.667,24.458 -21.178,41.931l-109.174,61.948l-108.621,-61.635c4.271,-9.589 3.133,-21.201 -2.755,-29.75c-4.507,-6.545 -11.586,-11.211 -19.457,-12.745l-0.167,-0.032l0,-530.838l262,0l0,530.978Zm-259,-527.978l0,525.442c17.873,4.736 29.545,25.12 23.15,43.56c0,0 104.85,59.549 104.85,59.549l105.449,-59.835c-0.068,-0.2 -0.133,-0.401 -0.197,-0.602c-5.283,-16.84 4.813,-37.203 22.665,-42.455l0.083,-0.024l0,-525.635l-256,0Z"></path><path _ngcontent-serverApp-c27="" style={{ fill: "#6c91aa" }} class="flag__decor--inner" d="M274.472,319.428l-125,70.611l-125,-70.611l0,-549.389l250,0l0,549.389Zm-249,-548.389l0,547.805l124,70.047l124,-70.047l0,-547.805l-248,0Z"></path>

                                            <g _ngcontent-serverApp-c27="" clip-path="url(#current-baseShape)"><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade-2.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade-3.png"></image></g>
                                        </svg>

                                        <div className="body-pedido">
                                            <div className="img-elo">
                                                {

                                                    jogo == 'leagueoflegends' && tipoJogo == 'eloboost' ?
                                                        <img src={require(`../../assets/img/elos/${eloDesejado}.webp`)} alt="imagem do elo" />
                                                        :

                                                        jogo == 'leagueoflegends' && tipoJogo == 'duoboost' ?
                                                            <img src={require(`../../assets/img/elos/${eloDesejadoDuo}.webp`)} alt="imagem do elo" />
                                                            :
                                                            jogo == 'wildrift' && tipoJogo == 'eloboost' ?
                                                                <img src={require(`../../assets/img/elos/wildRift/${eloDesejadoWd}.webp`)} alt="imagem do elo" />
                                                                :
                                                                jogo == 'wildrift' && tipoJogo == 'duoboost' ?
                                                                    <img src={require(`../../assets/img/elos/wildRift/${eloDesejadoWdDuo}.webp`)} alt="imagem do elo" />
                                                                    :
                                                                    <img src={require(`../../assets/img/elos/${eloDesejado}.webp`)} alt="imagem do elo" />
                                                }
                                            </div>


                                            <a data-toggle="modal" className='btn-elo' data-target="#modalEloDesejado">
                                                {

                                                    jogo == 'leagueoflegends' && tipoJogo == 'eloboost' ?
                                                        <div className="body-title-btn-elo">

                                                            <span className="titulo-btn-elo">
                                                                <h4>{eloDesejado === "graomestre" ? 'Grão Mestre' : eloDesejado}</h4>
                                                            </span>
                                                            <span className="titulo-btn-elo">
                                                                <h5>{eloDesejado === "graomestre" || eloDesejado === "mestre" || eloDesejado === 'desafiante' ? '' : `DIVISÃO ${divisaoDesejado}`}</h5>
                                                            </span>
                                                            <div className="icon-btn-elo">
                                                                <i class="fa-solid fa-pen"></i>
                                                            </div>

                                                        </div>
                                                        :
                                                        jogo == 'leagueoflegends' && tipoJogo == 'duoboost' ?
                                                            <div className="body-title-btn-elo">

                                                                <span className="titulo-btn-elo">
                                                                    <h4>{eloDesejadoDuo === "graomestre" ? 'Grão Mestre' : eloDesejadoDuo}</h4>
                                                                </span>
                                                                <span className="titulo-btn-elo">
                                                                    <h5>{eloDesejadoDuo === "graomestre" || eloDesejadoDuo === "mestre" || eloDesejadoDuo === 'desafiante' ? '' : `DIVISÃO ${divisaoDesejadoDuo}`}</h5>
                                                                </span>
                                                                <div className="icon-btn-elo">
                                                                    <i class="fa-solid fa-pen"></i>
                                                                </div>

                                                            </div>
                                                            :
                                                            jogo == 'wildrift' && tipoJogo == 'eloboost' ?
                                                                <div className="body-title-btn-elo">

                                                                    <span className="titulo-btn-elo">
                                                                        <h4>{eloDesejadoWd === "graomestre" ? 'Grão Mestre' : eloDesejadoWd}</h4>
                                                                    </span>
                                                                    <span className="titulo-btn-elo">
                                                                        <h5>{eloDesejadoWd === "graomestre" || eloDesejadoWd === "mestre" || eloDesejadoWd === 'desafiante' ? '' : `DIVISÃO ${divisaoDesejadoWd}`}</h5>
                                                                    </span>
                                                                    <div className="icon-btn-elo">
                                                                        <i class="fa-solid fa-pen"></i>
                                                                    </div>


                                                                </div>
                                                                :
                                                                jogo == 'wildrift' && tipoJogo == 'eloboost' ?
                                                                    <div className="body-title-btn-elo">

                                                                        <span className="titulo-btn-elo">
                                                                            <h4>{eloDesejadoWdDuo === "graomestre" ? 'Grão Mestre' : eloDesejadoWdDuo}</h4>
                                                                        </span>
                                                                        <span className="titulo-btn-elo">
                                                                            <h5>{eloDesejadoWdDuo === "graomestre" || eloDesejadoWdDuo === "mestre" || eloDesejadoWdDuo === 'desafiante' ? '' : `DIVISÃO ${divisaoDesejadoWdDuo}`}</h5>
                                                                        </span>
                                                                        <div className="icon-btn-elo">
                                                                            <i class="fa-solid fa-pen"></i>
                                                                        </div>


                                                                    </div>
                                                                    :
                                                                    <div className="body-title-btn-elo">

                                                                        <span className="titulo-btn-elo">
                                                                            <h4>{eloAtual === "graomestre" ? 'Grão Mestre' : eloAtual}</h4>
                                                                        </span>
                                                                        <span className="titulo-btn-elo">
                                                                            <h5>{eloAtual === "graomestre" || eloAtual === "mestre" || eloAtual === 'desafiante' ? '' : `DIVISÃO ${divisaoaAtual}`}</h5>
                                                                        </span>
                                                                        <div className="icon-btn-elo">
                                                                            <i class="fa-solid fa-pen"></i>
                                                                        </div>

                                                                    </div>
                                                }

                                            </a>




                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* costumização de pedidos */}
                            <div className="body-costume">
                                <div className="etap">
                                    <div class="icone-etap"><i class="fa-solid fa-pen"></i></div>
                                    <h5>Customize seu pedido gratuitamente</h5>
                                </div>
                                <div className="row body-customize">


                                    <div className="col-lg-4">
                                        <div className="costumize">
                                            <div className="img-lane">
                                                <img src={require(`../../assets/img/lanes/${laneP}.png`)} alt="imagem da lane" />
                                            </div>
                                            <div className="costumize-title paragrafo">
                                                <p>Primeira posicão</p>
                                            </div>
                                            <div className="costuime-select">
                                                <select name="lane" class="custom-select" onChange={(e) => {
                                                    setLaneP(e.target.value);
                                                }}>
                                                    <option value="top">TOP</option>
                                                    <option value="bot">BOT</option>
                                                    <option value="mid" selected="selected">MID</option>
                                                    <option value="jungle">JUNGLE</option>
                                                    <option value="suporte">SUPORTE</option>
                                                    <option value="preencher">PREENCHER</option>
                                                </select>
                                            </div>
                                        </div >

                                    </div>

                                    <div className="col-lg-4">
                                        <div className="costumize">
                                            <div className="img-lane">
                                                <img src={require(`../../assets/img/lanes/${laneS}.png`)} alt="imagem da lane" />
                                            </div>
                                            <div className="costumize-title paragrafo">
                                                <p>Segunda posicão</p>
                                            </div>
                                            <div className="costuime-select">
                                                <select name="lane" class="custom-select" onChange={(e) => {
                                                    setLaneS(e.target.value);
                                                }}>
                                                    <option value="top">TOP</option>
                                                    <option value="bot" selected="selected">BOT</option>
                                                    <option value="mid">MID</option>
                                                    <option value="jungle">JUNGLE</option>
                                                    <option value="suporte">SUPORTE</option>
                                                    <option value="preencher">PREENCHER</option>
                                                </select>
                                            </div>
                                        </div >
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* preço final e detalhes do pedido */}
                        <div className="col-lg-4 body_pedidos">

                            <div className="detalhes_pedido ">

                                <div className="cabecalho">
                                    <h4>Detalhes do pedido </h4>
                                    <small>Aumento para a Divisão {eloDesejado}</small>
                                </div>
                                <div className="body-pedido-principal">

                                    <div className="body-pedido-cabecalho">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <p><b>Divisões solo</b></p>
                                                {
                                                    jogo == 'leagueoflegends' ?

                                                        <p>{eloAtual} - {eloDesejado}</p>
                                                        :
                                                        jogo == 'wildrift' ?
                                                            <p>{eloAtualWd} - {eloDesejadoWd}</p>
                                                            :
                                                            <p>{eloAtual} - {eloDesejado}</p>
                                                }
                                            </div>
                                            <div className="col-xs-6">
                                                <p id="valor-pedido-desconto">R$ 1,859,53</p>
                                                <p id="valor-pedido">R$ 500,00</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>

                                    <div className="body-pedido-principal">
                                        <p className='pl-3'><b>Adicionais do pedido</b></p>
                                        <div className="row">

                                            <div className="detalhes">
                                                <p>Stream dos jogos</p>
                                                <p className='gratis'>gratuito</p>
                                            </div>

                                            <div className="detalhes">
                                                <p>Chat offline</p>
                                                <p className='gratis'>gratuito</p>
                                            </div>

                                            <div className="detalhes">
                                                <p> Definição de horários <span className='blue-text'>+10%</span></p>

                                                <label class="switch float-right">
                                                    <input class="isExpress" type="checkbox" value="10" id="definicao-horarios" />
                                                    <span class="slider"></span></label>
                                            </div>

                                            <div className="detalhes">
                                                <p>Entrega rápida <span className='blue-text'>+30%</span></p>

                                                <label class="switch float-right">
                                                    <input class="isExpress" type="checkbox" value="30" id="entraga-rapida" />
                                                    <span class="slider"></span></label>
                                            </div>


                                            <div className="detalhes">
                                                <p>Ganho 13 pdl ou menos <span className='blue-text'>+20%</span></p>

                                                <label class="switch float-right">
                                                    <input class="isExpress" type="checkbox" value="20" id="pdl" />
                                                    <span class="slider"></span></label>
                                            </div>

                                            <div className="detalhes">
                                                <p>Uma vitoria extra <span className='blue-text'>+15%</span></p>

                                                <label class="switch float-right">
                                                    <input class="isExpress" type="checkbox" value="15" id="vitoria-extra" />
                                                    <span class="slider"></span></label>
                                            </div>

                                            <div className="detalhes">
                                                <p>Serviço mono Champion <span className='blue-text'>+20%</span></p>

                                                <label class="switch float-right">
                                                    <input class="isExpress" type="checkbox" value="20" id="mono-champion" />
                                                    <span class="slider"></span></label>
                                            </div>



                                        </div>
                                        <hr />
                                    </div>

                                    <div className="total-preco">
                                        <p className='pl-3'><b>Preço total</b></p>
                                        <h3 className='pl-3'>R$ 800,00</h3>
                                        <hr />
                                    </div>

                                    <div className="comprar text-center pb-3">
                                        <Botao nome='Comprar' />
                                    </div>

                                </div>

                                <div className="erro-detalhes-pedido">
                                    <div className="mensagem-erro-detalhes-pedido">
                                        <i class="fa-solid fa-ban"></i>
                                        <p>Erro o elo atual deve ser maior que o elo desejado</p>
                                    </div>
                                </div>

                                <div className={`carregamento-detalhes-pedido ${finishedTimeout}`}>
                                    <img src={carregamento} alt="" />
                                </div>

                            </div>

                        </div>

                    </di>


                </div>

            </div>

            {/* formas de background */}
            <div className='bgkLeft'>
                <svg width="336" height="704" viewBox="0 0 336 704" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M296.988 2.09839C319.826 -4.30005 340.707 17.0818 333.769 39.7616L137.173 682.447C130.508 704.236 102.942 710.933 87.0222 694.632L-363.544 233.261C-379.464 216.96 -372.115 189.56 -350.175 183.413L296.988 2.09839Z" fill="#12161B" />
                </svg>

            </div>

            {/* forma de background */}
            <div className='bgkRight'>
                <svg width="304" height="928" viewBox="0 0 304 928" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1146.85 185.759C1180.34 151.958 1180.34 97.1568 1146.85 63.3562L843.68 -242.65C810.193 -276.45 755.899 -276.45 722.411 -242.65L25.1157 461.165C-8.37189 494.965 -8.37189 549.766 25.1157 583.567L722.411 1287.38C755.899 1321.18 810.193 1321.18 843.68 1287.38L1146.85 981.375C1180.34 947.577 1180.34 892.768 1146.85 858.97L873.997 583.567C840.51 549.766 840.51 494.965 873.997 461.165L1146.85 185.759Z" fill="#12161B" />
                </svg>
            </div>

            <Footer />
            {/* modal para elo atual */}
            <div class="modal fade" id="modalEloAtual" tabindex="-1" role="dialog" aria-labelledby="modalEloAtualTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Selecione a classificação</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">


                            <div className="body-escolhaClas">

                                <div className="container">

                                    <div className="row">


                                        <div className="elos">
                                            <div className="etap">
                                                <div class="icone-etap">1</div>
                                                <h5>Elo Atual</h5>
                                            </div>


                                            <div className="pl-5">
                                                {
                                                    jogo == "leagueoflegends" ?

                                                        tipoJogo == 'eloboost' ?
                                                            elo.map((elos) => {
                                                                return (

                                                                    <label className=" escolha-elo-body-atual" for={"atual-" + elos.nome}  >

                                                                        <div className={`escolhe-elo-${elos.nome}`} >


                                                                            <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                            {
                                                                                elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                    <input class=" isExpres  " type="radio" value={elos.nome} name='elolol' data-dismiss="modal"
                                                                                        id={'atual-' + elos.nome} onClick={(event) => { setEloAtual(event.target.value) }} />
                                                                                    :
                                                                                    <input class=" isExpres  " type="radio" value={elos.nome} name="divisaolol"
                                                                                        id={"atual-" + elos.nome} onClick={(event) => { setEloAtual(event.target.value); }} />
                                                                            }


                                                                        </div>

                                                                    </label>


                                                                )
                                                            })
                                                            :
                                                            tipoJogo == 'duoboost' ?
                                                                eloDuo.map((elos) => {
                                                                    return (

                                                                        <label className=" escolha-elo-body-atual" for={"atual-" + elos.nome} onClick={() => {
                                                                            mudaEscolhido("escolha-elo-body-atual");
                                                                        }}>

                                                                            <div className={`escolhe-elo-${elos.nome}`} >


                                                                                <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                                {
                                                                                    elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                        <input class=" isExpres  " type="checkbox" value={elos.nome} data-dismiss="modal"
                                                                                            id={'atual-' + elos.nome} onClick={(event) => { setEloAtualDuo(event.target.value) }} />
                                                                                        :
                                                                                        <input class=" isExpres  " type="checkbox" value={elos.nome}
                                                                                            id={"atual-" + elos.nome} onClick={(event) => { setEloAtualDuo(event.target.value) }} />
                                                                                }


                                                                            </div>

                                                                        </label>


                                                                    )
                                                                })
                                                                :
                                                                "Error elos não encontrados"
                                                        :
                                                        jogo == "wildrift" ?

                                                            tipoJogo == 'eloboost' ?

                                                                eloWd.map((elos) => {
                                                                    return (

                                                                        <label className=" escolha-elo-body-atual" for={"atual-" + elos.nome} onClick={() => {
                                                                            mudaEscolhido("escolha-elo-body-atual");
                                                                        }}>

                                                                            <div className={`escolhe-elo-${elos.nome}`} >


                                                                                <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                                {
                                                                                    elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                        <input class=" isExpres  " type="checkbox" value={elos.nome} data-dismiss="modal"
                                                                                            id={'atual-' + elos.nome} onClick={(event) => { setEloAtualWd(event.target.value) }} />
                                                                                        :
                                                                                        <input class=" isExpres  " type="checkbox" value={elos.nome}
                                                                                            id={"atual-" + elos.nome} onClick={(event) => { setEloAtualWd(event.target.value) }} />
                                                                                }


                                                                            </div>

                                                                        </label>


                                                                    )
                                                                })
                                                                :
                                                                tipoJogo == 'duoboost' ?
                                                                    eloWdDuo.map((elos) => {
                                                                        return (

                                                                            <label className=" escolha-elo-body-atual" for={"atual-" + elos.nome} onClick={() => {
                                                                                mudaEscolhido("escolha-elo-body-atual");
                                                                            }}>

                                                                                <div className={`escolhe-elo-${elos.nome}`} >


                                                                                    <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                                    {
                                                                                        elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                            <input class=" isExpres  " type="checkbox" value={elos.nome} data-dismiss="modal"
                                                                                                id={'atual-' + elos.nome} onClick={(event) => { setEloAtualWdDuo(event.target.value) }} />
                                                                                            :
                                                                                            <input class=" isExpres  " type="checkbox" value={elos.nome}
                                                                                                id={"atual-" + elos.nome} onClick={(event) => { setEloAtualWdDuo(event.target.value) }} />
                                                                                    }


                                                                                </div>

                                                                            </label>


                                                                        )
                                                                    })
                                                                    :
                                                                    'Error elos não encontrados'
                                                            :
                                                            elo.map((elos) => { })
                                                }
                                            </div>



                                        </div>


                                        <div className="divisoes ">

                                            <div className="etap pt-4">
                                                <div class="icone-etap">2</div>
                                                <h5>Divisão Atual</h5>

                                            </div>
                                            <div className={` divisoes-escolhas   ${eloAtual == 'graomestre' || eloAtual == 'mestre' || eloAtual == 'desafiante' ? 'desabled' : ''} pl-5`}>

                                                {

                                                    jogo == 'leagueoflegends' ?
                                                        divisao.map((divisoes) => {

                                                            return (
                                                                <label className='divisoes-escolhas-body-atual  ' htmlFor={"atual-" + divisoes} onClick={() => {

                                                                    mudaEscolhido("divisoes-escolhas-body-atual");

                                                                }}>
                                                                    <h3>{divisoes}</h3>

                                                                    <input class="isExpress close" data-dismiss="modal" type="checkbox" value={divisoes} id={"atual-" + divisoes} onClick={(event) => {

                                                                        setDivisaoAtual(event.target.value);
                                                                    }} />
                                                                </label>

                                                            )

                                                        })
                                                        :
                                                        jogo == 'wildrift' ?
                                                            divisao.map((divisoes) => {

                                                                return (
                                                                    <label className='divisoes-escolhas-body-atual  ' htmlFor={"atual-" + divisoes} onClick={() => {

                                                                        mudaEscolhido("divisoes-escolhas-body-atual");

                                                                    }}>
                                                                        <h3>{divisoes}</h3>

                                                                        <input class="isExpress close" data-dismiss="modal" type="checkbox" value={divisoes} id={"atual-" + divisoes} onClick={(event) => {

                                                                            setDivisaoAtualWd(event.target.value)

                                                                        }} />
                                                                    </label>

                                                                )

                                                            })
                                                            :
                                                            divisao.map((divisoes) => {

                                                                return (
                                                                    <label className='divisoes-escolhas-body-atual  ' htmlFor={"atual-" + divisoes} onClick={() => {

                                                                        mudaEscolhido("divisoes-escolhas-body-atual");

                                                                    }}>
                                                                        <h3>{divisoes}</h3>

                                                                        <input class="isExpress close" data-dismiss="modal" type="checkbox" value={divisoes} id={"atual-" + divisoes} onClick={(event) => {

                                                                            setDivisaoAtual(event.target.value)

                                                                        }} />
                                                                    </label>

                                                                )

                                                            })

                                                }


                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* modal para elo desejado */}
            <div class="modal fade" id="modalEloDesejado" tabindex="-1" role="dialog" aria-labelledby="modalEloDesejadoTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Selecione a classificação</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">


                            <div className="body-escolhaClas">


                                <div className="container">


                                    <div className="row">


                                        <div className="elos">
                                            <div className="etap">
                                                <div class="icone-etap">1</div>
                                                <h5>Elo Atual</h5>
                                            </div>


                                            <div className="pl-5">
                                                {
                                                    jogo == "leagueoflegends" ?


                                                        tipoJogo == 'eloboost' ?
                                                            elo.map((elos) => {
                                                                return (

                                                                    <label className=" escolha-elo-body" for={elos.nome} onClick={() => {
                                                                        mudaEscolhido("escolha-elo-body");
                                                                    }}>

                                                                        <div className={`escolhe-elo-${elos.nome}`} >


                                                                            <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                            {
                                                                                elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                    <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome} data-dismiss="modal"
                                                                                        id={elos.nome} onClick={(event) => { setEloDesejado(event.target.value) }} />
                                                                                    :
                                                                                    <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome}
                                                                                        id={elos.nome} onClick={(event) => { setEloDesejado(event.target.value) }} />
                                                                            }


                                                                        </div>

                                                                    </label>


                                                                )
                                                            })
                                                            :

                                                            tipoJogo == 'duoboost' ?
                                                                eloDuo.map((elos) => {
                                                                    return (

                                                                        <label className=" escolha-elo-body" for={elos.nome} onClick={() => {
                                                                            mudaEscolhido("escolha-elo-body");
                                                                        }}>

                                                                            <div className={`escolhe-elo-${elos.nome}`} >


                                                                                <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                                {
                                                                                    elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                        <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome} data-dismiss="modal"
                                                                                            id={elos.nome} onClick={(event) => { setEloDesejadoDuo(event.target.value) }} />
                                                                                        :
                                                                                        <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome}
                                                                                            id={elos.nome} onClick={(event) => { setEloDesejadoDuo(event.target.value) }} />
                                                                                }


                                                                            </div>

                                                                        </label>


                                                                    )
                                                                })
                                                                :
                                                                "Error elos não encontrados"
                                                        :
                                                        jogo == "wildrift" ?

                                                            tipoJogo == 'eloboost' ?

                                                                eloWd.map((elos) => {
                                                                    return (

                                                                        <label className=" escolha-elo-body" for={elos.nome} onClick={() => {
                                                                            mudaEscolhido("escolha-elo-body");
                                                                        }}>

                                                                            <div className={`escolhe-elo-${elos.nome}`} >


                                                                                <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                                {
                                                                                    elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                        <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome} data-dismiss="modal"
                                                                                            id={elos.nome} onClick={(event) => { setEloDesejadoWd(event.target.value) }} />
                                                                                        :
                                                                                        <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome}
                                                                                            id={elos.nome} onClick={(event) => { setEloDesejadoWd(event.target.value) }} />
                                                                                }


                                                                            </div>

                                                                        </label>


                                                                    )
                                                                })
                                                                :
                                                                tipoJogo == 'duoboost' ?
                                                                    eloWdDuo.map((elos) => {
                                                                        return (

                                                                            <label className=" escolha-elo-body" for={elos.nome} onClick={() => {
                                                                                mudaEscolhido("escolha-elo-body");
                                                                            }}>

                                                                                <div className={`escolhe-elo-${elos.nome}`} >


                                                                                    <img src={elos.caminho} alt={elos.nome} className="elos-img-escolha" />

                                                                                    {
                                                                                        elos.nome == 'graomestre' || elos.nome == 'mestre' || elos.nome == 'desafiante' ?
                                                                                            <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome} data-dismiss="modal"
                                                                                                id={elos.nome} onClick={(event) => { setEloDesejadoWdDuo(event.target.value) }} />
                                                                                            :
                                                                                            <input class=" isExpres  " type="radio" name="elodesejado" value={elos.nome}
                                                                                                id={elos.nome} onClick={(event) => { setEloDesejadoWdDuo(event.target.value) }} />
                                                                                    }


                                                                                </div>

                                                                            </label>


                                                                        )
                                                                    })
                                                                    :
                                                                    'Error elos não encontrados'
                                                            :
                                                            elo.map((elos) => { })
                                                }
                                            </div>



                                        </div>


                                        <div className="divisoes ">

                                            <div className="etap pt-4">
                                                <div class="icone-etap">2</div>
                                                <h5>Divisão Atual</h5>

                                            </div>
                                            <div className={` divisoes-escolhas   ${eloDesejado == 'graomestre' || eloDesejado == 'mestre' || eloDesejado == 'desafiante' ? 'desabled' : ''} pl-5`}>

                                                {

                                                    jogo == 'leagueoflegends' ?

                                                        tipoJogo == 'eloboost' ?

                                                            divisao.map((divisoes) => {

                                                                return (
                                                                    <label className='divisoes-escolhas-body  ' htmlFor={divisoes} onClick={() => {

                                                                        mudaEscolhido("divisoes-escolhas-body");

                                                                    }}>
                                                                        <h3>{divisoes}</h3>

                                                                        <input class="isExpress close" data-dismiss="modal" type="radio" name="divisaoDesejado" value={divisoes} id={divisoes} onClick={(event) => {

                                                                            setDivisaoDesejado(event.target.value)

                                                                        }} />
                                                                    </label>

                                                                )

                                                            })
                                                            :
                                                            tipoJogo == 'duoboost' ?

                                                                divisao.map((divisoes) => {

                                                                    return (
                                                                        <label className='divisoes-escolhas-body  ' htmlFor={divisoes} onClick={() => {

                                                                            mudaEscolhido("divisoes-escolhas-body");

                                                                        }}>
                                                                            <h3>{divisoes}</h3>

                                                                            <input class="isExpress close" data-dismiss="modal" type="radio" name="divisaoDesejado" value={divisoes} id={divisoes} onClick={(event) => {

                                                                                setDivisaoDesejadoDuo(event.target.value)

                                                                            }} />
                                                                        </label>

                                                                    )

                                                                })
                                                                :
                                                                'Error divisões não encontradas'
                                                        :
                                                        jogo == 'wildrift' ?

                                                            tipoJogo == 'eloboost' ?
                                                                divisao.map((divisoes) => {

                                                                    return (
                                                                        <label className='divisoes-escolhas-body ' htmlFor={divisoes} onClick={() => {

                                                                            mudaEscolhido("divisoes-escolhas-body ");

                                                                        }}>
                                                                            <h3>{divisoes}</h3>

                                                                            <input class="isExpress close" data-dismiss="modal" type="radio" name="divisaoDesejado" value={divisoes} id={divisoes} onClick={(event) => {

                                                                                setDivisaoDesejadoWd(event.target.value)

                                                                            }} />
                                                                        </label>

                                                                    )


                                                                })
                                                                :
                                                                tipoJogo == 'duoboost' ?
                                                                    divisao.map((divisoes) => {

                                                                        return (
                                                                            <label className='divisoes-escolhas-body ' htmlFor={divisoes} onClick={() => {

                                                                                mudaEscolhido("divisoes-escolhas-body ");

                                                                            }}>
                                                                                <h3>{divisoes}</h3>

                                                                                <input class="isExpress close" data-dismiss="modal" type="radio" name="divisaoDesejado" value={divisoes} id={divisoes} onClick={(event) => {

                                                                                    setDivisaoDesejadoWdDuo(event.target.value)

                                                                                }} />
                                                                            </label>

                                                                        )


                                                                    })
                                                                    :
                                                                    'Error divisões não encontradas'
                                                            :
                                                            divisao.map((divisoes) => {

                                                                return (
                                                                    <label className='divisoes-escolhas-body  ' htmlFor={divisoes} onClick={() => {

                                                                        mudaEscolhido("divisoes-escolhas-body ");

                                                                    }}>
                                                                        <h3>{divisoes}</h3>

                                                                        <input class="isExpress close" data-dismiss="modal" type="radio" name="divisaoDesejado" value={divisoes} id={divisoes} onClick={(event) => {

                                                                            setDivisaoDesejadoWd(event.target.value)

                                                                        }} />
                                                                    </label>

                                                                )

                                                            })

                                                }


                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

