import React, {useEffect} from 'react';
import './Settings.css';
import {MaxValue} from "./MaxValue";
import {StartValue} from "./StartValue";
import {Button} from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import {changeValueAC, localStorageValueAC, setAC, StateType} from "../../reducers/reducers";
import {AppRootStateType} from "../../reducers/store";


export const Settings = () => {

    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType, StateType>(state => state.counterReducer)

    const callBackHandler = () => {
        dispatch(setAC())
    }

    const changeMaxValue = (maxValue: number) => {
        dispatch(changeValueAC(counter.startValue, maxValue))
    }
    const changeStartValue = (startValue: number) => {
        dispatch(changeValueAC(startValue, counter.maxValue))
    }

    useEffect(() => {
        dispatch(localStorageValueAC())
    }, [])

    return (
        <div className={"settings-block"}>
            <div className="max-n-start">
                <MaxValue
                    incorrectMaxValue={counter.incorrectMaxValue}
                    changeMaxValue={changeMaxValue}/>
                <StartValue
                    incorrectStartValue={counter.incorrectStartValue}
                    changeStartValue={changeStartValue}/>
            </div>
            <Button name={"set"} isDisabled={counter.btnIsDisabled} callBack={callBackHandler}/>
        </div>
    );
};