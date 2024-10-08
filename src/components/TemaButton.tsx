import React from 'react';
import { useTheme } from '../context/TemaContext';

const ThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: theme === 'claro' ? '#000' : '#fff',
                color: theme === 'claro' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
            }}
        >
            Cambiar a tema {theme === 'calaro' ? 'oscuro' : 'claro'}
        </button>
    );
};

export default ThemeButton;
