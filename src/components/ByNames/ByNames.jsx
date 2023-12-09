import React, { useEffect, useState } from "react";
import "./ByNames.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleExclamation, faClock, faCircleCheck, faCircleXmark, faEllipsis, faAnglesRight, faAngleRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import Board2 from "../Board2/Board2";

function createBoard(u,user) {
    // console.log(u.Id);
    return (
        <div>
            <Board2 title={u.name} whatToShow={u.id}/>
        </div>
    )
}

function ByNames() {
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

    const user = data.users || []; // Ensure user is defined or provide a default empty array

    return (
        <div className="app_outer">
            <div className="app_boards">
                {user && user.map((u)=>createBoard(u,user))}
                {/* {user.map(createBoard)}
                {tickets && tickets.map((ticket) => createCard(ticket, props.title))} */}
            </div>
        </div>
    )
}

export default ByNames
