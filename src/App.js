import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import Menu from './components/MenuComponent';
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
        <Navbar dark color="primary">
          <div className="container">
            <h1>My Blog App</h1>
          </div>
        </Navbar>
        <Menu posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
