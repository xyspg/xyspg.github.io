import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'
import Stack from '@mui/material/Stack';
import styles from '../index.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">随机事件生成器</h1>
                <p className="hero__subtitle">bdfz专供版</p>
            </div>
        </header>
    );
}


function App() {
    const [texts1, setTexts1] = useState (["永远不会打胶而死","可以随时随地传送到北大附中","可以立刻让群友破防","可以反杀所有的雌小鬼","可以随时让一个群友传送到你身边","永远有人想和你打游戏","可以隔着屏幕打王奕彭一拳","永远不会遇到键政魔怔人","可以让同学院的一个人变成你的星怒","每过一个学期就会增加一个完美的展","立即清除群里所有的原批","可以改变附近十米内所有生物的牛子大小","让你的仇人变成符合你XP的性奴","随时入眠","可以通过网线前往群友家","找不到图源时立刻有hero降临","变成扶她","自由控制聊天对象的性别","获得黄常棣的攻击性","习得古神语","随时开出任何人的塔照","绝对不会被开盒","可以＠所有人"]);
    const [texts2, setTexts2] = useState(["你只有00:01这一分钟可以勃起","你身边会充满魔怔键政人","你会无法离开北大附中","你会立刻变得符合你仇人的XP","你会变成其他人的星怒","你会被雌小鬼反杀","你会被原批们追杀","永远无人与你打电动","每过一分钟身边就会出现一只随机节肢动物","你喜欢的游戏会立刻被ylg入侵","牛子立即消失","每天必须使用100次超能力","永远无法登录游戏平台","你无法停止打胶"]);
    const [textIndex1, setTextIndex1] = useState(0);
    const [textIndex2, setTextIndex2] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [open, setOpen] = useState(false);
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");


    useEffect(() => {
        if (isPlaying) {
            const intervalId = setInterval(() => {
                setTextIndex1(i => (i + 1) % texts1.length);
                setTextIndex2(i => (i + 1) % texts2.length);
            }, 50);
            return () => clearInterval(intervalId);
        }
    }, [isPlaying, texts1.length, texts2.length]);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddText = () => {
        setTexts1(prevTexts => [...prevTexts, inputText1]);
        setTexts2(prevTexts => [...prevTexts, inputText2]);
        setInputText1("");
        setInputText2("");
        handleClose();
    };



    return (
        <>
                <HomepageHeader />
                <main className='random-main'>
                    <div className="alert">
                        注意：内容来源于原作者
                    </div>
                    <div>
                        <div className="random-main-content">
                            你的超能力是
                        </div>
                        <div className="random-body-content">{texts1[textIndex1]}</div>
                        <div className="random-main-content">但是</div>
                        <div className="random-body-content">{texts2[textIndex2]}</div>
                    </div>
                    <div className="control-button">
                        <Button variant="contained" onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ? "暂停" : "开始"}
                        </Button>
                    </div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        添加自定义
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>添加自定义</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id=""
                                label="你的超能力是"
                                type="text"
                                fullWidth
                                value={inputText1}
                                onChange={e => setInputText1(e.target.value)}
                            />
                            <TextField
                                margin="dense"
                                id=""
                                label="但是"
                                type="text"
                                fullWidth
                                value={inputText2}
                                onChange={e => setInputText2(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>取消</Button>
                            <Button onClick={handleAddText}>确定</Button>
                        </DialogActions>
                    </Dialog>
                </main>
        </>
    );
}

export default App;
