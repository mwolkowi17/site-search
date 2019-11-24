import React from 'react'

const MessageListStyle={
    backgroundColor:'ghostwhite',
    borderBottom: 'solid 1px gainsboro',
    padding:'12px',
    listStyleType:'none'
}

export const MessageItem=({key, users,email,phone,cell})=>{
 return(
     <li key={key} style={MessageListStyle}>
        <h1>{users}  </h1>
         
        <span>{email} | </span>
        <phone>{phone} | </phone>
        <phone>{cell} </phone>
     </li>
 )
}