import React from 'react';
import { useParams } from 'react-router';
import { trataNomeJogo, tratajogo, trataJogo } from "../../js/calculadora.js"
import './calculadora.css'

export default function Calculadora() {
    const { jogo, tipoJogo } = useParams();
    console.log(jogo)





    return (
        <div className="calculadora">

            <div className="container calculadora-body" >

                <div className="title">
                    <h3 className="titulo-calculadora">{trataNomeJogo(jogo)}</h3>
                </div>

                <div className="paragrafo">
                    <p>Serviço {trataNomeJogo(jogo)} premium pronto para começar agora com um preço acessível.</p>
                </div>


                <div className="row">
                    <div className="col-lg-4">
                        <div className="body-jogo active lol">
                            <h5 className="subtitulo">Lol {trataJogo(tipoJogo)}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="body-jogo wd">
                            <h5 className="subtitulo">Wild Rift {trataJogo(tipoJogo)}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="body-jogo vava">
                            <h5 className="subtitulo">Valorant {trataJogo(tipoJogo)}</h5>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <di className="row body-flags">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="flag">
                                        <svg _ngcontent-serverApp-c27="" viewBox="0 0 300 408" class="flag flag-silver flag-current"><defs _ngcontent-serverApp-c27=""><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-flag-pole-gradient"><stop _ngcontent-serverApp-c27="" offset="0%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="33%" stop-color="#333333"></stop><stop _ngcontent-serverApp-c27="" offset="50%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="73%" stop-color="#8F8F8F"></stop><stop _ngcontent-serverApp-c27="" offset="100%" stop-color="#000000"></stop></linearGradient><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-base-gradient"><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-start" offset="0%"></stop><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-stop" offset="100%"></stop></linearGradient><clipPath _ngcontent-serverApp-c27="" id="current-baseShape"><path _ngcontent-serverApp-c27="" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z"></path></clipPath></defs><rect _ngcontent-serverApp-c27="" class="flag__pole" height="10" rx="5" width="300" x="0" y="4" style={{ fill: " #e6e6e6" }}></rect><path _ngcontent-serverApp-c27="" class="flag__base" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z" style={{ fill: "#4b738d" }}></path><path _ngcontent-serverApp-c27="" class="flag__decor--outer" style={{ fill: "#6c91aa" }} d="M280.472,293.517c-0.216,0.046 -0.432,0.094 -0.648,0.143c-17.081,4.032 -28.667,24.458 -21.178,41.931l-109.174,61.948l-108.621,-61.635c4.271,-9.589 3.133,-21.201 -2.755,-29.75c-4.507,-6.545 -11.586,-11.211 -19.457,-12.745l-0.167,-0.032l0,-530.838l262,0l0,530.978Zm-259,-527.978l0,525.442c17.873,4.736 29.545,25.12 23.15,43.56c0,0 104.85,59.549 104.85,59.549l105.449,-59.835c-0.068,-0.2 -0.133,-0.401 -0.197,-0.602c-5.283,-16.84 4.813,-37.203 22.665,-42.455l0.083,-0.024l0,-525.635l-256,0Z"></path><path _ngcontent-serverApp-c27="" style={{ fill: "#6c91aa" }} class="flag__decor--inner" d="M274.472,319.428l-125,70.611l-125,-70.611l0,-549.389l250,0l0,549.389Zm-249,-548.389l0,547.805l124,70.047l124,-70.047l0,-547.805l-248,0Z"></path></svg>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="flag">
                                        <svg _ngcontent-serverApp-c27="" viewBox="0 0 300 408" class="flag flag-silver flag-current"><defs _ngcontent-serverApp-c27=""><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-flag-pole-gradient"><stop _ngcontent-serverApp-c27="" offset="0%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="33%" stop-color="#333333"></stop><stop _ngcontent-serverApp-c27="" offset="50%" stop-color="#FFFFFF"></stop><stop _ngcontent-serverApp-c27="" offset="73%" stop-color="#8F8F8F"></stop><stop _ngcontent-serverApp-c27="" offset="100%" stop-color="#000000"></stop></linearGradient><linearGradient _ngcontent-serverApp-c27="" x2="0" y2="1" id="current-base-gradient"><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-start" offset="0%"></stop><stop _ngcontent-serverApp-c27="" class="flag__base-gradient-stop" offset="100%"></stop></linearGradient><clipPath _ngcontent-serverApp-c27="" id="current-baseShape"><path _ngcontent-serverApp-c27="" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z"></path></clipPath></defs><rect _ngcontent-serverApp-c27="" class="flag__pole" height="10" rx="5" width="300" x="0" y="4" style={{ fill: " #e6e6e6" }}></rect><path _ngcontent-serverApp-c27="" class="flag__base" d="M290,3c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-28.169,0 -245.831,0 -274,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c0,31.369 0,298.658 0,322.72c0,1.072 0.571,2.062 1.499,2.599c14.078,8.147 122.921,71.13 137.002,79.279c0.927,0.536 2.071,0.536 2.998,0c14.08,-8.148 122.914,-71.126 137,-79.278c0.929,-0.537 1.501,-1.529 1.501,-2.602c0,-24.078 0,-291.35 0,-322.718Z" style={{ fill: "#282c33" }}></path><path _ngcontent-serverApp-c27="" class="flag__decor--outer" style={{ fill: "#a6a8ab" }} d="M280.472,293.517c-0.216,0.046 -0.432,0.094 -0.648,0.143c-17.081,4.032 -28.667,24.458 -21.178,41.931l-109.174,61.948l-108.621,-61.635c4.271,-9.589 3.133,-21.201 -2.755,-29.75c-4.507,-6.545 -11.586,-11.211 -19.457,-12.745l-0.167,-0.032l0,-530.838l262,0l0,530.978Zm-259,-527.978l0,525.442c17.873,4.736 29.545,25.12 23.15,43.56c0,0 104.85,59.549 104.85,59.549l105.449,-59.835c-0.068,-0.2 -0.133,-0.401 -0.197,-0.602c-5.283,-16.84 4.813,-37.203 22.665,-42.455l0.083,-0.024l0,-525.635l-256,0Z"></path><path _ngcontent-serverApp-c27="" style={{ fill: "#a6a8ab" }} class="flag__decor--inner" d="M274.472,319.428l-125,70.611l-125,-70.611l0,-549.389l250,0l0,549.389Zm-249,-548.389l0,547.805l124,70.047l124,-70.047l0,-547.805l-248,0Z"></path></svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4"></div>
                    </di>

                </div>
                {/* <g _ngcontent-serverApp-c27="" clip-path="url(https://ggboost.com/lol-boost/buy-solo-divisions#current-baseShape)"><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade-2.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade.png"></image><image _ngcontent-serverApp-c27="" class="flag-shadow" href="https://cdn.ggboost.com/images/flag-shade-3.png"></image></g> */}

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

        </div>
    )
}
