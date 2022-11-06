
var elos = {
    ferro: 1,
    bronze: 2,
    prata: 3,
    ouro: 4,
    platina: 5,
    esmeralda: 6,
    diamante: 7,
    mestre: 8,
    graomestre: 9,
    desafiante: 10
}

var divisoes = {
    IV: 4,
    III: 3,
    II: 2,
    I: 1
}
export function trataNomeJogo(jogo) {

    if (jogo == "leagueoflegends") {

        return "League of Legends"
    }

    else if (jogo == "wildrift") {


        return "Wild Rifit"
    }
    else {

        return "Valorant"
    }
}


export function trataJogo(tipoJogo, jogo) {
    if (tipoJogo == "eloboost")
        return "Elo boost";

    else if (tipoJogo == "duoboost")
        return "Duo boost";

    else if (tipoJogo == 'coach')
        return "Coach"

    else if (tipoJogo == "md10" || tipoJogo == 'md5' && jogo == 'leagueoflegends' || jogo == 'wildrift')
        return "Md10"

    else if (tipoJogo == "md5" || tipoJogo == 'md10' && jogo == 'valorant')
        return "Md5"


}


//muda a cor do background do elo clicado
export function mudaEscolhido(id) {

    let coluna = document.querySelectorAll("." + id);

    coluna.forEach((col) => {
        col.addEventListener("click", () => {
            removeActiveClass();

            if (id === "escolha-elo-body") {
                let divisao = document.querySelectorAll('.divisoes-escolhas-body');

                divisao.forEach((divisoes) => {

                    divisoes.classList.remove('check');
                })
            }

            if (id == "escolha-elo-body-atual") {
                let divisao = document.querySelectorAll('.divisoes-escolhas-body-atual');

                divisao.forEach((divisoes) => {


                    divisoes.classList.remove('check');
                })

            }

            col.classList.add("check");

        })
    })

    const removeActiveClass = () => {
        coluna.forEach((col) => {

            col.classList.remove("check");

        })
    }
}

export function verificaElos(eloAtual, eloDesejado, divisaoAtual, divisaoDesejada, jogo) {

    console.log(divisaoAtual)
   
    const detalhes = document.querySelector('.detalhes_pedido');

 

    if (elos[`${eloAtual}`] > elos[`${eloDesejado}`]) {
        detalhes.classList.add('error');
    }

    else if (elos[`${eloAtual}`] == elos[`${eloDesejado}`] && divisoes[`${divisaoAtual}`] <= divisoes[`${divisaoDesejada}`]) {
        detalhes.classList.add('error');
    }
    else {
        detalhes.classList.remove('error');
    }

  
}

export function addLoad() {
    var load = document.querySelector(".carregamento-detalhes-pedido");
    var pedidoBody = document.querySelector(".body-pedido-principal")

    load.classList.remove("d-none");
    pedidoBody.classList.add("d-none"); 

function removeAnimation(){
    load.classList.add("d-none");
    pedidoBody.remove("d-none");
}

  setTimeout(
    removeAnimation()
  , 200);
  

}           