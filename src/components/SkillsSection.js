import React from "react";
function SkillsSection() {
    const Skills =[
        {
            id: 1,
            name:"HTML",
            imageUrl:
            "http://storage.googleapis.com/unschool-portfolio-website/react.png" ,
            starsTotal:3,
            starAction:3,
           },    
        {
            id: 2,
            name:"CSS",
            imageUrl:
            "https://images.app.goo.gl/HwVrdeB9VMC4yW2CA" ,
            starsTotal:3,
            starAction:3,
        },
        {
            id: 3,
            name:"JS",
            imageUrl:
            "https://images.app.goo.gl/HwVrdeB9VMC4yW2CA" ,
            starsTotal:3,
            starAction:2,   
        },
        {
            id: 4,
            name:"BS4",
            imageUrl:
            "https://images.app.goo.gl/To8KR9uRDcQ5kyeg9" ,
            starsTotal:3,
            starAction:1,   
        },
        {
            id: 5,
            name:"React.js",
            imageUrl:
            "https://images.app.goo.gl/vnhoFKPLLdAYSfpLA" ,
            starsTotal:3,
            starAction:3,   
        },
        {
            id: 6,
            name:"My SQL",
            imageUrl:
            "https://images.app.goo.gl/r5tqpQVTKxtC7WEX8" ,
            starsTotal:3,
            starAction:2,   
        },
        {
            id: 7,
            name:"Python",
            imageUrl:
            "https://images.app.goo.gl/LrXXJvbAGj2d4S7d6" ,
            starsTotal:3,
            starAction:3,   
        },
        {
            id: 8,
            name:"Flask",
            imageUrl:
            "https://images.app.goo.gl/EMPQ67q8fDcL6giS7" ,
            starsTotal:3,
            starAction:2,   
        },
    ];
   
    const finalSkillRow = [];

    for (let i=0; i< 2; i++) {
        let skillRow =  Skills.slice(i*4,(i+1)*4);
     
     
        finalSkillRow.push(
        <div className="d-flex justify-content-around py-3">
            {
 skillRow.map((skill) => (
    <skill skill={skill} />
  
      ))}
           
      </div>
        );
    }    
    return(
        <div className="bg-light w-100">
<div className="container text-center py-5">
    <h1 className="font-weight-light ">
  <span className= "text-info">Technology</span> Stack
  </h1>
  <div className="lead pb-5">
    I design, develop and deliver with these weapons</div>

<div className="d-flex justify-content-around py-3">
<div>
<img 
    // className=" img-fluid rounded-circle w-75"
    className="rounded-circle "
    src={html}  
    alt="html"
    style={{width:" 100px", height:"100px"}}/> 
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={css}  
     className="rounded-circle "
    alt="css"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={js} 
     className="rounded-circle " 
    alt="js"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
    src={bootstrap} 
    className="rounded-circle " 
    alt="bootstrap"
    style={{width:" 100px", height:"100px"}}/>
    </div>
    </div>

<div class="d-flex justify-content-around py-3">
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={html} 
     className="rounded-circle " 
    alt="html"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={css}
     className="rounded-circle "  
    alt="css"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={bootstrap}
     className="rounded-circle "  
    alt="bootstarp"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={js} 
     className="rounded-circle " 
    alt="js"
    style={{width:" 100px", height:"100px"}}/>

</div>
  </div>



    <div class="d-flex justify-content-around py-3">
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={react} 
     className="rounded-circle " 
    alt="react"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={Flask}
     className="rounded-circle "  
    alt="flask"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={mysql}
     className="rounded-circle "  
    alt="mysql"
    style={{width:" 100px", height:"100px"}}/>
    <img 
    // className=" img-fluid rounded-circle w-75"
     src={python} 
     className="rounded-circle " 
    alt="python"
    style={{width:" 100px", height:"100px"}}/>

</div>
  

{finalSkillRow}

</div>

);
    
  
    
  
}
export default SkillsSection;