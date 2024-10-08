import React, { useState, useMemo } from 'react';
import Counter from '../components/Counter';
import List from '../components/ItemList';
import ThemeButton from '../components/TemaButton';
import { useTheme } from '../context/TemaContext';

const Home: React.FC = () => {
    const [list, setList] = useState([1, 2, 3]);
    const { theme } = useTheme();

    const calculoSuma = useMemo(() => {
        console.log('Cálculo costoso ejecutado');
        return list.reduce((acc, num) => acc + num, 0);
    }, [list]);

    const pageStyle = {
        backgroundColor: theme === 'claro' ? '#fff' : '#333',
        color: theme === 'claro' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.5s ease, color 0.5s ease',
    };

    return (
        <div style={pageStyle}>
            <h1>Aplicación de react con TSX </h1>
            <Counter />
            <List items={list} />
            <button onClick={() => setList([...list, list.length + 1])}>Agregar Item</button>
            <p>Resultado del calculo: {calculoSuma}</p>
            <ThemeButton />
        </div>
    );
};

export default Home;
