import React, { useRef } from 'react';
import { useNumberModifierContext, NumberModifierProvider } from '../contexts/NumberModifierContext.tsx';

const NumberModifier: React.FunctionComponent = () => {
    const {
        currentNumber,
        setMultiplyByFiveOperation,
        setAddOneOperation,
        setSubtractOneOperation,
        invokeOperation
    } = useNumberModifierContext();
    return (
        <>
            <h1>Here is the number: {currentNumber}</h1>
            <button onClick={setMultiplyByFiveOperation}>Set multiple by 5 operation</button><br /><br />
            <button onClick={setAddOneOperation}>Set add 1 operation</button><br /><br />
            <button onClick={setSubtractOneOperation}>Set subtract 1 operation</button><br /><br />
            <button onClick={invokeOperation}>Run current operation</button><br />
        </>
    )
}

const NumberModifierContainer: React.FunctionComponent = () => {
    return (
        <NumberModifierProvider>
            <NumberModifier />
        </NumberModifierProvider>
    )
}

export default NumberModifierContainer;