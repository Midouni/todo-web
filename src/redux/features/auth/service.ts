import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignIntRequest, SignUpRequest } from "./types";
import { signInUrl, signUpUrl } from '../../api.routes';

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload: SignUpRequest, { rejectWithValue }) => {
        try {
            const res = await axios.post(signUpUrl, payload);
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

export const signIn = createAsyncThunk(
    'auth/signin',
    async (payload: SignIntRequest, { rejectWithValue }) => {
        try {
            const res = await axios.post(signInUrl, payload);
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
