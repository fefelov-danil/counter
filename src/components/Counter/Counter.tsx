import React from 'react';
import './Counter.css';
import {Display} from "./Display";
import {Button} from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {pushIncAC, pushResetAc, StateType} from "../../reducers/reducers";


export const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType, StateType>(state => state.counterReducer)

    const pushInc = () => {
        dispatch(pushIncAC())
    }
    const pushReset = () => {
        dispatch(pushResetAc())
    }

    return (
        <div className="counter-block">
            <Display/>
            <Button
                name="inc"
                isDisabled={counter.isDisabledInc}
                callBack={pushInc}/>
            <Button
                name="reset"
                isDisabled={counter.isDisabledReset}
                callBack={pushReset}/>
        </div>
    );
};