import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation,faCircle,faUser } from '@fortawesome/free-solid-svg-icons'
import './Card.css';

function Card(props){
    return <div className="cardFull">
        <p className="first">{props.name}</p>
        <FontAwesomeIcon className="human" icon={faUser} />
        <p className="content"><b>{props.title}</b></p>
        <p className="icn"><FontAwesomeIcon icon={props.priority} /></p>
        <p className="what"><FontAwesomeIcon className="circle" icon={faCircle} />{props.tag}</p>
    </div>
}

export default Card;