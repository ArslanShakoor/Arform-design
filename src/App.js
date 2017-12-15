import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './components/user/Main';
import Header from './components/header/Header';
import Post from './components/post/post';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Post} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
