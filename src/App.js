import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import NavBar from './components/NavBarComponent';
import Footer from './components/FooterComponent';
import './App.css';
import {cars} from './shared/cars';
import CarouselBar from './components/CarouselBar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: cars,
    };
  }



  render() {
    return (
      <div>

        <NavBar></NavBar>
        <CarouselBar />
        <Menu cars={this.state.cars}/>
        <Footer /> 

      </div>
    );
  }
}


export default App;
