import styles from './Result.module.css'
import {useCalculate} from "../context/Global.context";

export default function Result() {

    const {
        isButtonDisabled,
        result,
        resetAll
    } = useCalculate();

    // console.log('Я в результате, тут результат такой ', result)

    return (
        <div className={styles.container}>
            <div className={styles.amount}>
                <div className={styles.text}>
                    <p className={styles.bigText}>Tip Amount</p>
                    <p className={styles.smallText}>/ person</p>
                </div>
                <div className={styles.number}>${result.tipAmount}</div>
            </div>
            <div className={styles.total}>
                <div className={styles.text}>
                    <p className={styles.bigText}>Total</p>
                    <p className={styles.smallText}>/ person</p>
                </div>
                <div className={styles.number}>${result.rez}</div>
            </div>
            <button onClick={resetAll} disabled={isButtonDisabled} className={styles.button}>reset</button>
        </div>
    );
};
