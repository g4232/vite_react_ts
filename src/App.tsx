import './App.css';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Toolbar from '../compents/Toolbar';
import { themes, Topic } from './interface';
import TopicDiv from '../compents/topic';
export const ThemeContent = React.createContext(themes);

export default function App() {
    const [data, setdata] = useState<Topic[]>([]);
    const getTopic = useCallback(async () => {
        const result = await axios.get<Topic[]>('/api/topic');
        setdata(result.data);
    },[data]);
    useEffect(() => {
        getTopic();
    }, []);
    return (
        <ThemeContent.Provider value={themes}>
            <Toolbar />
            <TopicDiv props={data} />
        </ThemeContent.Provider>
    );
}
