import React from "react";
import Button from "./Button"


function Header(props) { 
    return (
        <header>
            <>
                <button className="left-button"></button>
                <h1>Task Tracker</h1>
            </>
            <Button 
                toggleAddTaskButton={props.toggleAddTaskButton} 
                bg={ props.addTask ? 'red' : 'rgb(116, 187, 245)'}
                text = { props.addTask ? 'Close' : 'Add Task'}
            />
        </header>
    )
}


export default Header