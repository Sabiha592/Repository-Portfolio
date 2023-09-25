import React from "react";
import { Link } from "react-router-dom";
 function Footer() {
return(
 
  
    <footer>
  <div 
  className="container-fluid text-center" 
  style={{backgroundColor: "black"}}>
  <div className=" py-5">
  
      <h2 className="text-light ">Interested in working with me?</h2>
      <Link to="/Contact">
      <button className="btn btn-outline-light btn-lg mt-3 ">Let's talk
      </button>
      </Link>
              </div>
           
          
  
  <div className="row">
  <div className="col-12 col-md-4 py-3">
      <h5 className="text-info pd-3">More Links</h5>
      <a href="/" className="text-light d-block">Blocks</a>
      <Link to="/" className="text-light d-block">Home</Link>
      <a href="/" className="text-light d-block">Projects</a>
      <Link to="/Contact" className="text-light d-block">contact me</Link>
      <Link to="/write-a-recommendation" className="text-light">Write a recommendation<i className="fas fa-heart text-light"></i>
      </Link>
              </div>
              
            
           
             
  <div className="col-12 col-md-4 text-light text-justify py-3">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt unde quo doloremque itaque deleniti nostrum quas numquam dolorum, esse facilis quidem soluta alias commodi ad expedita voluptate corrupti neque. Unde quia totam distinctio illo fugit? Veniam delectus ducimus voluptatum animi.

      </p>
              </div>
              
           
  
  <div className="col-12 col-md-4 py-3">
      <h5 className="text-info pb-3">Social Media</h5> 
      <a href="/">
      <i className="fab fa-linkedin text-light h1 d-block"></i> 
      </a> 
      <a href="/">
      <i className="fab fa-github text-light h1 d-block"></i>
      </a>  
      <a href="/">
      <i className="fas fa-envelope text-light h1 d-block"></i>
      </a> 
            </div>
            
  
  <div className="row">
  <div className="col-12 text-muted ">
  <p>Copyright Sabiha Marur </p>
  
            </div>
            </div>
            </div>
            </div>
            
</footer>
 
);
 }

export default Footer;