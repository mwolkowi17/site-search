import React from 'react';

const HeaderStyle={
    position:'realtive',
    height:'100px',
    backgroundColor:'darkorange',
    paddingTop:'24px',
    left:'50px'
   
}

export const Header=(props)=>{
    return(
        <div style={HeaderStyle}>
           <div style={{position:'relative', float:'left'}}>
              <img style={{ position:'relative', marginLeft:'5px', marginTop:'5px', marginRight:'5px'}}src={require('./logo-hn-search.webp')} alt='logo1' width='60px' height='60px' />  
                 <span style={{position:'relative', bottom:'20px',color:'white'}}>Search Hacker News</span>
              <span><input type='text' style={{position:'relative', bottom:'22px', height:'30px', width:'300px', marginLeft:'5px'}}></input></span><span style={{position:'relative', bottom:'20px'}}> by Multieducatio.pl</span>
           
           </div>
           <div>{props.find}</div>
        </div>
    )
}