import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const AuthContext = createContext();

// Создаем провайдер
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        role: null,
    });

    const login = (user, role) => {
        setAuthState({
            isAuthenticated: true,
            user,
            role,
        });
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
            role: null,
        });
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для использования контекста
export const useAuth = () => useContext(AuthContext);
