import "../Perguntas/perguntas.css"
import divisao from '../../assets/img/divider/titleDivider.svg'




export default function Perguntas() {




  return (
    <section className="perguntasFaq">
      <header>
        <div className="container titulo-perguntas">
          <h3>
            Perguntas Frequentes
          </h3>
          <div className="divider">
            <img src={divisao} alt="imagem de divisão" />

          </div>
        </div>
      </header>
      <main>
        <div className="container cont-perguntas">
          <div className="row" id="accordion">
            <div className="col-lg-6  card-faq">

              <div className="direita" >


                <div className="col-lg-12 faq  " id="headingOne">

                  <div id="accordion">
                    <div class="card pergunta-body" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <div class="card-header" id="headingOne">


                        <div className="head" id="body-faq" >
                          <h5 className="subtitulo"> Como funciona este serviço?
                          </h5>
                          <span className='icone-pergunta'><i class="fa-regular fa-square-plus"></i></span>
                          <span className='icone-pergunta-minus'><i class="fa-regular fa-square-minus"></i></span>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div id="collapseOne" class="collapse resposta-body" aria-labelledby="headingOne" data-parent="#accordion" >
                    <div className="card-body paragrafo">
                      Você nos paga para melhorar seu desempenho em jogos classificados. Dependendo do tipo de serviço que você escolher, você nos dá seu nome de usuário e senha e nós jogamos em sua conta ou um de nossos trabalhadores joga junto com você. Temos muitos jogadores que estão pelo menos no ranking de diamante 1 que garantem a qualidade e rapidez necessárias para seu pedido.
                    </div>
                  </div>



                </div>

                <div className="col-lg-12 faq  " id="headingTwo">

                  <div id="accordion">
                    <div class="card pergunta-body" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div class="card-header" id="headingTwo">


                        <div className="head" id="body-faq" >
                          <h5 className="subtitulo">  Posso ser banido?
                          </h5>
                          <span className='icone-pergunta'><i class="fa-regular fa-square-plus"></i></span>
                          <span className='icone-pergunta-minus'><i class="fa-regular fa-square-minus"></i></span>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div id="collapseTwo" class="collapse resposta-body" aria-labelledby="headingTwo" data-parent="#accordion"  >
                    <div className="card-body paragrafo">

                      Há sempre uma pequena chance de que isso possa acontecer, e ninguém pode garantir 100% de proteção contra isso. Se isso acontecer, não assumiremos responsabilidade por isso.

                    </div>
                  </div>



                </div>


                <div className="col-lg-12 faq  " id="headingTree">

                  <div id="accordion">
                    <div class="card pergunta-body" data-toggle="collapse" data-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                      <div class="card-header" id="headingTree">


                        <div className="head" id="body-faq" >
                          <h5 className="subtitulo">
                            Qual o prazo estimado?</h5>
                          <span className='icone-pergunta'><i class="fa-regular fa-square-plus"></i></span>
                          <span className='icone-pergunta-minus'><i class="fa-regular fa-square-minus"></i></span>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div id="collapseTree" class="collapse resposta-body" aria-labelledby="headingTree" data-parent="#accordion"  >
                    <div className="card-body paragrafo">

                      Não estamos em condições de dizer por quanto tempo exatamente sua conta será trabalhada. Depende de algumas coisas que não temos controle sob tais como o tamanho de seu pedido, a quantidade atual de pedidos e a disponibilidade de nossos jogadores. Às vezes pode levar alguns dias e às vezes pode ser feito em menos de 24 horas.
                    </div>
                  </div>



                </div>



              </div>

            </div>

            <div className="col-lg-6">
              <div className="esquerda" id="accordion">
                <div className="col-lg-12 faq  " id="headingFour">

                  <div id="accordion">
                    <div class="card pergunta-body" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <div class="card-header" id="headingFour">


                        <div className="head" id="body-faq" >
                          <h5 className="subtitulo">  Gostaria de ser um booster, o que devo fazer?
                          </h5>
                          <span className='icone-pergunta'><i class="fa-regular fa-square-plus"></i></span>
                          <span className='icone-pergunta-minus'><i class="fa-regular fa-square-minus"></i></span>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div id="collapseFour" class="collapse resposta-body" aria-labelledby="headingFour" data-parent="#accordion" >
                    <div className="card-body paragrafo">


                      Fale conosco através do formulário de contato. Lembre-se de que recrutamos apenas jogadores de diamante 1 e desafiadores.


                    </div>
                  </div>



                </div>

                <div className="col-lg-12 faq  " id="headingFive">

                  <div id="accordion">
                    <div class="card pergunta-body" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <div class="card-header" id="headingFive">


                        <div className="head" id="body-faq" >
                          <h5 className="subtitulo">COMO SEI QUE MINHA CONTA NÃO SERÁ ROUBADA?
                          </h5>
                          <span className='icone-pergunta'><i class="fa-regular fa-square-plus"></i></span>
                          <span className='icone-pergunta-minus'><i class="fa-regular fa-square-minus"></i></span>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div id="collapseFive" class="collapse resposta-body" aria-labelledby="headingFive" data-parent="#accordion"  >
                    <div className="card-body paragrafo">


                      Somos uma empresa íntegra e todos os nossos funcionários estão de acordo com os nossos valores, desta forma isso está fora de cogitação. Além disso, precisaríamos ter acesso ao seu e-mail cadastrado na conta riot para realizar a troca de senha ou de qualquer outra informação, e no ato do pedido não solicitamos esta informação, apenas usuário e senha da conta riot. Sendo recomendado alterar a senha e colocar uma senha provisória para o período do serviço para maior segurança.

                    </div>
                  </div>



                </div>


                <div className="col-lg-12 faq  " id="headingSix">

                  <div id="accordion">
                    <div class="card pergunta-body" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      <div class="card-header" id="headingSix">


                        <div className="head" id="body-faq" >
                          <h5 className="subtitulo">
                            QUEM FICARÁ SABENDO QUE EU COMPREI O SERVIÇO?</h5>
                          <span className='icone-pergunta'><i class="fa-regular fa-square-plus"></i></span>
                          <span className='icone-pergunta-minus'><i class="fa-regular fa-square-minus"></i></span>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div id="collapseSix" class="collapse resposta-body" aria-labelledby="headingSix" data-parent="#accordion"  >
                    <div className="card-body paragrafo">


                      Ninguém, nós jogamos com ''CHAT OFF'', um código no CMD, que desativa todas as funções de CHAT no jogo, sendo assim a sua conta vai parecer que está offline, porém nossos boosters vão estar jogando, e ninguém vai perceber! legal né?


                    </div>
                  </div>



                </div>



              </div>
            </div>

          </div>
        </div>
      </main>

      <div className='bgkLeft'>
        <svg width="336" height="704" viewBox="0 0 336 704" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M296.988 2.09839C319.826 -4.30005 340.707 17.0818 333.769 39.7616L137.173 682.447C130.508 704.236 102.942 710.933 87.0222 694.632L-363.544 233.261C-379.464 216.96 -372.115 189.56 -350.175 183.413L296.988 2.09839Z" fill="#12161B" />
        </svg>

      </div>
      <div className='bgkRight'>
        <svg width="525" height="571" viewBox="0 0 525 571" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="316" cy="285.5" rx="316" ry="285.5" fill="#12161B" />
        </svg>
      </div>
    </section>
  )


}