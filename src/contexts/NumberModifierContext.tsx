import React, { createContext, ReactNode, useMemo, useContext, useState } from 'react';
import { useInitialNumberContext } from './InitialNumberContext.tsx';

const NumberModifierContext = createContext<any>(null);

type NumberModifierProviderProps = {
    children: ReactNode;
};

type OperationType = 'multiplyByFive' | 'addOne' | 'subtractOne'

function NumberModifierProvider({ children }: NumberModifierProviderProps) {
    const { initialNumber } = useInitialNumberContext();
    const [currentNumber, setCurrentNumber] = useState<number>(initialNumber);
    const [currOperation, setCurrOperation] = useState<OperationType>('addOne')

    const setMultiplyByFiveOperation = () => {
        setCurrOperation('multiplyByFive')
    }

    const setAddOneOperation = () => {
        setCurrOperation('addOne')
    }

    const setSubtractOneOperation = () => {
        setCurrOperation('subtractOne')
    }

    const invokeOperation = () => {
        switch (currOperation) {
            case 'addOne':
                setCurrentNumber(currentNumber + 1)
                return;
            case 'subtractOne':
                setCurrentNumber(currentNumber - 1)
                return;
            case 'multiplyByFive':
                setCurrentNumber(currentNumber * 5)
                return;
        }
    }

    const contextValue = useMemo(
        () => ({
            currentNumber,
            setMultiplyByFiveOperation,
            setAddOneOperation,
            setSubtractOneOperation,
            invokeOperation
        }), [currentNumber, setMultiplyByFiveOperation, setAddOneOperation, setSubtractOneOperation, invokeOperation]
    )

    return <NumberModifierContext.Provider value={contextValue}>{children}</NumberModifierContext.Provider>
}

const useNumberModifierContext = () => {
    const context = useContext(NumberModifierContext);
    if (!context) throw new Error('Number Modifier context must be used inside NumberModifierProvider');

    return context;
}

export { NumberModifierProvider, useNumberModifierContext }