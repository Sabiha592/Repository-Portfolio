import React from "react";
import  work1 from "../asserts/work1.jpg";
import ProjectCard from "./ProjectCard";

 function ProjectSection() {
    const projects =[
        {
            id:1,
            title: "Project 1",
            imgUrl:"",
            excerpt: "This is my project about..."
        },
        {
            id:2,
            title: "Project 2",
            imgUrl:"",
            excerpt: "This is my project about...",

           
        },
        {
            id:3,
            title: "Project 3",
            imgUrl:"",
            excerpt: "This is my project about...",

          
        },
    ];
  return (
   
<div>
    <div className="container text-center my-5">
          <h1 className="font-weight-light">
              My <span className="text-info"> Blogs</span>
          </h1>
          <div className="lead">I share my views on technologies in these blogs</div>
          <div className="row my-5 pt-3">
            
                <div className="col-12 col-md-4 my-2">
                    <div className="card shadow h-100">
                      <img className="card-img-top "
                          src={work1}
                          alt="sabiha"
                           />

                      <div className="card-body">
                          <h4 className="card-title">
                              Project 1
                          </h4>
                          <p className="card-text">This is my project about...</p>
                          <a href="/" className="stretched-link"></a>
                      </div>
                  </div> 
               </div>




              <div className="col-12 col-md-4 my-2">
                  <div className="card  shadow h-100">
                      <img className="card-img-top " 
                      src={work1}
                       alt="sabiha" 
                      />

                      <div className="card-body">
                          <h4 className="card-title">
                              Project 2
                          </h4>
                          <p className="card-text">This is my project about...</p>
                          <a href="/" className="stretched-link"></a>
                      </div>
                  </div>
              </div>






              <div className="col-12 col-md-4 my-2">
                  <div className="card  shadow h-100">
                      <img className="card-img-top "
                       src={work1}
                       alt="sabiha"
                        />

                      <div className="card-body">
                          <h4 className="card-title">
                              Project 3
                          </h4>
                          <p className="card-text">This is my project about...</p>
                          <a href="/" className="stretched-link"></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="my-5">
              <a href="/" className="text-dark text-right">
                  <h5>
                      see my Projects
                      <i className="fas fa-arrow-right align-middle"></i>
                  </h5>
              </a>
         </div>
           </div>
         
     

  );
}
export default ProjectSection; 