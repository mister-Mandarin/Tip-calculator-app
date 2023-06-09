import React, {useContext, useEffect, useState} from 'react';
import {ResultCalculation} from "../result/ResultCalculation";

const CalculateResults = React.createContext({});

export const useCalculate = () => {
    return useContext(CalculateResults)
}

export const CalculateResultsProvider = ({children}) => {

    const [result, setResult] = useState({tipAmount: "0.00", rez: "0.00"});

    const [calculateData, setCalculateData] = useState({bill: null, tip: null, people: null})

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [clean, setClean] = useState(false);

    useEffect(() => {
        // console.log('Я в useEffect context, clean = ', clean)
        if (calculateData.bill && calculateData.people && calculateData.people !== '0' && calculateData.tip) {
            const newResult = ResultCalculation(calculateData);
            setResult(newResult);
            // console.log('Я в useEffect ', newResult, calculateData)
            setIsButtonDisabled(false);
        }
    }, [calculateData]);

    const resetAll = () => {
        setClean(!clean)
        setResult({tipAmount: "0.00", rez: "0.00"});
        setCalculateData({bill: null, tip: null, people: null})
        setIsButtonDisabled(true)
    }

    return (
        <CalculateResults.Provider
            value={{
                isButtonDisabled, calculateData, setCalculateData, result, setResult, resetAll, clean
            }}>
            {children}
        </CalculateResults.Provider>
    )
}