import './App.css';
import React, { useEffect, useState } from 'react';
import fn from '@/text';
function App() {
    const [count, setcount] = useState<number>(0);
    useEffect(() => {
        fn();
    }, []);

    return (
        <div className="App">
            <span style={{ background: 'react.svg' }}>{count}</span>
            <h1>hello vite</h1>
            <button onClick={() => setcount(count + 1)}>点我增加</button>
        </div>
    );
}

export default App;
