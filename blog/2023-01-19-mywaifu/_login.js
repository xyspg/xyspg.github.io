import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { MD5 } from "crypto-js";

const hashedPassword = "8b34ec3413ccc9ecb348bdb38ac18e5f";
const hashedPassword1 = "33c1876ab182597dd8947268831db9a3";


const Login = () => {
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [incorrectCount, setIncorrectCount] = useState(0);

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (MD5(password).toString() === hashedPassword || MD5(password).toString() === hashedPassword1) {
            setIsLoggedIn(true);
        }
        else {
            setIncorrectCount(incorrectCount + 1);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-password-input"
                label="o(≧v≦)o"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={password}
                onChange={handleChange}
                disabled={incorrectCount >= 3}
            />
        </form>
            {isLoggedIn ?
                <>
                <a href='http://bit.ly/3J1zTG0' target="_blank">[Rico] かわエロリっ娘のなりきりエッチ♡</a><br />
                <a href='http://bit.ly/3XMB54r' target="_blank">[Rico] 快感❤️フィジカルトレーニング❤️</a>
                </>
                : null}
        </>
    );
};


export default Login;