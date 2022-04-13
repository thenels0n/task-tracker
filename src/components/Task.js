import React from "react";



export default function Task(props) { 

    return ( 

        <div 
            onDoubleClick={() => props.toggleReminder (props.task.id)} 
            className={`task ${props.task.reminder ? 'reminder' : ''}`}>

            <h4>{props.text} 
                <span onClick={() => props.deleteTask (props.task.id)}>x</span>
            </h4>
            <h6>{props.day}</h6>
        </div>
    )
}