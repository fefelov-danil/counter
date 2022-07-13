export type StateType = typeof initialState
export type displayConditionType = 'included' | 'setting' | 'error'

const initialState = {
    maxValue: 100,
    startValue: 0,
    currentValue: 0,
    displayCondition: 'included' as displayConditionType,
    incorrectMaxValue: false,
    incorrectStartValue: false,
    isDisabledInc: false,
    isDisabledReset: false,
    btnIsDisabled: false
}

type PushIncAT = ReturnType<typeof pushIncAC>
type PushResetAT = ReturnType<typeof pushResetAc>
type SetAT = ReturnType<typeof setAC>
type ChangeValueAT = ReturnType<typeof changeValueAC>
type LocalStorageValueAT = ReturnType<typeof localStorageValueAC>

type ActionType = PushIncAT
    | PushResetAT
    | SetAT
    | ChangeValueAT
    | LocalStorageValueAT

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "PUSH-INC":
            let newStateInc: StateType = {
                ...state,
                currentValue: state.currentValue + 1,
                isDisabledInc: false,
                isDisabledReset: false
            }
            if (newStateInc.currentValue === newStateInc.maxValue) {
                newStateInc = {
                    ...newStateInc,
                    isDisabledInc: true
                }
            }
            return newStateInc
        case "PUSH-RESET":
            return {...state, currentValue: state.startValue,isDisabledInc: false, isDisabledReset: true}
        case "SET":
            localStorage.setItem('localMaxValue', JSON.stringify(state.maxValue))
            localStorage.setItem('localStartValue', JSON.stringify(state.startValue))
            return {
                ...state,
                currentValue: state.startValue,
                displayCondition: 'included'
            }
        case "CHANGE-VALUE":
            let newStateValue: StateType = {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                incorrectMaxValue: false,
                incorrectStartValue: false,
                btnIsDisabled: false,
                displayCondition: 'setting'
            }
            if (action.startValue >= action.maxValue) {
                newStateValue = {
                    ...newStateValue,
                    incorrectMaxValue: true,
                    incorrectStartValue: true,
                    btnIsDisabled: true,
                    displayCondition: 'error'
                }
            }
            if (action.maxValue < 0) {
                newStateValue = {
                    ...newStateValue,
                    incorrectMaxValue: true,
                    btnIsDisabled: true,
                    displayCondition: 'error'
                }
            }
            if (action.startValue < 0) {
                newStateValue = {
                    ...newStateValue,
                    incorrectStartValue: true,
                    btnIsDisabled: true,
                    displayCondition: 'error'
                }
            }
            return newStateValue
        case "LS-VALUE":
            let localStartValue = localStorage.getItem('localStartValue')
            let localMaxValue = localStorage.getItem('localMaxValue')
            if (localStartValue && localMaxValue) {
                let newStartValue = JSON.parse(localStartValue)
                let newMaxValue = JSON.parse(localMaxValue)
                return {
                    ...state,
                    startValue: newStartValue,
                    currentValue: newStartValue,
                    maxValue: newMaxValue
                }
            } else {
                return state
            }
        default:
            return state
    }
}

export const pushIncAC = () => {
    return {type: "PUSH-INC"} as const
}
export const pushResetAc = () => {
    return {type: "PUSH-RESET"} as const
}
export const setAC = () => {
    return {type: "SET"} as const
}
export const changeValueAC = (startValue: number, maxValue: number) => {
    return {type: "CHANGE-VALUE", startValue, maxValue} as const
}
export const localStorageValueAC = () => {
    return {type: "LS-VALUE"} as const
}