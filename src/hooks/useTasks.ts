import { useEffect, useState } from "react";
import { createTask, deleteTask, filterTasks, updateTask } from "../redux/features/tasks/service";
import { dropTask, toggleTask } from "../redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "./useReduxHooks"

export function useTasks(){
    const filters = [
        {label: 'All', value: undefined},
        {label: 'Completed', value: true},
        {label: 'Incompleted', value: false},
    ]
    const [filterBy, setFilterBy] = useState<{label: string, value: any}>(filters[0]);
    
    const dispatch = useAppDispatch();
    const { tasks, loading, error, message } = useAppSelector(state => state.Task);

    const getTasks = (completed?: boolean) => {
        dispatch(filterTasks({ completed }));
    }
    
    const addTask = (title: string) => {
        dispatch(createTask({ title }));
    }

    const taskClick = (index: number) => {
        const task = tasks[index];
        dispatch(toggleTask({index}));
        dispatch(updateTask({completed: !task.completed, id: task.id}));
    }

    const removeTask = (index: number) => {
        const task = tasks[index];
        dispatch(dropTask({index}));
        dispatch(deleteTask({ id: task.id }));
    }

    useEffect(() => {
        getTasks(filterBy.value);
    }, [filterBy]);

    return {
        tasks,
        loading,
        error,
        message,
        getTasks,
        addTask,
        setFilterBy,
        filters,
        filterBy,
        taskClick,
        removeTask,
    }
}