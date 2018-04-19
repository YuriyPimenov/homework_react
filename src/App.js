import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data.js';
console.log(data);
var contacts= data;
class App extends Component {
  render() {
    return (
      <div className="book">
        <div className="search">
            <input type="text"/>
        </div>
        <div className="contacts">
            {
                contacts.map(function(el){
                    return (
                        <div>
                            <span>{el.name}</span>
                            <img width="100px" src={el.img} alt=""/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  }
}

export default App;
