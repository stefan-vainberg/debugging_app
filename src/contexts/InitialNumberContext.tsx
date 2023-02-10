import React, { createContext, ReactNode, useMemo, useContext, useState } from 'react';

const InitialNumberContext = createContext<any>(null);

type InitialNumberProviderProps = {
    children: ReactNode;
};

function InitialNumberProvider({ children }: InitialNumberProviderProps) {
    const [initialNumber, setInitialNumber] = useState<number | null>(null);

    const contextValue = useMemo(
        () => ({
            initialNumber, setInitialNumber
        }), [initialNumber, setInitialNumber]
    )

    return <InitialNumberContext.Provider value={contextValue}>{children}</InitialNumberContext.Provider>
}

const useInitialNumberContext = () => {
    const context = useContext(InitialNumberContext);
    if (!context) throw new Error('Initial number context must be used inside InitialNumberProvider');

    return context;
}

export { InitialNumberProvider, useInitialNumberContext }