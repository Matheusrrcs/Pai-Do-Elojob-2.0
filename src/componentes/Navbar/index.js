import React, { Component } from 'react';
import imagem from '../../assets/img/logo/logo.png'
import Botao from '../Botao/'
import "../Navbar/navbar.css"
import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';
import lol from "../../assets/img/background/lol.svg"
import wr from "../../assets/img/background/wr.svg"
import valorant from "../../assets/img/background/valorant.svg"

// logo do navbar
class NavbarLogo extends Component {
  render() {
    return (
      <a className="navbar-brand" href="/"></a>
    )
  }
}


// icone do menu para moblie
class NavbarToggler extends Component {
  render() {
    return (
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="navbar-toggler"
        onClick={this.props.init} >
        <span class="menu-trigger">
          <i class={`menu-trigger-bar top ${this.props.anime}`}></i>
          <i class={`menu-trigger-bar middle ${this.props.anime}`}></i>
          <i class={`menu-trigger-bar  bottom ${this.props.anime}`}></i>
        </span>
        <span class="close-trigger">
          <i class={`close-trigger-bar left ${this.props.anime}`}></i>
          <i class={`close-trigger-bar right ${this.props.anime}`}></i>
        </span>
      </button >

    )
  }
}

// item do menu navbar
class NavItem extends Component {
  render() {
    return (
      <li className={this.props.clase} >
        <a className="nav-link" href={this.props.caminho}>{this.props.nome}</a>
      </li>
    )
  }
}


// item do menu com Dropdown
class NavItemDropdown extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">{this.props.nome}
        </a>

        <ul className="dropdown-menu styled-menu" aria-labelledby="dropdownMenuButton">
          <ItemDrop nome="LEAGUE OF LEGENDS" icone={<img src={lol} alt="logo do jogo" />} />
          <ItemDrop nome="WILD RIFT" icone={<img src={wr} alt="logo do jogo" />} />
          <ItemDrop nome="VALORANT" icone={<img src={valorant} alt="logo do jogo" />} />

        </ul>
      </li>
    )
  }
}

// item do menu com Dropdown
class NavItemDropdownService extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">{this.props.nome}
        </a>

        <ul className="dropdown-menu service styled-menu" aria-labelledby="dropdownMenuButton">
          <div className="container">
            <div className="row linha-itemDrop">
              <div className="col-lg-4 itemDrop-body lol">
                <div className="title-itemDrop">
                  <p> lol boost</p>
                </div>
                <div className="bgk-itemDrop lol"></div>
                <ItemDrop nome="Elo boost" icone={<i class="fa-solid fa-circle-up"></i>} />
                <ItemDrop nome="Duo boost" icone={<i class="fa-solid fa-user-group"></i>} />
                <ItemDrop nome="Md10" icone={<i class="fa-solid fa-chalkboard-user"></i>} />

              </div>
              <div className="col-lg-4 itemDrop-body wd">
                <div className="title-itemDrop">
                  <p>Wild Rift boost</p>
                </div>
                <div className="bgk-itemDrop wd"></div>
                <ItemDrop nome="Elo boost" icone={<i class="fa-solid fa-circle-up"></i>} />
                <ItemDrop nome="Duo boost" icone={<i class="fa-solid fa-user-group"></i>} />
                <ItemDrop nome="Md10" icone={<i class="fa-solid fa-chalkboard-user"></i>} />

              </div>
              <div className="col-lg-4 itemDrop-body vava">
                <div className="title-itemDrop">
                  <p>Valorant boost</p>
                </div>
                <div className="bgk-itemDrop vava"></div>
                <ItemDrop nome="Elo boost" icone={<i class="fa-solid fa-circle-up"></i>} />
                <ItemDrop nome="Duo boost" icone={<i class="fa-solid fa-user-group"></i>} />
                <ItemDrop nome="Md5" icone={<i class="fa-solid fa-chalkboard-user"></i>} />

              </div>


            </div>
          </div>

        </ul>

      </li>
    )
  }
}


class ItemDrop extends Component {
  render() {
    return (
      <li className="item-drop ">
        <a href="https://www.elojobburn.com/leagueOfLegends/duoboost"
          className="dropdown-item "><span className='icone-imteDrop'>{this.props.icone}</span>{this.props.nome}</a>
      </li>
    )
  }
}




class NavbarMenu extends React.Component {
  render() {
    return (



      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">

          <NavItem nome="Início" clase="nav-item active" />

          <NavItemDropdownService nome="Serviços" />
          <NavItemDropdown nome="Coach" />
          <NavItem nome="Contato" clase="nav-item" />
          <NavItem nome="Juntar-se" clase="nav-item" />
          <Botao nome="começar" />
        </ul>
      </div>


    )
  }
}

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbar: "",
      menu: "",
      anim: "",
      nav: ""
    }

    this.ativarAnimacao = this.ativarAnimacao.bind(this);
    this.menurTogggle = this.menurTogggle.bind(this);
    this.navActive = this.navActive.bind(this);
    this.init = this.init.bind(this);
  }



  ativarAnimacao() {

    let anime = this.state;

    if ($(window.document).scrollTop() > 50) {

      anime.navbar = "scrollUp"


    }
    else {
      anime.navbar = ""


    }
    this.setState({ anime })
  }

  menurTogggle() {
    let anime = this.state;
    let body = document.getElementById('body');

    if (this.state.menu === "") {
      body.classList.add("bloqued")
      anime.menu = "open"

      // if (this.state.navbar === "") {
      //   anime.navbar = "scroll"
      // }


    }
    else {
      body.classList.remove("bloqued")
      anime.menu = ""

      if ($(window.document).scrollTop() < 50) {

        anime.navbar = ""

      }
      else {
        anime.navbar = "scrollUp"
      }


    }


    this.setState({ anime })
  }

  navActive() {
    let anime = this.state;

    if (this.state.anim === "") {

      anime.anim = "activeAnim"
      anime.nav = "open"
    }
    else {
      anime.anim = ""
      anime.nav = ""
    }


  }

  animacao() {
    const menu = anime.timeline({
      loop: false,

    });
    menu.add({
      targets: '.nav-item, .menu-list .icone',
      duration: 2500,
      translateY: [100, 0],

      opacity: [0, 1],

      delay: (el, i) => {
        return 100 + 50 * i;
      }
    })
  }

  rolar() {

    const navbar = document.getElementById("navbar");


    window.onscroll = function (e) {

      if (window.scrollY == 0) {
        navbar.classList.add("scrollDefault")
        navbar.classList.remove("scroll")
        navbar.classList.remove("scrollUp")
      }


      else if (this.oldScroll > this.scrollY) {
        navbar.classList.add("scrollUp")
        navbar.classList.remove("scroll")
        navbar.classList.remove("scrollDefault")
      }
      else {
        navbar.classList.add("scroll")
        navbar.classList.remove("scrollUp")
        navbar.classList.remove("scrollDefault")
      }
      this.oldScroll = this.scrollY;
    }


  }


  init() {

    this.animacao();
    this.menurTogggle();
    this.navActive();
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.ativarAnimacao() });
    this.rolar();
  }

  render() {
    return (


      <nav className={`navbar navbar-expand-lg fixed-top  navbar-round ${this.state.navbar} ${this.state.nav}`} id="navbar"

      >
        <div className="container">
          <NavbarLogo logoUrl={imagem} alt="Imagem da logo" />

          <NavbarToggler menu={this.state.menu} init={this.init} anime={this.state.anim} />


          <NavbarMenu />
        </div>
        <div className='bgknavbar'>
          <i class="menu-bg top"  ></i>
          <i class="menu-bg middle" ></i>
          <i class="menu-bg bottom"  ></i>

        </div>



        <aside className="menu-list">

          <div className="collapse navbar-collapse" id="menu-body">
            <ul className="navbar-nav">

              <NavItem nome="Início" clase="nav-item active" />
              <NavItemDropdownService nome="Serviços" />
          <NavItemDropdown nome="Coach" />
          <NavItem nome="Contato" clase="nav-item" />
          <NavItem nome="Juntar-se" clase="nav-item" />
              <Botao nome="começar" />
            </ul>
          </div>

        </aside>
      </nav>



    )
  }

}



export default Navbar;

