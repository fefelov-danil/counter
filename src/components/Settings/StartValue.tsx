import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {StateType} from "../../reducers/reducers";

type StartValuePropsType = {
    incorrectStartValue: boolean
    changeStartValue: (value: number) => void
}

export const StartValue = (props: StartValuePropsType) => {

    const counter = useSelector<AppRootStateType, StateType>(state => state.counterReducer)


    return (
        <div className={props.incorrectStartValue ? "value incorrect-value start-value" : "value start-value"}>
            <span>start value: </span>
            <input
                type={"number"}
                value={counter.startValue}
                onChange={ (e) => {props.changeStartValue(+e.currentTarget.value)} }/>
        </div>
    );
};