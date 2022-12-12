import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import taskSlice from './features/tasks/taskSlice';

const rootReducer = combineReducers({
    Auth: authSlice,
    Task: taskSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
