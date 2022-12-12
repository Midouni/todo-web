import axios, {AxiosError} from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTaskRequest, DeleteTaskRequest, FilterTaskRequest, UpdateTaskRequest } from "./types";
import { tasksUrl, tasksUrlWithId } from '../../api.routes';

export const filterTasks = createAsyncThunk(
    'tasks/filter',
    async (payload: FilterTaskRequest, { rejectWithValue }) => {
        try {
            const res = await axios.get(tasksUrl, {
                params: payload,
                headers: {
                    'x-api-key': localStorage.getItem('access-token'),
                },
            });
            return res.data;
        } catch (err) {
            const error = err as AxiosError;
            if (error) {
                // Use `err.response.data` as `action.payload` for a `rejected` action,
                return rejectWithValue(error?.response?.data);
            }
        }
    }
);

export const createTask = createAsyncThunk(
    'tasks/create',
    async (payload: CreateTaskRequest, { rejectWithValue }) => {
        try {
            const res = await axios.post(tasksUrl, payload, {
                headers: {
                    'x-api-key': localStorage.getItem('access-token'),
                },
            });
            return res.data;
        } catch (err) {
            const error = err as AxiosError;
            if (error) {
                // Use `err.response.data` as `action.payload` for a `rejected` action,
                return rejectWithValue(error?.response?.data);
            }
        }
    }
)

export const updateTask = createAsyncThunk(
    'tasks/update',
    async (payload: UpdateTaskRequest, { rejectWithValue }) => {
        try {
            const {id, completed} = payload;
            const res = await axios.put(tasksUrlWithId(id), { completed }, {
                headers: {
                    'x-api-key': localStorage.getItem('access-token'),
                },
            });
            return res.data;
        } catch (err) {
            const error = err as AxiosError;
            if (error) {
                // Use `err.response.data` as `action.payload` for a `rejected` action,
                return rejectWithValue(error?.response?.data);
            }
        }
    }
)
export const deleteTask = createAsyncThunk(
    'tasks/delete',
    async (payload: DeleteTaskRequest, { rejectWithValue }) => {
        try {
            const { id } = payload;
            const res = await axios.delete(tasksUrlWithId(id), {
                headers: {
                    'x-api-key': localStorage.getItem('access-token'),
                },
            });
            return res.data;
        } catch (err) {
            const error = err as AxiosError;
            if (error) {
                // Use `err.response.data` as `action.payload` for a `rejected` action,
                return rejectWithValue(error?.response?.data);
            }
        }
    }
)
