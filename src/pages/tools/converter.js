import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '@site/src/pages/index.module.css';
import clsx from "clsx";
import React, { useState, createContext, useEffect } from "react";
import { Input } from 'antd';
import { Card } from 'antd';

const { TextArea } = Input;

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Special Char Converter</h1>
            </div>
        </header>
    );
}

const SpecialCharToLetter = () => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const specialCharsToLettersMap = {
        "å": "a",
        "∫": "b",
        "ç": "c",
        "∂": "d",
        "´": "e",
        "ƒ": "f",
        "©": "g",
        "˙": "h",
        "ˆ": "i",
        "∆": "j",
        "˚": "k",
        "¬": "l",
        "µ": "m",
        "˜": "n",
        "ø": "o",
        "π": "p",
        "œ": "q",
        "®": "r",
        "ß": "s",
        "†": "t",
        "¨": "u",
        "√": "v",
        "∑": "w",
        "≈": "x",
        "¥": "y",
        "Ω": "z",
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        let outputValue = "";
        for (let i = 0; i < value.length; i++) {
            const char = value[i];
            console.log(value);
            if (char === " ") {
                outputValue += "&nbsp;";
            } else
            if (specialCharsToLettersMap[char]) {
                outputValue += specialCharsToLettersMap[char];
            }
        }
        setOutputValue(outputValue);
        setInputValue(value);
    };

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "40vw",
            margin: "2rem auto",
            height: "100%",
        }}
        >
            <TextArea
                value={inputValue}
                onChange={handleInputChange}
                placeholder=""
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <Card
            style={{
                width: "100%",
                marginTop: "1rem",
                padding: "1rem",

            }}
            >
            <div dangerouslySetInnerHTML={{ __html: outputValue }} />
            </Card>
        </div>
    );
};
export default function Home() {
    return (
        <Layout>
            <HomepageHeader />
            <main>
                <SpecialCharToLetter />
            </main>
        </Layout>
    );
}
