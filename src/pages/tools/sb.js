import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../index.module.css';
import React, { useState, createContext, useEffect } from "react";
const style = {
    background: "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "PingFang SC",
    fontSize: "260px",
    fontWeight: 900,
    textAlign: "center",
    margin:"4rem auto",
};


export default function Home() {
    return (
        <Layout>
            <main>
                <h1 style={style}>SB</h1>
            </main>
        </Layout>
    );
}
