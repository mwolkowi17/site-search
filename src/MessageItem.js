import React from 'react'

const MessageListStyle={
    backgroundColor:'ghostwhite',
    borderBottom: 'solid 1px gainsboro',
    padding:'12px',
    listStyleType:'none'
}

export const MessageItem=({users,info,email,phone,cell})=>{
 return(
     <li style={MessageListStyle}>
        <h1>{users}  </h1>
        <span>{info} | </span>
        <span>{email} | </span>
        <phone>{phone} | </phone>
        <phone>{cell} </phone>
     </li>
 )
}