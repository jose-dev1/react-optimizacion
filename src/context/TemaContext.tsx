import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

type TemaProviderProps = {
    children: ReactNode;
};

const TemaContext = createContext<ThemeContextType | undefined>(undefined);

export const TemaProvider: React.FC<TemaProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('claro');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'claro' ? 'oscuro' : 'claro'));
    };

    return (
        <TemaContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </TemaContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(TemaContext);
    if (!context) throw new Error('No está usando el TemaProvider');
    return context;
};
