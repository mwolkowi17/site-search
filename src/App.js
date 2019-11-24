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
      ],
      isLoading: false,
      filteredContacs:[],
      filteredContacsB:null
    }
  
  }
  componentDidMount(){
    fetch("https://randomuser.me/api/?format=json&results=50")
       .then(res=>res.json())
       .then(data=>this.setState({filteredContacs:data.results}))
       
       .then(this.setState({isLoading: true}))
      
  }

  finder=()=>{
    return( <div>
    <input id="textA" type='text' ></input>
    <button  onClick={this.filterUsers.bind(this)}>Wyszukaj </button>
    <button onClick={this.filterUsersB.bind(this)}>Reset</button>
    </div>
    )
    function button() {
      return(<button onClick={this.filterUsers.bind(this)}></button>)
      
    }
  }
  
  
  render() {
    return (
      <div style={{position:'relative'}}>
      <div className="App" style={{position:'relative', maxWidth:'1240px', marginLeft:'auto', marginRight:'auto'}}>
        <Header find={this.finder()} name='Header'/>
        <Toolbar name='Toolbar' />
        
        <MessageList contacts={this.state.filteredContacs} />

        <p>Treść</p>
      </div>
      </div>
    );
  }
  
  filterUsers() {
    const text = document.getElementById("textA").value;
    const filteredContacs = this.getFilteredUsersForText(text)
    this.setState({
      filteredContacs
    })
  }
  filterUsersB() {
    document.getElementById("textA").value=null
    //const text = document.getElementById("textA").value
    //const filteredContacs = this.getFilteredUsersForText(text)
    //this.setState({
    //  filteredContacs
    //})
    fetch("https://randomuser.me/api/?format=json&results=50")
       .then(res=>res.json())
       .then(data=>this.setState({filteredContacs:data.results}))
       
       .then(this.setState({isLoading: true}))
  }
  getFilteredUsersForText(text) {
  
    return this.state.filteredContacs.filter(check => check.name.last.toLowerCase().includes(text.toLowerCase()))
  }
  
}

export default App;
