import React from 'react';
import InitialNumberInput from './InitialNumberInput.tsx';
import { InitialNumberProvider } from '../contexts/InitialNumberContext.tsx';
import { useInitialNumberContext } from '../contexts/InitialNumberContext.tsx';
import NumberModifierContainer from './NumberModifier.tsx';

const HomePage: React.FunctionComponent = () => {
    const { initialNumber } = useInitialNumberContext();
    if (!initialNumber) {
        return <InitialNumberInput />
    }
    else {
        return <NumberModifierContainer />
    }
}

function HomePageContainer() {
    return (
        <InitialNumberProvider>
            <HomePage />
        </InitialNumberProvider>
    )
}

export default HomePageContainer