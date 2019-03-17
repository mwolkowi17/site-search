import React from 'react'

const ToolbarStyle={
  height:'50px',
  backgroundColor:'azure',
  position:'relative'
 
}
const MenuStyle={
    border:'solid 2px silver',
    borderRadius:'6px',
    marginLeft:'5px',
    marginRight:'5px',
    fontSize:'20px',
    color:'grey'

}

export const Toolbar=(props)=>{
    return(
        <div style={ToolbarStyle}>
           <div style={{position:'relative',float:'left', marginTop:'12px', marginLeft:'35px'}}>
              <span> Search </span>
              <span style={MenuStyle}> Stories ▼</span>
              <span> by </span>
              <span style={MenuStyle}> Popularity ▼</span>
              <span> for </span>
              <span style={MenuStyle}> All time ▼</span>
           </div>
        </div>
    )
}