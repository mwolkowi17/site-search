import React from 'react'
import {MessageItem} from './MessageItem'



export class MessageList extends React.Component
{ 
    contactToContactItem = contact => {
        const { first, last } = contact.name;
        const name = ` ${first} ${last}`.trim();
        const phone = contact.phone;
        const email = contact.email;
        const cell = contact.cell;
        const location = contact.location.street;
        const key = contact.login.username;
        return <MessageItem key ={key} users ={name} info={location} email={email} 
        phone={phone} cell={cell}/>
    }
   render(){ 
       
      
   return(
       <div>
       {this.props.contacts.map(this.contactToContactItem)}
       </div>
   )
   
   
       
   
}

}