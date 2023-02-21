import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../index.module.css';
import React, { useState, createContext, useEffect } from "react";
function FullscreenH1() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    function handleFullscreenClick() {
        setIsFullscreen(true);
        document.documentElement.requestFullscreen();
    }

    const style = {
        background: "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "PingFang SC, Calibri, sans-serif",
        fontSize: "260px",
        fontWeight: 900,
        textAlign: "center",
        margin: "4rem auto",
    };
    const style1 = {
        background: "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "PingFang SC, Calibri, sans-serif",
        fontSize: "600px",
        fontWeight: 900,
        textAlign: "center",
        margin: "4rem auto",
    };

    if (isFullscreen) {
        return (
            <h1
                style={style1}
                onClick={() => {
                    setIsFullscreen(false);
                    document.exitFullscreen();
                }}
            >
                SB
            </h1>
        );
    }
    return (
        <Layout>
            <main>
                <div onClick={handleFullscreenClick}>
                    <h1 style={style}>SB</h1>
                </div>
            </main>
        </Layout>

    );
}

export default FullscreenH1;

