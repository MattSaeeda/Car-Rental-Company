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
        {/* // /* <Navbar dark color="primary">
        //   <div className="container">
        //     <h1>My Blog App</h1><button>Log in</button><button>Logout</button>
        //   </div>
        // </Navbar> */ }
        <Menu cars={this.state.cars}/>
         <Footer /> 
      </div>
    );
  }
}


// componentDidMount = async () => {
//   try {
//     // Get network provider and web3 instance.
//     const web3 = await getWeb3();

//     // Use web3 to get the user's accounts.
//     const accounts = await web3.eth.getAccounts();

//     // Get the contract instance.
//     const Contract = truffleContract(Rent);
//     Contract.setProvider(web3.currentProvider);
//     const instance = await Contract.deployed();

//     // Set web3, accounts, and contract to the state
//     this.setState({ web3, accounts, contract: instance });
//   } catch (error) {
//     // Catch any errors for any of the above operations.
//     alert(
//       `Failed to load web3, accounts, or contract. Check console for details.`
//     );
//     console.log(error);
//   }
// };


export default App;
