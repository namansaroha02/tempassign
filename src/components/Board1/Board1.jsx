import React from "react";
import "./Board1.css";
import Card1 from "../Card1/Card1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEllipsis,faCircle,faCircleExclamation,faClock,faCircleCheck,faCircleXmark,faAngleRight,faAnglesRight,faBolt, faExclamation} from '@fortawesome/free-solid-svg-icons';

// let count0=0,count1=0,count2=0,count3=0,count4=0;

function createCard(ticket,boardPriority){
    // console.log(ticket.title);
    var temp="";
    if(boardPriority=="No Priority"){
        temp=0;
    }
    else if(boardPriority=="Urgent"){
        temp=4;
    }
    else if(boardPriority=="High"){
        temp=3;
    }
    else if(boardPriority=="Medium"){
        temp=2;
    }
    else{
        temp=1;
    }
    var statusSymbol=null;
    if(ticket.status=="Todo"){
        statusSymbol=faCircle;
    }
    else if(ticket.status=="In progress"){
        statusSymbol=faClock;
    }
    else if(ticket.status=="Backlog"){
        statusSymbol=faCircleExclamation;
    }
    else if(ticket.status=="Done"){
        statusSymbol=faCircleCheck;
    }
    else{
        statusSymbol=faCircleXmark;
    }
    if(ticket.priority===temp){
        return <Card1
            name={ticket.id}
            title={ticket.title}
            tag={ticket.tag[0]}
            mid={statusSymbol}
        />
    }
}

function Board1(props){
    // console.log(props.whatToShow);
    var tickets=props.whatToShow;
    // console.log(tickets);

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

export default Board1;