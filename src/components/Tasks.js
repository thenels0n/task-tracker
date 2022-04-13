import React from "react";
import Task from "./Task";

export default function Tasks(props) { 

    const taskElements = props.tasks.map((task) => (
        <Task
            task={task} 
            key={task.id} 
            text={task.text} 
            day={task.day}
            deleteTask={props.deleteTask}
            toggleReminder={props.toggleReminder}
        />
    ))

    return ( 

        <>
            {taskElements}
        </>
    )
}