import styles from './Label.module.css'

export default function Label({label}) {
    return (
        <span className={styles.textLabel}>{label}</span>
    )
}