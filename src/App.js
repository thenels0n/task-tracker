import React from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

import taskArray from './tasks'


export default function App() {

    const [tasks, setTasks] = React.useState(taskArray)
    const [addTask, setAddTask] = React.useState(false)

    // Delete Task
    function deleteTask(id) {
        console.log("deleteTask", id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    function toggleReminder(id) {
        console.log('toggle reminder for', id)
        setTasks(tasks.map((task) => task.id === id ? 
            {...task,reminder: !task.reminder} : task))
    }

    // Toggle AddTask Button
    function toggleAddTaskButton() {
        setAddTask(prevState => !prevState)
    }

    // Add Task
    function addNewTask(task) {     

        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks(prevTask => [
            ...prevTask, newTask
        ])

    }

    return (

        <div className="container">
            <Header 
                toggleAddTaskButton={toggleAddTaskButton}
                addTask={addTask}
            />

            { addTask && <AddTask addNewTask={addNewTask}/> }

            { tasks.length > 0 ? <Tasks 
                tasks={tasks} 
                deleteTask={deleteTask} 
                toggleReminder={toggleReminder}
            /> : 'No Task'}
        </div>
    )
}