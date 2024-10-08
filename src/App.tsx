import React from 'react';
import {TemaProvider} from "./context/TemaContext.tsx";
import Home from "./page/Home.tsx";


const App: React.FC = () => {
    return (
        <TemaProvider>
            <Home />
        </TemaProvider>
    );
};

export default App;
