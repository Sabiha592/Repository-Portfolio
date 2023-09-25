import React from "react";
import RecommendationCard from "./RecommendationCard";
import { v4 as uuid } from "uuid";




function RecommendationSection(){
    const recommendations = [
        { 
            id:1,
            name:"Random guy 1",
            company:"ABC company",
            designation:"CEO",
            message:"she is good engineer",
        },
        { 
            id:2,
            name:"Random guy 2",
            company:"DCE company",
            designation:"CEO",
            message:"she is good engineer",
        },
        { 
            id:3,
            name:"Random guy 3",
            company:"ABC company",
            designation:"Director",
            message:"she is very quick at learning",
        },
        { 
            id:4,
            name:"Random guy 4",
            company:"DCE company",
            designation:"Manager",
            message:"she is has leadership Qualities",
        },
    ];
    return (
        <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                {recommendations.map((recommendation)=>(
                    <RecommendationCard key={uuid()} recommendation={recommendation} />
                ))}
            </div>
        </div>
    );
}

export default RecommendationSection;
// import React, { Component } from "react";
// import { Card, Button, Modal } from "react-bootstrap";

// class RecommendationCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showModal: false,
//     };
//   }

//   handleShowModal = () => {
//     this.setState({ showModal: true });
//   };

//   handleCloseModal = () => {
//     this.setState({ showModal: false });
//   };

//   render() {
//     const { recommendation } = this.props;
//     const trimmedMessage =
//       recommendation.message.length > 35
//         ? recommendation.message.slice(0, 35) + "..."
//         : recommendation.message;

//     return (
//       <div>
//         <Card>
//           <Card.Body>
//             <Card.Title>{recommendation.name}</Card.Title>
//             <Card.Text>{trimmedMessage}</Card.Text>
//             <Button variant="primary" onClick={this.handleShowModal}>
//               Read More
//             </Button>
//           </Card.Body>
//         </Card>

//         {/* Modal */}
//         <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>{recommendation.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>{recommendation.message}</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleCloseModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default RecommendationCard;
