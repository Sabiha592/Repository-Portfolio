import React, { Component } from "react";
class WriteRecommendation extends Component{
    
   state = {
        name:"",
        email:"",
        company:"",
        designation:"",
        recommendationMessage:"",
        submitMessage:"",
        submitMessageTextcolor:"",
   };


    onChange = (event) => {
        
        this.setState({
         [event.target.name]: event.target.value,
        });
    };
     onSubmit = (event) => {
         event.preventDefault();

 let isSuccessful = true;
 const {name} = this.state;

 if (isSuccessful) {
     this.setState({
         submitMessage:`Thank you ${name} for the recommendation! I really appreciate your thought :)`,
         submitMessageTextColor:"text-info",
     });
 } else {
     this.setState({
         submitMessage:"Oops! Something went wrong. Please try again later :(",
         submitMessageTextColor:"text-danger",
     });
  }  
};
     render() { 
        const {  submitMessageTextColor , submitMessage } = this.state;
    
     return (
        <div className="container my-5">
            <h1 className="font-weight-light text-center py-5">
          
                          
                <span className="text-info "> Thank you!</span> for your taking your time
            </h1>
         <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                            type="text" 
                            name="name" 
                            className="form-control" 
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Company/Institution">Company/Institution*</label>
                            <input 
                            type="Company/Institution" 
                            name="Company/Institution" 
                            className="form-control" 
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Designation">Designation*</label>
                            <input 
                            type="Designation" 
                            name="Desigantion" 
                            className="form-control" 
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Recommendation">
                            Recommendation *
                            </label>
                            <textarea 
                            className="form-control"
                                name="description"
                                rows="5"
                                onChange={this.onChange}>
                            </textarea>
                        </div>
                          <button
                          type="submit"
                          className="btn btn-dark float-right"
                          style ={{backgroundColor:"Red"}}
                          >
                           Lot's of Love!
                          </button>
                </form>
             </div>
          </div>

            <div className="py-5 mx-2 text-center">
                
                    <h5 clasName={submitMessageTextColor}>{submitMessage}</h5>
                
            </div>
      </div>
      
      
           
    );
      }
         }
export default WriteRecommendation;