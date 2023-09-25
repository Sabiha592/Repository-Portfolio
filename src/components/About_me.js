import React from "react";
 function About_me() {
  return (
    <div className="bg-light my-5">

    <div className="container  text-justify  py-5 ">
    <h1 className="text-center font-weight-light">
    <span className="text-info">About</span> me
         </h1>
    <div className="lead text-center">
        I can develop the front and the back of  an app
    </div>
    <div className="row ">
    
    {/* <!-- 1 --> */}
    
        <div className="col-12 col-md-6 px-5 pt-5">
          <h5 className="text-center">what I can do?</h5>
          <p className="text-justify">  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid necessitatibus saepe vel amet quaerat, eveniet quod ratione deleniti ratione deleniti 
        </p> 
        </div>
        
        {/* <!-- 2  -->   */}
    
        <div className="col-12  col-md-6 px-5  pt-5">
        <h5 className="text-center">what I am doing currently?</h5> 
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio fugiat deleniti perferendis accusantium soluta aspernatur placeat perspiciatis maiores inventore! ratione deleniti
          </p> 
    
        </div>
      
      
        {/* <!-- 3  --> */}
      
        <div className="  col-12  col-md-6 px-5 pt-5" >
        <h5 className="text-center">what do i believe in?</h5>
        <p className="text-justify">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio fugiat deleniti perferendis accusantium soluta aspernatur placeat perspiciatis maiores inventore! ratione deleniti 
     </p>
    
     
      </div>
      
      {/* <!-- 4 --> */}
      <div className="col-12 col-md-6 px-5 pt-5">
       
         <h5 className="text-center">How I can help you?</h5>
        <p className="text-justify">  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid necessitatibus saepe vel amet quaerat, eveniet quod ratione deleniti ratione deleniti 
        </p> 
    </div>
        </div>
        </div>
        </div>

      
 
  );
}
 export default About_me;
