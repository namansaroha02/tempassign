import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation,faCircle,faUser } from '@fortawesome/free-solid-svg-icons'
import './Card1.css';

function Card1(props){
    return <div className="cardFull">
        <p className="first">{props.name}</p>
        <FontAwesomeIcon className="human" icon={faUser} />
        <div className="mainForCard2">
        <FontAwesomeIcon className="middleIcon" icon={props.mid} />
            <div>
                <p className="content"><b>{props.title}</b></p>
            </div>
        </div>
        <p className="what"><FontAwesomeIcon className="circle" icon={faCircle} />{props.tag}</p>
    </div>
}

export default Card1;