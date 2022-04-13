import React from "react";


export default function AddTask(props) { 

    const [text, setText] = React.useState('')
    const [day, setDay] = React.useState('')
    const [reminder, setReminder] = React.useState(false)

    function onSubmit(e) {
        e.preventDefault()

        if (!text) { 
            alert('Please add a Text')
            return
        }

        props.addNewTask({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (

        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add a task" 
                    value={text}
                    onChange={(e) => setText(e.target.value) }
                />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text" 
                    placeholder="Add day & time" 
                    value={day}    
                    onChange={(e) => setDay(e.target.value) }

                />
            </div>

            <div className="form-control-check">
                <label>Reminder</label>
                <input 
                    type="checkbox"  
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked) }
                />
            </div>

            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}