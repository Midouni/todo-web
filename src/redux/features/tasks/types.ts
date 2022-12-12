export interface TaskState {
    loading: boolean;
    error: boolean;
    message: string;
    tasks: Task[];
}

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface FilterTaskRequest {
    completed?: boolean;
}

export interface CreateTaskRequest {
    title: string;
}

export interface CreateTaskResponse {
    success: boolean;
    code: number;
    task: Task;
}

export interface UpdateTaskRequest {
    id: number;
    completed: boolean;
}

export interface DeleteTaskRequest {
    id: number;
}

export interface FilterTaskResponse {
    success: boolean;
    code: number;
    data: Task[];
}