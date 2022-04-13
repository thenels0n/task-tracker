import React from "react";

export default function Button(props) {

    return (

        <button 
            onClick={props.toggleAddTaskButton} 
            className="btn"
            style={{backgroundColor: props.bg}}>
                { props.text }
        </button>
    )
}