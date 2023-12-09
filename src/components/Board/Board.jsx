import React from "react";
import "./Board.css";
import Card from "../card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEllipsis,faCircle,faCircleExclamation,faClock,faCircleCheck,faCircleXmark,faAngleRight,faAnglesRight,faBolt} from '@fortawesome/free-solid-svg-icons';

function createCard(ticket,boardTitle){
    var prioritySymbol="";
    if(ticket.priority==0){
        prioritySymbol=faEllipsis;
    }
    else if(ticket.priority==1){
        prioritySymbol=faAngleRight;
    }
    else if(ticket.priority==2){
        prioritySymbol=faAnglesRight;
    }
    else if(ticket.priority==3){
        prioritySymbol=faBolt;
    }
    else{
        prioritySymbol=faCircleExclamation
    }
    if(ticket.status===boardTitle){
        return <Card
            name={ticket.id}
            title={ticket.title}
            tag={ticket.tag[0]}
            priority={prioritySymbol}
        />
    }
}

function Board(props){
    // console.log(props.whatToShow);
    var tickets=props.whatToShow;

    return(
        <div className="board">
            <div className="title">
                <p ><FontAwesomeIcon className="board-icn" icon={props.icn} />{props.title}</p>
                <div className="icons">
                    <p className="addIcons"><FontAwesomeIcon className="board-third-icn" icon={faEllipsis}/></p>
                    <p className="addIcons"><FontAwesomeIcon className="board-second-icn" icon={faPlus}/></p>
                </div>
            </div>
            {tickets && tickets.map((ticket) => createCard(ticket, props.title))}
        </div>
    )
}

export default Board;