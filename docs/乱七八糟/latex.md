---
sidebar_position: 3
---
# Latex 模板
## MLA
```latex
\documentclass[12pt]{article}

%
%Margin - 1 inch on all sides
%
\usepackage[letterpaper]{geometry}
\usepackage{times}
\geometry{top=1.0in, bottom=1.0in, left=1.0in, right=1.0in}

%
%Doublespacing
%
\usepackage{setspace}
\doublespacing

%
%Rotating tables (e.g. sideways when too long)
%
\usepackage{rotating}


%
%Fancy-header package to modify header/page numbering (insert last name)
%
\usepackage{fancyhdr}
\pagestyle{fancy}
\lhead{} 
\chead{} 
% \rhead{Last \thepage} 
\lfoot{} 
\cfoot{} 
\rfoot{} 
\renewcommand{\headrulewidth}{0pt} 
\renewcommand{\footrulewidth}{0pt} 
%To make sure we actually have header 0.5in away from top edge
%12pt is one-sixth of an inch. Subtract this from 0.5in to get headsep value
\setlength\headsep{0.333in}

%
%Works cited environment
%(to start, use \begin{workscited...}, each entry preceded by \bibent)
% - from Ryan Alcock's MLA style file
%
\newcommand{\bibent}{\noindent \hangindent 40pt}
\newenvironment{workscited}{\newpage \begin{center} Works Cited \end{center}}{\newpage }


%
%Begin document
%
\begin{document}
\begin{flushleft}

%%%%First page name, class, etc
Kang Jiaming\\
Moana Teriitehau\\
ELA 1.1\\
\today\\


%%%%Title
\begin{center}
Paper Title
\end{center}


%%%%Changes paragraph indentation to 0.5in
\setlength{\parindent}{0.5in}
%%%%Begin body of paper here
This is a checking of if it can display well


\end{flushleft}
\end{document}
\}
```

## 中文模板
```
\documentclass{article}
\usepackage{CJKutf8}
\begin{document}
\begin{CJK}{UTF8}{gbsn}

\end{CJK}

\end{document}
```