import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {getContacts} from './actions/contacts'

class App extends Component {
    addContact(){
        console.log('add',this.contactInput.value);
        this.props.onAddContact(this.contactInput.value);
        this.contactInput.value = '';
    }
    findTrack(){
        console.log('search',this.searchInput.value);
        this.props.onFindContact(this.searchInput.value);

    }
    render() {
      console.log(this.props.testStore);
    return (
      <div className="book">
          <div>
              <input type="text" ref={(input)=>{this.contactInput = input}}/>
              <button onClick={this.addContact.bind(this)}>Добавить контакт</button>
          </div>
          <div>
              <input type="text" ref={(input)=>{this.searchInput = input}}/>
              <button onClick={this.findTrack.bind(this)}>Найти</button>
          </div>
          <div>
              <button onClick={this.props.onGetContacts}>Получить контакт</button>
          </div>
          <ul>
              {this.props.testStore.map((contact,index)=>
                <li key={index}>{contact.name}</li>
              )}
          </ul>
      </div>
    );
    }
}

export default connect(
    state=>({
        testStore:state.contacts.filter(contact=>contact.name.includes(state.filterContacts))//Наше хранилище
    }),
    dispatch=>({
        onAddContact:(contact)=>{
            const payload = {
                id:Date.now().toString(),
                name:contact
            };
            dispatch({type:'ADD_CONTACT',payload:payload})
        },
        onFindContact:(contact)=>{

            dispatch({type:'FIND_CONTACT',payload:contact})
        },
        onGetContacts:()=>{


            dispatch(getContacts());
        }
    })
)(App);
