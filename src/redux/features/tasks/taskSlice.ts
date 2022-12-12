import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTask, deleteTask, filterTasks, updateTask } from "./service";
import { CreateTaskResponse, FilterTaskResponse, TaskState } from "./types";

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: false,
    message: '',
};

const taskSlice = createSlice({
    name: 'Task',
    initialState,
    reducers: {
        toggleTask: (state, action) => {
            const index = action.payload.index;
            const tasksCopy = [...state.tasks];
            if(tasksCopy[index]) {
                tasksCopy[index].completed = !tasksCopy[index].completed;
                state.tasks = tasksCopy;
            }
        },
        dropTask:  (state, action) => {
            const index = action.payload.index;
            const tasksCopy = [...state.tasks];
            if(tasksCopy[index]) {
                tasksCopy.splice(index, 1);
                state.tasks = tasksCopy;
            }
        },
    },
    extraReducers: (builder) => {
        // CASE 1: filter the tasks created by me.
        builder.addCase(filterTasks.pending, (state: TaskState) => {
            state.loading = true;
            state.error = false;
            state.message = '';
        });
        builder.addCase(filterTasks.fulfilled, (state: TaskState, action: PayloadAction<FilterTaskResponse>) => {
            state.loading = false;
            state.error = false;
            state.message = '';
            if (action.payload.data) {
                state.tasks = action.payload.data;
            }
        });
        builder.addCase(filterTasks.rejected, (state: TaskState) => {
            state.loading = false;
            state.error = true;
            state.message = 'Error loading the tasks list.';
        });

        // CASE 2: create a task.
        builder.addCase(createTask.pending, (state: TaskState) => {
            state.loading = true;
            state.error = false;
            state.message = '';
        });
        builder.addCase(createTask.fulfilled, (state: TaskState, action: PayloadAction<CreateTaskResponse>) => {
            state.loading = false;
            state.error = false;
            state.message = '';
            if (action.payload.task) {
                state.tasks = [action.payload.task, ...state.tasks];
            }
        });
        builder.addCase(createTask.rejected, (state: TaskState) => {
            state.loading = false;
            state.error = true;
            state.message = 'Error creating the task.';
        });

        // CASE 3: Edit a task(toggle).
        builder.addCase(updateTask.pending, (state: TaskState) => {
            state.loading = true;
            state.error = false;
            state.message = '';
        });
        builder.addCase(updateTask.fulfilled, (state: TaskState, action: PayloadAction<CreateTaskResponse>) => {
            state.loading = false;
            state.error = false;
            state.message = '';
        });
        builder.addCase(updateTask.rejected, (state: TaskState) => {
            state.loading = false;
            state.error = true;
            state.message = 'Error updating the task.';
        });

        // CASE 4: Delete a task.
        builder.addCase(deleteTask.pending, (state: TaskState) => {
            state.loading = true;
            state.error = false;
            state.message = '';
        });
        builder.addCase(deleteTask.fulfilled, (state: TaskState, action: PayloadAction<CreateTaskResponse>) => {
            state.loading = false;
            state.error = false;
            state.message = '';
        });
        builder.addCase(deleteTask.rejected, (state: TaskState) => {
            state.loading = false;
            state.error = true;
            state.message = 'Error updating the task.';
        });
    }
});

const { reducer } = taskSlice;
export const { toggleTask, dropTask } = taskSlice.actions;
export default reducer;