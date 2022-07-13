import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {StateType} from "../../reducers/reducers";

type MaxValuePropsType = {
    incorrectMaxValue: boolean
    changeMaxValue: (value: number) => void
}

export const MaxValue = (props: MaxValuePropsType) => {

    const counter = useSelector<AppRootStateType, StateType>(state => state.counterReducer)


    return (
        <div className={props.incorrectMaxValue ? "value incorrect-value max-value" : "value max-value"}>
            <span>max value: </span>
            <input
                type={"number"}
                value={counter.maxValue}
                onChange={ (e) => {props.changeMaxValue(+e.currentTarget.value)} } />
        </div>
    );
};