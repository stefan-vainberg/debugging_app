import React, { useRef } from 'react';
import { useInitialNumberContext } from '../contexts/InitialNumberContext.tsx';

const InitialNumberInput: React.FunctionComponent = () => {

    const { setInitialNumber } = useInitialNumberContext();

    const inputRef = useRef<HTMLInputElement>(null);
    const onInitialNumberButtonClick = () => {
        if (inputRef.current) {
            setInitialNumber(parseFloat(inputRef.current.value))
        }
    }
    return (
        <>
            <h1>Type an initial number</h1>
            <input ref={inputRef} type="text" name="initial-input"></input>
            <button onClick={onInitialNumberButtonClick}>Submit the number</button>
        </>
    )
}

export default InitialNumberInput;