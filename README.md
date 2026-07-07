# harry-hov.github.io

Interactive **terminal-style** portfolio for [Hariom Verma](https://github.com/harry-hov).

**Live:** https://harry-hov.github.io

## Features

- Full terminal UI with prompt, themes, and CRT scanlines
- Working commands: `help`, `about`, `experience`, `projects`, `skills`, `ls`, `cd`, `cat`, `tree`, `open`, …
- Keyboard-first: **Tab** complete, **↑↓** history, **Ctrl+L** clear, **Ctrl+C** cancel, **Ctrl+T** theme
- Virtual filesystem (`cat about.txt`, `cd social`, `ls -la`)
- Themes: default (GitHub dark), amber (CRT), matrix

## Local preview

```bash
# any static server
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

This repo is published with **GitHub Pages** from the `main` branch (`/`).

## Stack

Plain HTML, CSS, and vanilla JS — no build step.
