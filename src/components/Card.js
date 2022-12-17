import React from "react";
import "./Card.css";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

function Cards(props) {

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white'
  }

  return (
    <div className="card container" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white'}}>
      <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" style={{color: props.mode === 'dark' ? 'gold' : 'black'}}>{props.name}</h5>
        <p className="card-text" style={myStyle}>
          {props.location} {props.city}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={myStyle}>
          <span>Rent :-</span> {props.rent}
        </li>
        <li className="list-group-item" style={myStyle}>
          {" "}
          <span>Category :-</span> {props.category}
        </li>
        <li className="list-group-item" style={myStyle}></li>
      </ul>
      <a href="#" className="btn btn-primary dropdown-button" >
        Add to favourites
      </a>
    </div>
  );
}

export default Cards;

// function Card(props) {
//   return (
//     <div className="card">
//       <img src= className="card-img-top" alt="Avatar" />
//       <div className="card-body">
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item"></li>
//           <li className="list-group-item"></li>
//           <li className="list-group-item"></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Card;
