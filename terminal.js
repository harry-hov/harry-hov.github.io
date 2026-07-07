/**
 * hariom@harry-hov — interactive terminal portfolio
 * Keyboard-first. Type `help` for commands.
 */
(() => {
  "use strict";

  // ─── Profile data (from resume) ───────────────────────────────────────────
  const PROFILE = {
    name: "Hariom Verma",
    username: "harry-hov",
    title: "Golang Developer · Open Source · Blockchain",
    email: "hariom@hariom.sh",
    phone: "+91 9179078061",
    location: "Remote, India",
    github: "https://github.com/harry-hov",
    linkedin: "https://linkedin.com/in/hariom-verma/",
    twitter: "https://x.com/_hariomverma",
    website: "https://hariom.sh",
    hireable: true,
  };

  const EXPERIENCE = [
    {
      role: "Golang Developer — Gno Core Team",
      company: "All in Bits",
      period: "Nov 2022 – Jun 2024",
      about:
        "Gno is an interpreted version of Go for smart contracts on the Gno.land blockchain.",
      bullets: [
        "Initiated and led Gno Modules (gno.mod) — dependency graph resolution for tooling",
        "Developed Gno language server: hover, diagnostics, format, auto-completion (LSP)",
        "Implemented proof of concept for contract versioning",
        "Ported several Go commands to the Gno binary; tooling improvements & PR reviews",
      ],
      tech: ["Go", "Compiler Internals", "Blockchain", "Tendermint 2 (tm2)"],
    },
    {
      role: "Backend Engineer",
      company: "Gitopia",
      period: "May 2021 – Nov 2022",
      about:
        "Decentralized code collaboration platform for developers on blockchain.",
      bullets: [
        "Wrote ~80% of the backend: 70+ transactions & workflows (repos, issues, PRs, bounties)",
        "15+ gRPC APIs with pagination; 10+ git services (diff, pack/unpack, loose objects)",
        "KV-store as relational DB — improved complexity from O(n) to O(1)",
        "Enabled IBC for cross-chain communication; implemented relayer",
        "Raised blockchain & git service test coverage by 75%; chain upgrade migrations",
      ],
      tech: ["Go", "Cosmos SDK", "gRPC", "protobuf", "IBC"],
    },
    {
      role: "Contributor",
      company: "Git (open source)",
      period: "Oct 2019 – present",
      about: "The open-source distributed version control system.",
      bullets: [
        "Google Summer of Code mentor: 2021, 2022, 2023",
        "20+ merged commits; reviewed and mentored 20+ more in the Git project",
      ],
      tech: ["C", "Linux", "Git", "Shell", "GDB"],
    },
    {
      role: "GSoC 2020 Contributor",
      company: "Git",
      period: "May 2020 – Sep 2020",
      about: "Project: Unify ref-filter formats with other --pretty formats",
      bullets: [
        "Implemented 50+ pretty formats using ref-filter logic; reduced LOC by unifying code",
        "Weekly blog series for 15 weeks documenting the work",
      ],
      tech: ["C", "Git", "Shell"],
    },
  ];

  const PROJECTS = [
    {
      name: "VSCode Gno",
      period: "Jan 2023 – Jun 2024",
      desc: "Gno language support for Visual Studio Code — 200+ unique downloads on Marketplace.",
      features: [
        "Syntax highlighting, formatting, transpile, type-checking",
        "Code lens, diagnostics, publish smart contracts",
      ],
      tech: ["TypeScript", "LSP", "VS Code API"],
      url: "https://marketplace.visualstudio.com/items?itemName=harry-hov.vscode-gno",
      github: "https://github.com/harry-hov/vscode-gno",
    },
    {
      name: "gnopls",
      period: "2023 – 2024",
      desc: "Language server for Gno (LSP): hover, diagnostics, format, completion.",
      features: ["Full LSP feature set for Gno tooling"],
      tech: ["Go", "LSP"],
      github: "https://github.com/harry-hov/gnopls",
    },
    {
      name: "Animeverse",
      period: "Aug 2019 – Jan 2021",
      desc: "Anime streaming Android app — 150+ Play Store downloads, 4.4★ rating.",
      features: ["Built-in video player", "Picture-in-picture playback"],
      tech: ["Flutter", "Dart", "Firebase", "Web scraping"],
      url: "https://animeverse.in/",
    },
    {
      name: "tmail",
      period: "2026",
      desc: "Terminal email client in C (IMAP + SMTP via libcurl).",
      features: ["CLI email over IMAP/SMTP"],
      tech: ["C", "libcurl", "IMAP", "SMTP"],
      github: "https://github.com/harry-hov/tmail",
    },
  ];

  const SKILLS = {
    languages: ["Go", "C/C++", "TypeScript/JavaScript", "Shell Scripting", "Dart"],
    frameworks: ["Cosmos SDK", "Tendermint 2", "ReactJS", "Flutter", "gRPC"],
    tools: ["Git", "GDB", "GitHub", "Blockchain", "DBMS", "protobuf", "IBC"],
    focus: ["Compiler tooling", "Language servers (LSP)", "Distributed systems", "Open source"],
  };

  const EDUCATION = [
    {
      degree: "B.Tech, Computer Science Engineering",
      school: "Shri G. S. Institute of Technology and Science (Indore)",
      year: "May 2021",
    },
    {
      degree: "Class 12 (CBSE)",
      school: "Central Board of Secondary Education",
      year: "May 2016",
    },
  ];

  const COURSES = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management System",
    "Operating Systems",
    "Computer Networking",
    "Object-Oriented Software Engineering",
    "Data Science",
    "Cloud Computing",
  ];

  const POSITIONS = [
    {
      title: "Member & Website Maintainer",
      org: "HackSocIndore",
      period: "Aug 2019 – May 2020",
      desc: "Student developer group organizing hackathons, workshops, and tech events.",
    },
    {
      title: "Mentor",
      org: "Kharagpur Winter of Code",
      period: "Dec 2019 – Jan 2020",
      desc: "Mentored 16 sophomores over 2 months on open-source and Android development.",
    },
  ];

  // ─── Virtual filesystem ───────────────────────────────────────────────────
  const FS = {
    "~": {
      type: "dir",
      children: {
        "about.txt": { type: "file", content: "about" },
        "experience.txt": { type: "file", content: "experience" },
        "projects.txt": { type: "file", content: "projects" },
        "skills.txt": { type: "file", content: "skills" },
        "education.txt": { type: "file", content: "education" },
        "contact.txt": { type: "file", content: "contact" },
        "resume.pdf": { type: "file", content: "resume-link" },
        social: {
          type: "dir",
          children: {
            "github.url": { type: "file", content: PROFILE.github },
            "linkedin.url": { type: "file", content: PROFILE.linkedin },
            "twitter.url": { type: "file", content: PROFILE.twitter },
            "email.txt": { type: "file", content: PROFILE.email },
          },
        },
        bin: {
          type: "dir",
          children: {
            help: { type: "file", content: "cmd" },
            whoami: { type: "file", content: "cmd" },
            neofetch: { type: "file", content: "cmd" },
          },
        },
      },
    },
  };

  // ─── DOM ──────────────────────────────────────────────────────────────────
  const outputEl = document.getElementById("output");
  const inputEl = document.getElementById("cmdline");
  const terminalEl = document.getElementById("terminal");
  const ghostEl = document.getElementById("ghost");
  const themeBtn = document.getElementById("theme-btn");
  const soundBtn = document.getElementById("sound-btn");

  let cwd = "~";
  let history = [];
  let historyIndex = -1;
  let draft = "";
  let soundOn = false;
  let themes = ["default", "amber", "matrix"];
  let themeIndex = 0;
  let commandBuffer = "";

  // ─── Audio (optional soft key click) ──────────────────────────────────────
  let audioCtx = null;
  function clickSound() {
    if (!soundOn) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "square";
      o.frequency.value = 800 + Math.random() * 200;
      g.gain.value = 0.015;
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);
      o.stop(audioCtx.currentTime + 0.03);
    } catch (_) {}
  }

  // ─── Output helpers ───────────────────────────────────────────────────────
  function scrollToBottom() {
    requestAnimationFrame(() => {
      terminalEl.scrollTop = terminalEl.scrollHeight;
    });
  }

  function printHTML(html, className = "") {
    const div = document.createElement("div");
    div.className = `line ${className}`.trim();
    div.innerHTML = html;
    outputEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function print(text, className = "") {
    const div = document.createElement("div");
    div.className = `line ${className}`.trim();
    div.textContent = text;
    outputEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function printBlank() {
    print("");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function link(url, label) {
    return `<a class="link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label || url)}</a>`;
  }

  function echoPrompt(cmd) {
    printHTML(
      `<span class="prompt-echo"><span class="user">hariom</span><span class="at">@</span><span class="host">harry-hov</span><span class="colon">:</span><span class="path">${escapeHtml(cwd)}</span><span class="dollar">$</span> <span class="cmd-text">${escapeHtml(cmd)}</span></span>`
    );
  }

  // ─── Banner / neofetch ────────────────────────────────────────────────────
  const BANNER = `
 ██╗  ██╗ █████╗ ██████╗ ██████╗ ██╗   ██╗      ██╗  ██╗ ██████╗ ██╗   ██╗
 ██║  ██║██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝      ██║  ██║██╔═══██╗██║   ██║
 ███████║███████║██████╔╝██████╔╝ ╚████╔╝ █████╗███████║██║   ██║██║   ██║
 ██╔══██║██╔══██║██╔══██╗██╔══██╗  ╚██╔╝  ╚════╝██╔══██║██║   ██║╚██╗ ██╔╝
 ██║  ██║██║  ██║██║  ██║██║  ██║   ██║         ██║  ██║╚██████╔╝ ╚████╔╝
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝         ╚═╝  ╚═╝ ╚═════╝   ╚═══╝
`.trimEnd();

  function cmdBanner() {
    printHTML(`<pre class="banner">${BANNER}</pre>`);
    printHTML(
      `<span class="hl">${PROFILE.name}</span>  ·  <span class="cyan">${PROFILE.title}</span>`
    );
    printHTML(
      `<span class="dim">Type </span><span class="hl">help</span><span class="dim"> for commands · </span><span class="hl">Tab</span><span class="dim"> to autocomplete · </span><span class="hl">↑↓</span><span class="dim"> history</span>`
    );
    printBlank();
  }

  function cmdNeofetch() {
    const art = [
      "      .--.      ",
      "     |o_o |     ",
      "     |:_/ |     ",
      "    //   \\ \\    ",
      "   (|     | )   ",
      "  /'\\_   _/`\\   ",
      "  \\___)=(___/   ",
    ];
    const info = [
      `<span class="hl">${PROFILE.username}</span><span class="dim">@</span><span class="blue">github.io</span>`,
      `<span class="dim">-------------</span>`,
      `<span class="yellow">Name</span><span class="dim">:</span>    ${escapeHtml(PROFILE.name)}`,
      `<span class="yellow">Role</span><span class="dim">:</span>    Golang Developer`,
      `<span class="yellow">OS</span><span class="dim">:</span>      Portfolio OS 1.0 (zsh)`,
      `<span class="yellow">Shell</span><span class="dim">:</span>   interactive-js`,
      `<span class="yellow">Host</span><span class="dim">:</span>    hariom.sh`,
      `<span class="yellow">Locale</span><span class="dim">:</span>  ${escapeHtml(PROFILE.location)}`,
      `<span class="yellow">Status</span><span class="dim">:</span>  ${PROFILE.hireable ? '<span class="success">open to opportunities</span>' : "employed"}`,
      `<span class="yellow">GitHub</span><span class="dim">:</span>  ${link(PROFILE.github, "harry-hov")}`,
      `<span class="yellow">Mail</span><span class="dim">:</span>    ${link("mailto:" + PROFILE.email, PROFILE.email)}`,
      "",
      `<span style="color:#f85149">██</span><span style="color:#f0883e">██</span><span style="color:#d29922">██</span><span style="color:#3fb950">██</span><span style="color:#58a6ff">██</span><span style="color:#bc8cff">██</span><span style="color:#c9d1d9">██</span><span style="color:#6e7681">██</span>`,
    ];
    const rows = Math.max(art.length, info.length);
    for (let i = 0; i < rows; i++) {
      const a = art[i] ? `<span class="cyan">${escapeHtml(art[i])}</span>` : " ".repeat(16);
      const b = info[i] || "";
      printHTML(`${a}  ${b}`);
    }
    printBlank();
  }

  // ─── Commands ─────────────────────────────────────────────────────────────
  function cmdHelp(args) {
    if (args[0]) {
      const c = COMMANDS[args[0]];
      if (!c) {
        print(`help: no help for '${args[0]}'`, "error");
        return;
      }
      printHTML(`<span class="hl">${escapeHtml(args[0])}</span> — ${escapeHtml(c.desc)}`);
      if (c.usage) printHTML(`<span class="dim">usage:</span> ${escapeHtml(c.usage)}`);
      return;
    }

    printHTML(`<span class="section-title">Available commands</span>`);
    printBlank();

    const groups = [
      {
        title: "about me",
        cmds: ["about", "whoami", "experience", "projects", "skills", "education", "contact", "resume", "social"],
      },
      {
        title: "filesystem",
        cmds: ["ls", "cd", "pwd", "cat", "tree", "open"],
      },
      {
        title: "system",
        cmds: ["help", "clear", "history", "echo", "date", "uname", "neofetch", "banner", "theme", "fortune", "sudo"],
      },
    ];

    for (const g of groups) {
      printHTML(`  <span class="accent">${g.title}</span>`);
      for (const name of g.cmds) {
        const c = COMMANDS[name];
        if (!c) continue;
        printHTML(
          `    <span class="hl">${name.padEnd(12)}</span><span class="dim">${escapeHtml(c.desc)}</span>`
        );
      }
      printBlank();
    }
    printHTML(
      `<span class="dim">Tips: </span><span class="yellow">Tab</span><span class="dim"> autocomplete · </span><span class="yellow">Ctrl+L</span><span class="dim"> clear · </span><span class="yellow">Ctrl+C</span><span class="dim"> cancel · </span><span class="yellow">Ctrl+T</span><span class="dim"> theme</span>`
    );
    printBlank();
  }

  function cmdAbout() {
    printHTML(`<span class="section-title">About</span>`);
    printBlank();
    printHTML(
      `  Hi, I'm <span class="hl">${PROFILE.name}</span> (<span class="cyan">@${PROFILE.username}</span>).`
    );
    printHTML(
      `  Golang developer with deep roots in <span class="yellow">open source</span>, <span class="yellow">Git</span>, and <span class="yellow">blockchain</span>.`
    );
    printBlank();
    printHTML(
      `  On the <span class="hl">Gno Core Team</span> at All in Bits I built language tooling —`
    );
    printHTML(
      `  modules (gno.mod), a language server, and compiler-side improvements for Gno.land.`
    );
    printBlank();
    printHTML(
      `  At <span class="hl">Gitopia</span> I owned most of the backend for a decentralized`
    );
    printHTML(
      `  code-collaboration chain (Cosmos SDK, gRPC, git object services, IBC).`
    );
    printBlank();
    printHTML(
      `  Long-time <span class="hl">Git</span> contributor and <span class="hl">GSoC</span> mentor (2021–2023);`
    );
    printHTML(
      `  GSoC 2020 contributor unifying ref-filter and pretty formats.`
    );
    printBlank();
    printHTML(
      `  <span class="dim">Try:</span> <span class="hl">experience</span> · <span class="hl">projects</span> · <span class="hl">skills</span> · <span class="hl">contact</span>`
    );
    printBlank();
  }

  function cmdWhoami() {
    print(PROFILE.username);
  }

  function cmdExperience(args) {
    const filter = (args[0] || "").toLowerCase();
    printHTML(`<span class="section-title">Experience</span>`);
    printBlank();

    let list = EXPERIENCE;
    if (filter) {
      list = EXPERIENCE.filter(
        (e) =>
          e.company.toLowerCase().includes(filter) ||
          e.role.toLowerCase().includes(filter)
      );
      if (!list.length) {
        print(`No experience matching '${args[0]}'`, "error");
        printHTML(`<span class="dim">Try: gno, gitopia, git, gsoc</span>`);
        return;
      }
    }

    list.forEach((job, idx) => {
      printHTML(
        `  <span class="hl">${escapeHtml(job.role)}</span>`
      );
      printHTML(
        `  <span class="cyan">${escapeHtml(job.company)}</span>  <span class="dim">│</span>  <span class="yellow">${escapeHtml(job.period)}</span>`
      );
      if (job.about) printHTML(`  <span class="dim">${escapeHtml(job.about)}</span>`);
      printBlank();
      job.bullets.forEach((b) => {
        printHTML(`    <span class="green">▸</span> ${escapeHtml(b)}`);
      });
      printBlank();
      printHTML(
        `  <span class="dim">tech:</span> ${job.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join(" ")}`
      );
      if (idx < list.length - 1) {
        printBlank();
        printHTML(`  <span class="dim">${"─".repeat(48)}</span>`);
        printBlank();
      }
    });
    printBlank();
  }

  function cmdProjects(args) {
    const filter = (args[0] || "").toLowerCase();
    printHTML(`<span class="section-title">Projects</span>`);
    printBlank();

    let list = PROJECTS;
    if (filter) {
      list = PROJECTS.filter((p) => p.name.toLowerCase().includes(filter));
      if (!list.length) {
        print(`No project matching '${args[0]}'`, "error");
        return;
      }
    }

    list.forEach((p, idx) => {
      printHTML(`  <span class="hl">${escapeHtml(p.name)}</span>  <span class="dim">${escapeHtml(p.period)}</span>`);
      printHTML(`  ${escapeHtml(p.desc)}`);
      if (p.features) {
        p.features.forEach((f) => printHTML(`    <span class="green">▸</span> ${escapeHtml(f)}`));
      }
      const links = [];
      if (p.url) links.push(link(p.url, "live"));
      if (p.github) links.push(link(p.github, "github"));
      if (links.length) printHTML(`  <span class="dim">links:</span> ${links.join("  ·  ")}`);
      printHTML(
        `  <span class="dim">tech:</span> ${p.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join(" ")}`
      );
      if (idx < list.length - 1) printBlank();
    });
    printBlank();
  }

  function skillBar(level) {
    const filled = Math.round(level / 10);
    const empty = 10 - filled;
    return `<span class="bar-fill">${"█".repeat(filled)}</span><span class="bar-track">${"░".repeat(empty)}</span>`;
  }

  function cmdSkills() {
    printHTML(`<span class="section-title">Technical skills</span>`);
    printBlank();

    const levels = {
      Go: 95,
      "C/C++": 80,
      "TypeScript/JavaScript": 75,
      "Shell Scripting": 85,
      "Cosmos SDK": 90,
      Git: 95,
      gRPC: 85,
      Flutter: 70,
      Blockchain: 90,
      LSP: 85,
    };

    printHTML(`  <span class="accent">languages</span>`);
    printHTML(`    ${SKILLS.languages.map((s) => `<span class="cyan">${escapeHtml(s)}</span>`).join("  ·  ")}`);
    printBlank();
    printHTML(`  <span class="accent">frameworks & platforms</span>`);
    printHTML(`    ${SKILLS.frameworks.map((s) => `<span class="cyan">${escapeHtml(s)}</span>`).join("  ·  ")}`);
    printBlank();
    printHTML(`  <span class="accent">tools</span>`);
    printHTML(`    ${SKILLS.tools.map((s) => `<span class="cyan">${escapeHtml(s)}</span>`).join("  ·  ")}`);
    printBlank();
    printHTML(`  <span class="accent">focus areas</span>`);
    printHTML(`    ${SKILLS.focus.map((s) => `<span class="yellow">${escapeHtml(s)}</span>`).join("  ·  ")}`);
    printBlank();
    printHTML(`  <span class="accent">proficiency</span>`);
    Object.entries(levels).forEach(([k, v]) => {
      printHTML(
        `    <span class="kv-key">${escapeHtml(k)}</span> ${skillBar(v)} <span class="dim">${v}%</span>`
      );
    });
    printBlank();
  }

  function cmdEducation() {
    printHTML(`<span class="section-title">Education</span>`);
    printBlank();
    EDUCATION.forEach((e) => {
      printHTML(`  <span class="hl">${escapeHtml(e.degree)}</span>`);
      printHTML(`  <span class="cyan">${escapeHtml(e.school)}</span>  <span class="dim">│</span>  <span class="yellow">${escapeHtml(e.year)}</span>`);
      printBlank();
    });
    printHTML(`  <span class="accent">courses</span>`);
    COURSES.forEach((c) => printHTML(`    <span class="green">▸</span> ${escapeHtml(c)}`));
    printBlank();
    printHTML(`  <span class="accent">positions of responsibility</span>`);
    POSITIONS.forEach((p) => {
      printHTML(`    <span class="hl">${escapeHtml(p.title)}</span> — <span class="cyan">${escapeHtml(p.org)}</span> <span class="dim">(${escapeHtml(p.period)})</span>`);
      printHTML(`    <span class="dim">${escapeHtml(p.desc)}</span>`);
    });
    printBlank();
  }

  function cmdContact() {
    printHTML(`<span class="section-title">Contact</span>`);
    printBlank();
    printHTML(`  <span class="kv-key">email</span>  ${link("mailto:" + PROFILE.email, PROFILE.email)}`);
    printHTML(`  <span class="kv-key">phone</span>  <span class="cyan">${escapeHtml(PROFILE.phone)}</span>`);
    printHTML(`  <span class="kv-key">github</span> ${link(PROFILE.github, "github.com/harry-hov")}`);
    printHTML(`  <span class="kv-key">linkedin</span> ${link(PROFILE.linkedin, "linkedin.com/in/hariom-verma")}`);
    printHTML(`  <span class="kv-key">twitter</span> ${link(PROFILE.twitter, "@_hariomverma")}`);
    printHTML(`  <span class="kv-key">location</span> <span class="dim">${escapeHtml(PROFILE.location)}</span>`);
    printHTML(
      `  <span class="kv-key">status</span>  ${PROFILE.hireable ? '<span class="success">● open to opportunities</span>' : '<span class="dim">not actively looking</span>'}`
    );
    printBlank();
    printHTML(`  <span class="dim">Tip: </span><span class="hl">open github</span><span class="dim"> or </span><span class="hl">open email</span><span class="dim"> to open in a new tab</span>`);
    printBlank();
  }

  function cmdSocial() {
    cmdContact();
  }

  function cmdResume() {
    printHTML(`<span class="section-title">Resume</span>`);
    printBlank();
    printHTML(`  Summary of ${PROFILE.name}'s experience is available via terminal commands.`);
    printHTML(`  Full sections: <span class="hl">about</span> · <span class="hl">experience</span> · <span class="hl">projects</span> · <span class="hl">skills</span> · <span class="hl">education</span>`);
    printBlank();
    printHTML(`  Quick links:`);
    printHTML(`    ${link(PROFILE.github, "GitHub profile")}`);
    printHTML(`    ${link(PROFILE.linkedin, "LinkedIn")}`);
    printHTML(`    ${link("mailto:" + PROFILE.email, "Email me")}`);
    printBlank();
  }

  function resolvePath(path) {
    if (!path || path === ".") return cwd;
    if (path === "~" || path === "/") return "~";
    if (path.startsWith("~/")) path = path.slice(2);
    if (path.startsWith("/")) path = path.slice(1);

    let parts;
    if (path.startsWith("./")) path = path.slice(2);

    if (cwd === "~") {
      parts = path === ".." ? [] : path.split("/").filter(Boolean);
      if (path === "..") return "~";
    } else {
      const base = cwd === "~" ? [] : cwd.replace(/^~\//, "").split("/");
      const segs = path.split("/").filter(Boolean);
      for (const s of segs) {
        if (s === "..") base.pop();
        else if (s !== ".") base.push(s);
      }
      parts = base;
    }

    // absolute from ~
    if (!path.includes("..") && cwd === "~") {
      parts = path.split("/").filter(Boolean);
    } else if (path.startsWith("..") || path.includes("/")) {
      const base = cwd === "~" ? [] : cwd.replace(/^~\//, "").split("/").filter(Boolean);
      for (const s of path.split("/").filter(Boolean)) {
        if (s === "..") base.pop();
        else if (s !== ".") base.push(s);
      }
      parts = base;
    }

    return parts.length ? "~/" + parts.join("/") : "~";
  }

  function getNode(path) {
    const full = resolvePath(path);
    if (full === "~") return FS["~"];
    const parts = full.replace(/^~\//, "").split("/").filter(Boolean);
    let node = FS["~"];
    for (const p of parts) {
      if (!node || node.type !== "dir" || !node.children[p]) return null;
      node = node.children[p];
    }
    return node;
  }

  function cmdPwd() {
    print(cwd);
  }

  function cmdCd(args) {
    const target = args[0] || "~";
    if (target === "~" || target === "/" || target === "") {
      cwd = "~";
      updatePrompt();
      return;
    }
    const full = resolvePath(target);
    const node = getNode(full === "~" ? "~" : full.replace(/^~\//, ""));
    // getNode expects relative-ish — fix:
    const n = full === "~" ? FS["~"] : (() => {
      const parts = full.replace(/^~\//, "").split("/");
      let cur = FS["~"];
      for (const p of parts) {
        if (!cur?.children?.[p]) return null;
        cur = cur.children[p];
      }
      return cur;
    })();

    if (!n) {
      print(`cd: no such file or directory: ${target}`, "error");
      return;
    }
    if (n.type !== "dir") {
      print(`cd: not a directory: ${target}`, "error");
      return;
    }
    cwd = full;
    updatePrompt();
  }

  function updatePrompt() {
    const pathEl = document.querySelector("#prompt-label .path");
    if (pathEl) pathEl.textContent = cwd;
  }

  function listDir(path) {
    const full = path ? resolvePath(path) : cwd;
    const n =
      full === "~"
        ? FS["~"]
        : (() => {
            const parts = full.replace(/^~\//, "").split("/");
            let cur = FS["~"];
            for (const p of parts) {
              if (!cur?.children?.[p]) return null;
              cur = cur.children[p];
            }
            return cur;
          })();
    if (!n) return { error: `ls: cannot access '${path}': No such file or directory` };
    if (n.type !== "dir") return { error: null, files: [path.split("/").pop()], node: n };
    return { files: Object.keys(n.children).sort(), node: n };
  }

  function cmdLs(args) {
    const showAll = args.includes("-a") || args.includes("-la") || args.includes("-al");
    const long = args.includes("-l") || args.includes("-la") || args.includes("-al");
    const pathArg = args.find((a) => !a.startsWith("-"));
    const res = listDir(pathArg);
    if (res.error) {
      print(res.error, "error");
      return;
    }
    if (res.node.type === "file") {
      print(pathArg || "");
      return;
    }
    const names = res.files.filter((f) => showAll || !f.startsWith("."));
    if (!names.length) {
      printBlank();
      return;
    }
    if (long) {
      names.forEach((name) => {
        const child = res.node.children[name];
        const mode = child.type === "dir" ? "drwxr-xr-x" : "-rw-r--r--";
        const size = child.type === "dir" ? "4096" : "1024";
        const colored =
          child.type === "dir"
            ? `<span class="tree-dir">${escapeHtml(name)}/</span>`
            : `<span class="tree-file">${escapeHtml(name)}</span>`;
        printHTML(`  <span class="dim">${mode}  hariom  staff  ${size.padStart(5)}</span>  ${colored}`);
      });
    } else {
      const parts = names.map((name) => {
        const child = res.node.children[name];
        return child.type === "dir"
          ? `<span class="tree-dir">${escapeHtml(name)}/</span>`
          : `<span class="tree-file">${escapeHtml(name)}</span>`;
      });
      printHTML(`  ${parts.join("   ")}`);
    }
  }

  function cmdCat(args) {
    if (!args[0]) {
      print("cat: missing file operand", "error");
      printHTML(`<span class="dim">usage: cat &lt;file&gt;  (try: cat about.txt)</span>`);
      return;
    }
    const full = resolvePath(args[0]);
    const n =
      full === "~"
        ? FS["~"]
        : (() => {
            const parts = full.replace(/^~\//, "").split("/");
            let cur = FS["~"];
            for (const p of parts) {
              if (!cur?.children?.[p]) return null;
              cur = cur.children[p];
            }
            return cur;
          })();

    if (!n) {
      print(`cat: ${args[0]}: No such file or directory`, "error");
      return;
    }
    if (n.type === "dir") {
      print(`cat: ${args[0]}: Is a directory`, "error");
      return;
    }

    const map = {
      about: () => cmdAbout(),
      experience: () => cmdExperience([]),
      projects: () => cmdProjects([]),
      skills: () => cmdSkills(),
      education: () => cmdEducation(),
      contact: () => cmdContact(),
      "resume-link": () => cmdResume(),
      cmd: () => print("(binary executable)"),
    };

    if (map[n.content]) {
      map[n.content]();
    } else {
      print(n.content);
    }
  }

  function cmdTree(args) {
    const start = args[0] ? resolvePath(args[0]) : cwd;
    const rootName = start === "~" ? "~" : start.split("/").pop();

    function walk(path, prefix, isLast) {
      const n =
        path === "~"
          ? FS["~"]
          : (() => {
              const parts = path.replace(/^~\//, "").split("/");
              let cur = FS["~"];
              for (const p of parts) {
                if (!cur?.children?.[p]) return null;
                cur = cur.children[p];
              }
              return cur;
            })();
      if (!n) return;

      if (path !== start) {
        const name = path.split("/").pop();
        const branch = isLast ? "└── " : "├── ";
        const label =
          n.type === "dir"
            ? `<span class="tree-dir">${escapeHtml(name)}/</span>`
            : `<span class="tree-file">${escapeHtml(name)}</span>`;
        printHTML(`  <span class="tree-branch">${prefix}${branch}</span>${label}`);
      }

      if (n.type !== "dir") return;
      const kids = Object.keys(n.children).sort();
      kids.forEach((k, i) => {
        const childPath = path === "~" ? `~/${k}` : `${path}/${k}`;
        const last = i === kids.length - 1;
        const nextPrefix =
          path === start ? "" : prefix + (isLast ? "    " : "│   ");
        if (path === start) {
          walk(childPath, "", last);
        } else {
          walk(childPath, nextPrefix, last);
        }
      });
    }

    printHTML(`  <span class="tree-dir">${escapeHtml(rootName)}/</span>`);
    walk(start, "", true);
    printBlank();
  }

  function cmdOpen(args) {
    const target = (args[0] || "").toLowerCase();
    const map = {
      github: PROFILE.github,
      linkedin: PROFILE.linkedin,
      twitter: PROFILE.twitter,
      x: PROFILE.twitter,
      email: "mailto:" + PROFILE.email,
      mail: "mailto:" + PROFILE.email,
      website: PROFILE.website,
      vscode: "https://marketplace.visualstudio.com/items?itemName=harry-hov.vscode-gno",
      gno: "https://github.com/harry-hov/vscode-gno",
      animeverse: "https://animeverse.in/",
      tmail: "https://github.com/harry-hov/tmail",
    };
    if (!target) {
      print("open: missing operand", "error");
      printHTML(
        `<span class="dim">usage: open &lt;github|linkedin|twitter|email|vscode|animeverse|tmail&gt;</span>`
      );
      return;
    }
    const url = map[target];
    if (!url) {
      print(`open: unknown target '${args[0]}'`, "error");
      return;
    }
    printHTML(`  Opening ${link(url, url)} …`);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function cmdClear() {
    outputEl.innerHTML = "";
  }

  function cmdHistory() {
    if (!history.length) {
      print("  (empty)", "muted");
      return;
    }
    history.forEach((h, i) => {
      printHTML(`  <span class="dim">${String(i + 1).padStart(4)}</span>  ${escapeHtml(h)}`);
    });
  }

  function cmdEcho(args) {
    print(args.join(" "));
  }

  function cmdDate() {
    print(new Date().toString());
  }

  function cmdUname(args) {
    if (args.includes("-a")) {
      print(
        "PortfolioOS harry-hov 1.0.0 Darwin-compatible interactive-js browser " +
          (navigator.platform || "unknown")
      );
    } else {
      print("PortfolioOS");
    }
  }

  function cmdTheme(args) {
    if (args[0]) {
      const t = args[0].toLowerCase();
      if (t === "default" || t === "dark" || t === "github") {
        applyTheme(0, true);
      } else if (t === "amber" || t === "crt") {
        applyTheme(1, true);
      } else if (t === "matrix" || t === "green") {
        applyTheme(2, true);
      } else {
        print(`theme: unknown '${args[0]}' — try default | amber | matrix`, "error");
      }
      return;
    }
    cycleTheme();
  }

  function saveTheme() {
    try {
      localStorage.setItem("terminal-theme", themes[themeIndex]);
    } catch (_) {}
  }

  function applyTheme(index, announce) {
    themeIndex = ((index % themes.length) + themes.length) % themes.length;
    const t = themes[themeIndex];
    if (t === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", t);
    }
    saveTheme();
    if (announce) {
      print(t === "default" ? "theme: default (github dark)" : `theme: ${t}`, "success");
    }
  }

  function cycleTheme() {
    applyTheme(themeIndex + 1, true);
  }

  const FORTUNES = [
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Given enough eyeballs, all bugs are shallow. — Linus's Law",
    "Premature optimization is the root of all evil. — Knuth",
    "The best way to predict the future is to implement it.",
    "git commit -m \"fix stuff\" is a cry for help.",
    "In Go we trust. In Gno we deploy.",
    "A language server a day keeps the bad DX away.",
    "simplicity is the ultimate sophistication — also good API design.",
    "Read the source, Luke.",
    "There are only two hard things: cache invalidation, naming things, and off-by-one errors.",
  ];

  function cmdFortune() {
    printHTML(
      `  <span class="yellow">❝</span> ${escapeHtml(FORTUNES[Math.floor(Math.random() * FORTUNES.length)])} <span class="yellow">❞</span>`
    );
  }

  function cmdSudo(args) {
    if (args.join(" ") === "make me a sandwich") {
      print("Okay. 🥪", "success");
    } else if (args[0] === "rm" && args.includes("-rf")) {
      print("Nice try. This is a portfolio, not a production box.", "warn");
    } else {
      printHTML(
        `<span class="error">hariom is not in the sudoers file. This incident will be reported.</span>`
      );
      printHTML(`<span class="dim">(to the void — nobody is watching… probably)</span>`);
    }
  }

  function cmdGithub() {
    printHTML(`  ${link(PROFILE.github, PROFILE.github)}`);
    window.open(PROFILE.github, "_blank", "noopener,noreferrer");
  }

  function cmdExit() {
    print("There is no escape. This is the web.", "warn");
    printHTML(`<span class="dim">But you can close the tab. Or type </span><span class="hl">clear</span><span class="dim">.</span>`);
  }

  const COMMANDS = {
    help: { desc: "List available commands", usage: "help [command]", fn: cmdHelp },
    about: { desc: "Who I am and what I do", fn: cmdAbout },
    whoami: { desc: "Print username", fn: cmdWhoami },
    experience: { desc: "Work history (filter: experience gno)", usage: "experience [filter]", fn: cmdExperience },
    exp: { desc: "Alias for experience", fn: (a) => cmdExperience(a) },
    work: { desc: "Alias for experience", fn: (a) => cmdExperience(a) },
    projects: { desc: "Side projects & open source", usage: "projects [name]", fn: cmdProjects },
    project: { desc: "Alias for projects", fn: (a) => cmdProjects(a) },
    skills: { desc: "Technical skills & stack", fn: cmdSkills },
    skill: { desc: "Alias for skills", fn: cmdSkills },
    education: { desc: "Education & mentorship roles", fn: cmdEducation },
    edu: { desc: "Alias for education", fn: cmdEducation },
    contact: { desc: "Email, socials, location", fn: cmdContact },
    social: { desc: "Social links", fn: cmdSocial },
    resume: { desc: "Resume summary & links", fn: cmdResume },
    cv: { desc: "Alias for resume", fn: cmdResume },
    ls: { desc: "List directory contents", usage: "ls [-la] [path]", fn: cmdLs },
    cd: { desc: "Change directory", usage: "cd [dir]", fn: cmdCd },
    pwd: { desc: "Print working directory", fn: cmdPwd },
    cat: { desc: "Show file contents", usage: "cat <file>", fn: cmdCat },
    tree: { desc: "Show directory tree", usage: "tree [path]", fn: cmdTree },
    open: { desc: "Open link in new tab", usage: "open <github|linkedin|…>", fn: cmdOpen },
    clear: { desc: "Clear the terminal", fn: cmdClear },
    cls: { desc: "Alias for clear", fn: cmdClear },
    history: { desc: "Command history", fn: cmdHistory },
    echo: { desc: "Print arguments", usage: "echo [text…]", fn: cmdEcho },
    date: { desc: "Current date and time", fn: cmdDate },
    uname: { desc: "System information", usage: "uname [-a]", fn: cmdUname },
    neofetch: { desc: "System + profile fetch art", fn: cmdNeofetch },
    fetch: { desc: "Alias for neofetch", fn: cmdNeofetch },
    banner: { desc: "Show ASCII banner", fn: cmdBanner },
    theme: { desc: "Cycle or set color theme", usage: "theme [default|amber|matrix]", fn: cmdTheme },
    fortune: { desc: "Random developer wisdom", fn: cmdFortune },
    sudo: { desc: "Elevation (mostly for fun)", usage: "sudo <cmd>", fn: cmdSudo },
    github: { desc: "Open GitHub profile", fn: cmdGithub },
    gh: { desc: "Alias for github", fn: cmdGithub },
    exit: { desc: "Try to leave", fn: cmdExit },
    logout: { desc: "Alias for exit", fn: cmdExit },
    man: {
      desc: "Manual pages (alias for help)",
      fn: (a) => cmdHelp(a),
    },
  };

  // ─── Autocomplete ─────────────────────────────────────────────────────────
  function getCompletions(input) {
    const parts = input.trimStart().split(/\s+/);
    const endsWithSpace = /\s$/.test(input);

    if (parts.length === 1 && !endsWithSpace) {
      const partial = parts[0].toLowerCase();
      return Object.keys(COMMANDS)
        .filter((c) => c.startsWith(partial))
        .sort();
    }

    const cmd = parts[0].toLowerCase();
    const partial = endsWithSpace ? "" : (parts[parts.length - 1] || "");

    if (["cd", "ls", "cat", "tree", "open"].includes(cmd)) {
      if (cmd === "open") {
        const opts = ["github", "linkedin", "twitter", "email", "vscode", "animeverse", "tmail", "website"];
        return opts.filter((o) => o.startsWith(partial.toLowerCase()));
      }
      // file/dir completion from cwd
      const res = listDir();
      if (res.files) {
        return res.files
          .filter((f) => f.startsWith(partial))
          .map((f) => {
            const child = res.node.children[f];
            return child.type === "dir" ? f + "/" : f;
          });
      }
    }

    if (cmd === "theme") {
      return ["default", "amber", "matrix"].filter((t) => t.startsWith(partial.toLowerCase()));
    }

    if (cmd === "help" || cmd === "man") {
      return Object.keys(COMMANDS).filter((c) => c.startsWith(partial.toLowerCase()));
    }

    if (cmd === "experience" || cmd === "exp" || cmd === "work") {
      return ["gno", "gitopia", "git", "gsoc"].filter((t) => t.startsWith(partial.toLowerCase()));
    }

    return [];
  }

  function updateGhost() {
    const val = inputEl.value;
    const comps = getCompletions(val);
    if (comps.length !== 1) {
      ghostEl.textContent = "";
      return;
    }
    const parts = val.trimStart().split(/\s+/);
    const endsWithSpace = /\s$/.test(val);
    let suggestion = "";
    if (parts.length <= 1 && !endsWithSpace) {
      suggestion = comps[0].slice(parts[0].length);
    } else {
      const partial = endsWithSpace ? "" : (parts[parts.length - 1] || "");
      suggestion = comps[0].slice(partial.length);
    }
    // Invisible spacer for typed chars + dim completion suffix (monospace)
    ghostEl.textContent = suggestion ? " ".repeat(val.length) + suggestion : "";
  }

  function applyCompletion() {
    const val = inputEl.value;
    const comps = getCompletions(val);
    if (!comps.length) return;

    if (comps.length === 1) {
      const parts = val.trimStart().split(/\s+/);
      const leading = val.match(/^\s*/)?.[0] || "";
      const endsWithSpace = /\s$/.test(val);
      if (parts.length <= 1 && !endsWithSpace) {
        inputEl.value = leading + comps[0] + " ";
      } else {
        const base = endsWithSpace
          ? val
          : val.slice(0, val.length - (parts[parts.length - 1] || "").length);
        inputEl.value = base + comps[0] + (comps[0].endsWith("/") ? "" : " ");
      }
      updateGhost();
      return;
    }

    // multiple — show options
    echoPrompt(val);
    printHTML(`  ${comps.map((c) => `<span class="cyan">${escapeHtml(c)}</span>`).join("  ")}`);
    // common prefix
    let prefix = comps[0];
    for (const c of comps) {
      while (!c.startsWith(prefix) && prefix) prefix = prefix.slice(0, -1);
    }
    if (prefix) {
      const parts = val.trimStart().split(/\s+/);
      const leading = val.match(/^\s*/)?.[0] || "";
      const endsWithSpace = /\s$/.test(val);
      if (parts.length <= 1 && !endsWithSpace) {
        inputEl.value = leading + prefix;
      } else {
        const base = endsWithSpace
          ? val
          : val.slice(0, val.length - (parts[parts.length - 1] || "").length);
        inputEl.value = base + prefix;
      }
    }
    updateGhost();
  }

  // ─── Execute ──────────────────────────────────────────────────────────────
  function execute(raw) {
    const line = raw.trim();
    if (!line) return;

    history.push(line);
    historyIndex = history.length;
    draft = "";

    echoPrompt(line);

    // support simple pipes? no — keep simple
    // support && chaining lightly
    const segments = line.split(/\s*&&\s*/);
    for (const seg of segments) {
      const tokens = seg.trim().match(/(?:[^\s"]+|"[^"]*")+/g) || [];
      const parts = tokens.map((t) => t.replace(/^"|"$/g, ""));
      if (!parts.length) continue;
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      const entry = COMMANDS[cmd];
      if (!entry) {
        print(`command not found: ${cmd}`, "error");
        printHTML(
          `<span class="dim">Type </span><span class="hl">help</span><span class="dim"> for a list of commands.</span>`
        );
        break;
      }
      try {
        entry.fn(args);
      } catch (err) {
        print(`error: ${err.message}`, "error");
        break;
      }
    }
  }

  function submitLine() {
    if (!inputEl) return;
    const val = inputEl.value;
    inputEl.value = "";
    if (ghostEl) ghostEl.textContent = "";
    execute(val);
    focusInput();
  }

  // ─── Input handling ───────────────────────────────────────────────────────
  const promptForm = document.getElementById("prompt-line");
  if (promptForm) {
    promptForm.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      submitLine();
      return false;
    });
  }

  // Capture phase so Enter always runs even if something else steals bubble
  inputEl.addEventListener(
    "keydown",
    (e) => {
      const isEnter =
        e.key === "Enter" || e.code === "Enter" || e.keyCode === 13 || e.which === 13;
      if (!isEnter) return;
      e.preventDefault();
      e.stopPropagation();
      submitLine();
    },
    true
  );

  inputEl.addEventListener("keydown", (e) => {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) clickSound();

    const isEnter =
      e.key === "Enter" || e.code === "Enter" || e.keyCode === 13 || e.which === 13;
    if (isEnter) {
      // handled in capture listener
      e.preventDefault();
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      applyCompletion();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      if (historyIndex === history.length) draft = inputEl.value;
      historyIndex = Math.max(0, historyIndex - 1);
      inputEl.value = history[historyIndex];
      updateGhost();
      // move cursor to end
      requestAnimationFrame(() => {
        inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
      });
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= history.length) return;
      historyIndex = Math.min(history.length, historyIndex + 1);
      inputEl.value = historyIndex === history.length ? draft : history[historyIndex];
      updateGhost();
      return;
    }

    if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      echoPrompt(inputEl.value + "^C");
      inputEl.value = "";
      ghostEl.textContent = "";
      return;
    }

    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      cmdClear();
      return;
    }

    if (e.key === "u" && e.ctrlKey) {
      e.preventDefault();
      inputEl.value = "";
      ghostEl.textContent = "";
      return;
    }

    if (e.key === "w" && e.ctrlKey) {
      e.preventDefault();
      inputEl.value = inputEl.value.replace(/\S+\s*$/, "");
      updateGhost();
      return;
    }

    if (e.key === "t" && e.ctrlKey) {
      e.preventDefault();
      cycleTheme();
      return;
    }

    // defer ghost update for normal keys
    requestAnimationFrame(updateGhost);
  });

  inputEl.addEventListener("input", updateGhost);

  function focusInput() {
    try {
      inputEl.focus({ preventScroll: true });
    } catch (_) {
      inputEl.focus();
    }
  }

  // Click anywhere in terminal focuses input (except links / buttons / text selection)
  terminalEl.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    focusInput();
  });

  document.getElementById("app")?.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    focusInput();
  });

  document.addEventListener("keydown", (e) => {
    const isEnter =
      e.key === "Enter" || e.code === "Enter" || e.keyCode === 13 || e.which === 13;

    // Always submit from anywhere when Enter is pressed (except real links/buttons)
    if (isEnter && !e.target.closest("a, button")) {
      if (e.target !== inputEl) {
        e.preventDefault();
        focusInput();
        submitLine();
      }
      return;
    }

    if (e.target === inputEl) return;
    if (e.target.closest("button, a, input, textarea")) return;
    if (e.metaKey || (e.ctrlKey && e.key !== "l" && e.key !== "c" && e.key !== "u" && e.key !== "w" && e.key !== "t")) return;
    // Route printable keys and editing keys into the command line
    if (e.key.length === 1 || e.key === "Backspace" || e.key === "Tab") {
      focusInput();
    }
  });

  themeBtn.addEventListener("click", () => {
    cycleTheme();
    focusInput();
  });

  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    if (soundOn) clickSound();
    focusInput();
  });

  // ─── Boot sequence ────────────────────────────────────────────────────────
  async function boot() {
    // Keep input enabled so users can type even if animation is interrupted
    inputEl.readOnly = true;
    focusInput();

    try {
      const lines = [
        { text: "PortfolioOS bootloader v1.0 …", cls: "muted", delay: 40 },
        { text: "Loading profile: Hariom Verma … ok", cls: "muted", delay: 30 },
        { text: "Mounting virtual filesystem … ok", cls: "muted", delay: 30 },
        { text: "Starting interactive shell …", cls: "muted", delay: 40 },
        { text: "", cls: "", delay: 20 },
      ];

      for (const line of lines) {
        await new Promise((r) => setTimeout(r, line.delay));
        print(line.text, line.cls);
      }

      cmdBanner();
      cmdNeofetch();
      printHTML(
        `<span class="dim">Welcome. Start with </span><span class="hl">help</span><span class="dim">, </span><span class="hl">about</span><span class="dim">, or </span><span class="hl">ls</span><span class="dim">.</span>`
      );
      printBlank();
    } catch (err) {
      print(`boot warning: ${err.message || err}`, "warn");
    } finally {
      inputEl.readOnly = false;
      inputEl.disabled = false;
      focusInput();
    }
  }

  // Persist theme preference
  try {
    const saved = localStorage.getItem("terminal-theme");
    if (saved && themes.includes(saved)) {
      applyTheme(themes.indexOf(saved), false);
    }
  } catch (_) {}

  // Focus as soon as possible (mobile + desktop)
  focusInput();
  window.addEventListener("load", focusInput);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) focusInput();
  });

  boot();
})();
