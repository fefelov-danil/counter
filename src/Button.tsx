import React from 'react';

type ButtonPropsType = {
    name: string
    isDisabled: boolean
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className="main-btn" disabled={props.isDisabled} onClick={props.callBack}>{props.name}</button>
    );
};