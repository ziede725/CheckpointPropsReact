import React from 'react'
import PropTypes from "prop-types"

const Profile= (props) => 
{  props.handleName(props.fullName)     
    const styleObject ={color:"red" ,textAlign: "center"}
    const styleDiv={ color :"blue" , textAlign: "center" , display: "flex" ,justifyContent:"center"
    ,alignContent:"center", margin:"50 px" ,padding:"50px" }
    return(
        <>
        <div style= {styleDiv}> My full name is : {props.fullName}</div>
        <p style = {styleObject}> my profession is : {props.profession}</p>
        <p style = {styleObject}> My bio is : {props.bio} </p>
        <div style = {styleDiv}> Here's a picture of me : {props.children}</div> 
        
        </> 

    )
   
    
}
Profile.defaultProps ={
    fullName:'Zied Ben Yahia ',
    profession:'Mechatronics engineer',
    bio: 'age 27', 
    
}
Profile.propTypes={
    fullName : PropTypes.string , 
    bio : PropTypes.string , 
    profession: PropTypes.string ,
}

export default Profile ; 