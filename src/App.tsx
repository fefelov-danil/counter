import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch} from "react-redux";
import {localStorageValueAC} from "./reducers/reducers";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(localStorageValueAC())
    }, [])

    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
