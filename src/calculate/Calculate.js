import Input from "./components/Input/Input";
import IconDollar from './components/Input/icons/icon-dollar.svg'
import UiLabel from './helpers/uiLabel'
import ButtonsBlock from "./components/button/ButtonsBlock";
import {useEffect, useState} from "react";
import IconPeople from './components/Input/icons/icon-person.svg'
import styles from './Calculate.module.css'
import {useCalculate} from "../context/Global.context";

export default function Calculate() {

    const {calculateData, setCalculateData} = useCalculate();

    //  const [parentValue, setParentValue] = useState({bill: null, tip: null, people: null});

    // useEffect(() => {
    //     setCalculateData({...parentValue});
    // }, [parentValue]);

    const updateFirstValue = (newValue) => {
        const newParentValue = {...calculateData, bill: newValue}
        setCalculateData(newParentValue);
    }

    const updateSecondValue = (newValue) => {
        const newParentValue = {...calculateData, tip: newValue}
        setCalculateData(newParentValue);
    }

    const updateThirdValue = (newValue) => {
        const newParentValue = {...calculateData, people: newValue}
        setCalculateData(newParentValue);
    }

    return (
        <div className={styles.grid}>
            <div>
                <UiLabel label="Bill"/>
                <Input clean onUpdate={updateFirstValue} placeholder="0" isIcon={IconDollar}/>
            </div>
            <div>
                <UiLabel label="Select Tip %"/>
                <ButtonsBlock onUpdate={updateSecondValue}/>
            </div>
            <div>
                <UiLabel label="Number of people"/>
                <Input clean required onUpdate={updateThirdValue} placeholder="0" isIcon={IconPeople}/>
            </div>
        </div>
    );
};
