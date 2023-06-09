import styles from './uiLabel.module.css'
import cn from 'classnames'

export default function UiLabel({label, className}) {
    return (
        <span className={cn(styles.textLabel, {
                [styles.errorMessage]: className
            }
        )}>{label}</span>
    )
}