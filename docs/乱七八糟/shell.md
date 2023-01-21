---
sidebar_position: 1
---
# Shell Commands

`0` 强制使用核显；`1` 强制使用独显  `2` 自动切换显卡  
~~别问我为什么经常需要这个~~
```shell
sudo pmset -a GPUSwitch 0
```
Time Machine 加速备份
```shell
sudo sysctl debug.lowpri_throttle_enabled=0
```
 使dock栏只显示已打开的应用程序
```shell
defaults write com.apple.dock static-only -bool FALSE; killall Dock
```