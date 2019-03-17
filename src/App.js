import React, { Component } from 'react';
import {Header} from './Header';
import './App.css';
import {Toolbar} from './Toolbar';
import {MessageList} from './MessageList';




class App extends Component {
  constructor() {
    super();
    this.state={
      contacts:[],
      contactsA:['marcin','iwona'
      ]
      
    }
  
  }
  componentDidMount(){
    fetch("https://randomuser.me/api/?format=json&results=50")
       .then(res=>res.json())
       .then(data=>this.setState({contacts:data.results}))
  }

  finder=()=>{
    return( 
    <input type='text' onInput={this.filterUsers.bind(this)} ></input>
    )

  }
  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredContacs = this.getFilteredUsersForText(text)
    this.setState({
      contacts:filteredContacs
    })
  }
  getFilteredUsersForText(text) {
  
    return this.state.contacts.filter(check => check.name.last.toLowerCase().includes(text.toLowerCase()))
  }
  render() {
    return (
      <div style={{position:'relative'}}>
      <div className="App" style={{position:'relative', maxWidth:'1240px', marginLeft:'auto', marginRight:'auto'}}>
        <Header find={this.finder()} name='Header'/>
        <Toolbar name='Toolbar' />
        <MessageList contacts={this.state.contacts} />

        <p>Treść</p>
      </div>
      </div>
    );
  }
}

export default App;
