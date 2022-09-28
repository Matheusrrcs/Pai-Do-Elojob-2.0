 
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

export function activeJogo(jogo) {
    const active_lol = document.getElementById('bodyLol');

    const active_wd = document.getElementById('bodyWd');
    const active_vava = document.getElementById('bodyVava');


    if (jogo == "leagueoflegends") {
        active_lol.classList.add('active');
        active_wd.classList.remove('active');
        active_vava.classList.remove('active');

    }

    else if (jogo == "wildrift") {
        active_lol.classList.remove('active');
        active_wd.classList.add('active');
        active_vava.classList.remove('active');

    }
    else {
        active_lol.classList.remove('active');
        active_wd.classList.remove('active');
        active_vava.classList.add('active');

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
