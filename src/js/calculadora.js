

export function trataNomeJogo(jogo) {

    if (jogo == "leagueoflegends")
        return "League of Legends"

    else if (jogo == "wildrift")
        return "Wild Rifit"

    else
        return "Valorant"
}



export function trataJogo(tipoJogo) {
    if (tipoJogo == "eloboost")
        return "Elo boost";

    else if (tipoJogo == "duoboost")
        return "Duo boost";

    else if (tipoJogo == "md10")
        return "Md10"

    else if (tipoJogo == "md5")
        return "Md5"

    else
        return "Coach"
}