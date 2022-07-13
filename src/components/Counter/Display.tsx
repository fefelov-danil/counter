import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {StateType} from "../../reducers/reducers";


export const Display = () => {

    const counter = useSelector<AppRootStateType, StateType>(state => state.counterReducer)

    let displayValue: string | number = ''
    let displayClass = counter.isDisabledInc ? "red display" : "display"
    switch(counter.displayCondition) {
        case 'setting' :
            displayValue = "enter values and press 'set'"
            displayClass = "text display"
            break
        case "error":
            displayValue = "incorrect value"
            displayClass = "text red display"
            break
        default:
            displayValue = counter.currentValue
    }
    return (
        <div className={displayClass}>
            <p>{displayValue}</p>
        </div>
    );
};