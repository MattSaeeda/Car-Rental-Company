import React, { Component } from 'react';
import logo from './logo.svg';
// import { Navbar } from 'reactstrap';
import Menu from './components/MenuComponent';
import NavBar from './components/NavBarComponent';
import Footer from './components/FooterComponent';
import './App.css';
import {cars} from './shared/cars';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: cars,
      // web3: null,
      // accounts: null,
      // contract: null
    };
  }



  render() {
    return (
      <div>

        <NavBar></NavBar>
        <Menu cars={this.state.cars}/>
        <Footer /> 

      </div>
    );
  }
}


export default App;
