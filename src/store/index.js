import { createEvent, createStore } from "effector";

export const addTask = createEvent();
export const deleteTask = createEvent();
export const editTask = createEvent();
export const updateTask = createEvent();
export const cancelEdit = createEvent();

const initialState = {
    tasks: [],
    currentTask: null,
};

export const taskStore = createStore(initialState)
    .on(addTask, (state, task) => ({
        ...state,
        tasks: [...state.tasks, task],
    }))
    .on(deleteTask, (state, id) => ({
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
    }))
    .on(editTask, (state, id) => ({
        ...state,
        currentTask: state.tasks.find((task) => task.id === id) || null,
    }))
    .on(updateTask, (state, updatedTask) => ({
        ...state,
        tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        ),
        currentTask: null,
    }))
    .on(cancelEdit, (state) => ({
        ...state,
        currentTask: null,
    }));
