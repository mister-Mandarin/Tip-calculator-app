import React, {useEffect, useState} from 'react';
import styles from './ButtonsBlock.module.css';
import cn from 'classnames'
import Input from "../Input/Input";
import {useCalculate} from "../../../context/Global.context";

const ButtonsBlock = ({onUpdate}) => {

    const {clean} = useCalculate()

    const [sale, setSale] = useState(null);

    const onClickButton = (value) => {
        setSale(value);
        onUpdate(value);
    }

    useEffect(() => {
        setSale(null)
    }, [clean]);

    const saleVale = [5, 10, 15, 25, 50];

    return (
        <div className={styles.block}>

            {saleVale.map((m, key) => <button key={m} onClick={() => {
                onClickButton(m)
            }} className={cn(styles.button, {
                [styles.active]: m === sale,
            })
            }>{m}%
            </button>)}

            <Input onUpdate={onClickButton} placeholder="Custom"/>

        </div>
    )
}

export default ButtonsBlock;