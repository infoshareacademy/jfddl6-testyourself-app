import React from 'react'
 import RaisedButton from 'material-ui/RaisedButton'
 

 const style = {
  margin: 20
}
 
 const Button = (props) => (
  <div>
    <RaisedButton
      label="Primary"
      secondary={true}
      style={style}
    />
  </div>
)
 export default Button 