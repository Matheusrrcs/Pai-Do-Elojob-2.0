import React, { Component } from 'react';
import imagem from '../../assets/img/logo/logo.png'
import Botao from '../Botao/'
import "../Navbar/navbar.css"
import $ from 'jquery';

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
          <ItemDrop nome="League of Legends" />
          <ItemDrop nome="Wild Rift" />
          <ItemDrop nome="Valorant" />
        </ul>
      </li>
    )
  }
}

class ItemDrop extends Component {
  render() {
    return (
      <li className="item-drop">
        <a href="https://www.elojobburn.com/leagueOfLegends/duoboost"
          className="dropdown-item text-uppercase">{this.props.nome}</a>
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
          <NavItemDropdown nome="Elo boost" />
          <NavItemDropdown nome="Duo boost" />
          <NavItemDropdown nome="Md10/Md5" />
          <NavItemDropdown nome="Coach" />
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

      anime.navbar = "scroll"


    }
    else {
      anime.navbar = ""


    }
    this.setState({ anime })
  }

  menurTogggle() {
    let anime = this.state;

    if (this.state.menu === "") {
      anime.menu = "open"

      if (this.state.navbar === "") {
        anime.navbar = "scroll"
      }


    }
    else {
      anime.menu = ""

      if ($(window.document).scrollTop() < 50) {

        anime.navbar = ""

      }
      else {
        anime.navbar = "scroll"
      }


    }


    this.setState({ anime })
  }

  navActive() {
    let anime = this.state;

    if (this.state.anim === "") {

      anime.anim = "active"
      anime.nav = "open"
    }
    else {
      anime.anim = ""
      anime.nav = ""
    }


  }

  init() {
    this.menurTogggle();
    this.navActive();
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.ativarAnimacao() });

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

      </nav>



    )
  }

}



export default Navbar;

