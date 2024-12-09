import React, { useState } from "react";
import { useUnit } from "effector-react";
import { taskStore, addTask, deleteTask, editTask, updateTask, cancelEdit } from "../../store/index.js";
import TaskList from "../TaskList/TaskList.jsx";
import cls from './TaskManager.module.css'
const TaskManager = () => {
    const { tasks, currentTask } = useUnit(taskStore);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleAddTask = () => {
        if (taskName.trim() !== "") {
            addTask({ id: Date.now(), name: taskName, description: taskDescription});
            setTaskName("");
        }
    };

    const handleEditTask = (id) => {
        editTask(id);
        const task = tasks.find((task) => task.id === id);
        if (task) setTaskName(task.name);
    };

    const handleUpdateTask = () => {
        if (currentTask && taskName.trim() !== "") {
            updateTask({ ...currentTask, name: taskName, description: taskDescription});
            setTaskName("");
        }
    };

    return (
        <div className={cls.container}>
            <div className={cls.addForm}>
                <div className={cls.inputArea}>
                    <input
                        type="text"
                        placeholder="Enter task name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter task Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                </div>

                {currentTask ? (
                    <>
                        <button onClick={handleUpdateTask}>Update Task</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </>
                ) : (
                    <button onClick={handleAddTask}>Add Task</button>
                )}
            </div>

            <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={deleteTask} />
        </div>
    );
};

export default TaskManager;
