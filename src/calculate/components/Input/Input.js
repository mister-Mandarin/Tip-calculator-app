import React, {useState, useEffect} from 'react';
import styles from './Inpit.module.css';
import UiLabel from "../../helpers/uiLabel";
import cn from "classnames";
import {useCalculate} from "../../../context/Global.context";

const Input = ({placeholder, isIcon, altIcon, onUpdate, required}) => {

    const {clean} = useCalculate();
    const [value, setValue] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);

    const handleChange = (event) => {
        const regex = /^[0-9]*\.?[0-9]*$/; // регулярное выражение для чисел, в том числе дробных
        const decimalRegex = /^\d+(?:\.\d{0,2})?$/; // регулярное выражение для чисел с не более чем 2 знаками после запятой
        const regexWhole = /^[0-9]*$/; //регулярка для целых чисел
        const inputValue = event.target.value;

        if (required) {
            if (inputValue == 0 || inputValue === "") {
                setErrorMessage(true)
                setValue(inputValue);
                onUpdate(inputValue);
                return;
            }
            if (regexWhole.test(inputValue)) {
                setErrorMessage(false)
                setValue(inputValue);
                onUpdate(inputValue);
            }
            return
        }

        if ((regex.test(inputValue) && decimalRegex.test(inputValue)) || inputValue === '') {
            // обновляем состояние только если число с не более чем 2 знаками после запятой или пустое
            setValue(inputValue);
            onUpdate(inputValue);
        }
    };

    // да нахуй!!! Подписываемся на стейт clean и когда он меняется очищаем поле.
    useEffect(() => {
        setValue('')
    }, [clean]);

    return (
        <div className={styles.label}>
            {errorMessage ? <UiLabel className={errorMessage} label="Can't be zero/null"/> : ''}
            {isIcon ? <img className={styles.img} src={isIcon} alt={altIcon}/> : ''}
            <input className={cn(styles.input, {
                [styles.errorInput]: errorMessage
            })}
                   type="text"
                   value={value}
                   onChange={handleChange}
                   placeholder={placeholder}
            />
        </div>
    );
};

export default Input;