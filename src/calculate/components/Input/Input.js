import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const regex = /^[0-9]*\.?[0-9]*$/; // регулярное выражение для чисел, в том числе дробных
        const newValue = event.target.value;

        if (regex.test(newValue)) {
            setValue(newValue); // обновляем значение состояния только если введено число
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;