import React from 'react'
 import RaisedButton from 'material-ui/RaisedButton'
 

 const style = {
  margin: 20
}
 
 const Button = (props) => (
  <div>
    <RaisedButton
      label={props.label}
      primary={true}
      style={style}
      onClick={props.onClick}
    />
  </div>
)
 export default Button 