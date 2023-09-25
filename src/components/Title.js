import React from "react";
import PropsTypes from "prop-types";
import sabiha from "../asserts/sabiha.jpg";

function Title(props) {
    console.log(props);
    const {name, leadText} = props;
   
  return (
    <div className="container">
    <div className="row text-center align-items-center my-5 py-5">
   <div className="col-12 col-md-6">
    <img 
    className=" img-fluid rounded-circle w-75"
     src={sabiha}  
    alt="myself"/>
   </div>
<div className="col-12 col-md-6 pt-5">
<div className="font-weight-light" style={{fontSize:"50px"}}>
    Hi, I am <span className="text-info ">{name}</span> 
</div>
<h4 className="font-weight-light">{leadText}</h4>
    </div>
 </div> 
</div>
  );
}
 Title.defaultProps = {
  name: "Sabiha Marur",
  leadText:"I'm b.tect student",
 };
 Title.propsTypes = {
  name:PropsTypes.string.isRequired,
 };

export default Title;
