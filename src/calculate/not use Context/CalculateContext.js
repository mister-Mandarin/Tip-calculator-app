import React, {useContext, useState} from 'react';

const CalculateContext = React.createContext('');

export const useCalculateContext = () => {
    return useContext(CalculateContext)
}

export const CalculateProvider = ({children}) => {

    const [calculateData, setCalculateData] = useState({
        // bill: '',
        // tip: '',
        // people: ''
    })


    return (
        <CalculateContext.Provider value={{
            calculateData, setCalculateData
        }}>
            {children}
        </CalculateContext.Provider>
    )
}