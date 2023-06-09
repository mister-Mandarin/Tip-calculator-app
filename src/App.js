import styles from './App.module.css';
import Calculate from './calculate/Calculate';
import Result from './result/Result'
import React from "react";
import {CalculateResultsProvider} from "./context/Global.context";
import LogoProject from './img/logo.svg'
import GitHub from './img/GitHub_Logo.png'

export default function App() {
    return (
        <div className={styles.center}>
            <div className={styles.logo}>
                <img src={LogoProject} alt="logo project"/>
                <a href="https://github.com/mister-Mandarin/Tip-calculator-app">
                    <img className={styles.github} src={GitHub} alt="git hub"/>

                </a>
            </div>
            <div className={styles.container}>
                <CalculateResultsProvider>
                    <Calculate/>
                    <Result/>
                </CalculateResultsProvider>
            </div>
            <div className={styles.attribution}>
                Challenge by <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
                                target="_blank" rel="noreferrer">Frontend
                Mentor</a>.
            </div>
        </div>
    );
};
