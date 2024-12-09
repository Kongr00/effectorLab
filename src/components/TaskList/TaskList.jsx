import React from "react";
import TaskItem from "../TaskItem/TaskItem.jsx";


const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>

    );
};

export default TaskList;
