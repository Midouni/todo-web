
export interface AuthState {
    loading: boolean;
    error: boolean;
    message: string;
    currentUser: User|null,
    token: string|null,
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface SignUpRequest {
    name: string;
    email: string;
    password: string;
}

export interface SignUpResponse {
    success: boolean;
    code: number;
    user: User;
};

export interface SignIntRequest {
    email: string;
    password: string;
}

export interface SignInResponse {
    success: boolean;
    code: number;
    user: User;
    token: string;
}