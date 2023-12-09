import React,{useState,useEffect} from "react";
import "./Board2.css";
import Card2 from "../Card2/Card2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEllipsis,faCircle,faCircleExclamation,faClock,faCircleCheck,faCircleXmark,faAngleRight,faAnglesRight,faBolt, faExclamation, faMeteor, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';

function createCard(ticket,numberId){
    // console.log(numberId);
    var prioritySymbol="";
    if(ticket.priority==0){
        prioritySymbol=faEllipsis;
    }
    else if(ticket.priority==4){
        prioritySymbol=faExclamation;
    }
    else if(ticket.priority==3){
        prioritySymbol=faBolt;
    }
    else if(ticket.priority==2){
        prioritySymbol=faAnglesRight;
    }
    else{
        prioritySymbol=faAngleRight;
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
    // console.log(numberId);

    if(ticket.userId===numberId){
        return <Card2
            name={ticket.id}
            title={ticket.title}
            tag={ticket.tag[0]}
            mid={statusSymbol}
            priority={prioritySymbol}
        />
    }
}

function Board2(props){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
            .then((result) => result.json())
            .then((resp) => {
                setData(resp);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const tickets=data.tickets || [];
    var numberId=props.whatToShow;
    // console.log(numberId);

    return(
        <div className="board">
            <div className="title">
                <p ><FontAwesomeIcon className="board-icn" />{props.title}</p>
                <div className="icons">
                    <p className="addIcons"><FontAwesomeIcon className="board-third-icn" icon={faEllipsis}/></p>
                    <p className="addIcons"><FontAwesomeIcon className="board-second-icn" icon={faPlus}/></p>
                </div>
            </div>
            {tickets && tickets.map((ticket) => createCard(ticket, numberId))}
        </div>
    )
}

export default Board2;