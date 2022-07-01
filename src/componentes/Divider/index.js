import React, { Component, useEffect } from 'react';
import CaminhoDivider from "../../assets/img/divider/waves.svg";
import "./divider.css"


class Divider extends Component {
    render() {
        return (
            <div class="bottom">
                <img src={CaminhoDivider} alt="Imagem de separação de tela" />
            </div>
        )
    }
}


export default Divider