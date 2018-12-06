import React, { Component } from 'react';
import logo from './logo.svg';
// import { Navbar } from 'reactstrap';
import Menu from './components/MenuComponent';
import NavBar from './components/NavBarComponent';
import Footer from './components/FooterComponent';
import './App.css';
import {POSTS} from './shared/posts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: POSTS
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
        <Menu posts={this.state.posts}/>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
