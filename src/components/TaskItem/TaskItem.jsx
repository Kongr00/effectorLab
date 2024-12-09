import React from "react";
import cls from './TaskItem.module.css'
const TaskItem = ({ task, onEdit, onDelete }) => {
    return (
            <div className={cls.taskItem}>
                <div className={cls.contentArea}>
                    <div className={cls.title}>{task.name}</div>
                    <div className={cls.description}>{task.description}</div>
                </div>


                <div className={cls.controlsArea}>
                    <button onClick={() => onEdit(task.id)}>Edit</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            </div>



    );
};

export default TaskItem;
