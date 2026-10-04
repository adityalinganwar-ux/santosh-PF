"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const skills = {
  Development: ["C", "Python", "Java", "HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  AIEngineering: ["AI Development", "AI Integration", "Prompt Engineering", "Automation Thinking", "Problem Solving"],
  DataBackend: ["SQL", "PostgreSQL", "MongoDB", "Database Design", "REST APIs", "Backend Development"],
  QualitySystems: ["Software Testing", "QA Fundamentals", "Requirements Understanding", "System Thinking", "Debugging"],
};

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "AI Development",
    text: "Building practical AI-driven solutions and learning how intelligence can be integrated into real software workflows.",
    tag: "CORE FOCUS",
  },
  {
    icon: Code2,
    title: "Software Development",
    text: "Full-stack fundamentals across frontend, backend, databases and API-driven applications.",
    tag: "ENGINEERING",
  },
  {
    icon: Search,
    title: "Market Research",
    text: "Interested in understanding users, markets, technology trends and turning research into useful product decisions.",
    tag: "CAREER TRACK",
  },
  {
    icon: ShieldCheck,
    title: "Software Quality",
    text: "A quality-first mindset built around requirements, validation, debugging and reliable software behavior.",
    tag: "QUALITY",
  },
];

const assistantAnswers: Record<string, string> = {
  "who are you": "I’m Santosh Tulshiram Aher, a final-year B.E. CSE student and fresher focused on AI development, software development and market research.",
  "skills": "Santosh works across C, Python, Java, HTML, CSS, JavaScript, React.js, Node.js, SQL, PostgreSQL and MongoDB, with additional focus on AI, backend and software quality.",
  "experience": "Santosh is a fresher and final-year student. His current goal is to gain practical industry exposure through market research, AI development and software development opportunities.",
  "education": "B.E. in Computer Science and Engineering — final year.",
  "certifications": "Hydra is listed as a certification, with additional credentials to be added later.",
};

const navItems = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(assistantAnswers["who are you"]);

  useEffect(() => {
    const saved = window.localStorage.getItem("santosh-theme");
    if (saved === "light") setDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("santosh-theme", dark ? "dark" : "light");
  }, [dark]);

  const skillCount = useMemo(
    () => Object.values(skills).reduce((sum, values) => sum + values.length, 0),
    [],
  );

  function askAssistant() {
    const normalized = question.trim().toLowerCase();
    if (!normalized) return;
    const match = Object.entries(assistantAnswers).find(([key]) => normalized.includes(key) || key.includes(normalized));
    setAnswer(match?.[1] ?? "Ask me about Santosh, his skills, experience, education, career focus or certifications.");
    setQuestion("");
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <main className={dark ? "site dark" : "site light"}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <nav className="nav-shell">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Go to top">
            <span className="brand-mark">SA</span>
            <span>
              <strong>SANTOSH</strong>
              <small>TULSHIRAM AHER</small>
            </span>
          </button>

          <div className="nav-links">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-button" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="talk-button" onClick={() => scrollTo("contact")}>LET&apos;S TALK <ArrowUpRight size={16} /></button>
            <button className="menu-button" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              {navItems.map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)}>{label}</button>
              ))}
              <button onClick={() => setDark((v) => !v)}>{dark ? "LIGHT MODE" : "DARK MODE"}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
          </motion.div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            FINAL YEAR · B.E. COMPUTER SCIENCE &amp; ENGINEERING
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
            Building my path through <span>AI, software &amp; research.</span>
          </motion.h1>
          <motion.p className="hero-text" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
            I&apos;m Santosh Tulshiram Aher — a final-year Computer Science student and fresher exploring AI development, software development and market research with a practical, curious mindset.
          </motion.p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={() => scrollTo("contact")}>LET&apos;S CONNECT <ArrowRight size={18} /></button>
            <a className="ghost-button" href="/resume/Santosh_Tulshiram_Aher_ATS_Resume.pdf" download>DOWNLOAD RESUME <Download size={17} /></a>
          </div>

          <div className="hero-meta">
            <span><MapPin size={15} /> Maharashtra, India</span>
            <span><BriefcaseBusiness size={15} /> Fresher · Final Year</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="scanner-line" />
          <div className="profile-card">
            <div className="card-corner corner-a" />
            <div className="card-corner corner-b" />
            <div className="profile-topline"><span>PROFILE // SA-001</span><span>ONLINE</span></div>
            <div className="profile-photo-wrap">
              <Image src="/profile.jpg" alt="Santosh Tulshiram Aher" fill priority sizes="(max-width: 900px) 80vw, 470px" className="profile-photo" />
            </div>
            <div className="profile-caption">
              <div>
                <strong>SANTOSH AHER</strong>
                <span>AI · SOFTWARE · RESEARCH</span>
              </div>
              <div className="signal-bars"><i /><i /><i /><i /><i /></div>
            </div>
          </div>
          <div className="floating-chip chip-ai"><BrainCircuit size={17} /> AI DEVELOPMENT</div>
          <div className="floating-chip chip-code"><Code2 size={17} /> SOFTWARE</div>
          <div className="floating-chip chip-research"><Search size={17} /> MARKET RESEARCH</div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div className="ticker-set" key={loop}>
              <span>AI DEVELOPMENT</span><i>✦</i><span>SOFTWARE DEVELOPMENT</span><i>✦</i><span>MARKET RESEARCH</span><i>✦</i><span>COMPUTER SCIENCE</span><i>✦</i><span>BUILD · LEARN · RESEARCH</span><i>✦</i>
            </div>
          ))}
        </div>
      </div>

      <section className="section about" id="about">
        <div className="section-heading">
          <span className="section-label">01 / ABOUT</span>
          <h2>A curious engineer preparing for <em>real-world impact.</em></h2>
        </div>
        <div className="about-grid">
          <div className="about-statement">
            <p>
              I&apos;m a final-year B.E. CSE student who enjoys understanding how technology, users and software systems come together. My current direction sits at the intersection of <strong>AI, software development and market research.</strong>
            </p>
            <p>
              I&apos;m looking for an environment where I can learn from real teams, contribute to practical work and turn technical curiosity into measurable value.
            </p>
          </div>
          <div className="mini-cards">
            <div className="mini-card"><span>01</span><strong>{skillCount}+</strong><small>SKILLS &amp; TOOLS</small></div>
            <div className="mini-card"><span>02</span><strong>03</strong><small>CAREER TRACKS</small></div>
            <div className="mini-card"><span>03</span><strong>01</strong><small>CERTIFICATION</small></div>
          </div>
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="section-heading row-heading">
          <div><span className="section-label">02 / EXPERTISE</span><h2>Where I want to <em>grow and contribute.</em></h2></div>
          <p>Strong fundamentals, a learning mindset and an interest in solving practical problems across technical and business contexts.</p>
        </div>
        <div className="expertise-grid">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;
            return <motion.article className="expertise-card" key={item.title} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 240 }}>
              <div className="card-number">0{index + 1}</div>
              <div className="expertise-icon"><Icon size={24} /></div>
              <span className="card-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-arrow"><ArrowUpRight size={18} /></span>
            </motion.article>;
          })}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-label">03 / SKILLS</span>
          <h2>Tools I&apos;m <em>learning, using and growing with.</em></h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, values], groupIndex) => (
            <div className="skill-panel" key={group}>
              <div className="skill-panel-top"><span>0{groupIndex + 1}</span><strong>{group.replace(/([A-Z])/g, " $1").trim()}</strong></div>
              <div className="skill-tags">{values.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <span className="section-label">04 / EXPERIENCE</span>
          <h2>Starting with <em>curiosity. Building with purpose.</em></h2>
        </div>
        <div className="experience-card">
          <div className="experience-icon"><BriefcaseBusiness size={28} /></div>
          <div>
            <span className="card-tag">CURRENT STATUS</span>
            <h3>Fresher · Final-Year Student</h3>
            <p>
              Ready to gain hands-on industry experience through internships and entry-level opportunities in market research, AI development and software development.
            </p>
          </div>
          <div className="experience-side"><strong>OPEN</strong><span>TO LEARNING</span></div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading row-heading">
          <div><span className="section-label">05 / PROJECTS</span><h2>No public projects <em>listed yet.</em></h2></div>
          <p>This section is intentionally honest — projects can be added here as Santosh builds and publishes real work.</p>
        </div>
        <div className="projects-empty">
          <div className="empty-orbit"><Sparkles size={30} /></div>
          <div><span className="card-tag">PORTFOLIO IN PROGRESS</span><h3>Work will appear here as it is built.</h3><p>For now, the portfolio focuses on Santosh&apos;s skills, career direction, education and readiness for industry opportunities.</p></div>
          <ArrowUpRight className="empty-arrow" size={26} />
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <span className="section-label">06 / EDUCATION</span>
          <h2>Learning the <em>engineering fundamentals.</em></h2>
        </div>
        <div className="education-card">
          <div className="education-icon"><GraduationCap size={30} /></div>
          <div className="education-main">
            <span className="card-tag">CURRENT EDUCATION</span>
            <h3>B.E. Computer Science &amp; Engineering</h3>
            <p>Final Year · Maharashtra, India</p>
          </div>
          <div className="education-status"><span>STATUS</span><strong>FINAL YEAR</strong></div>
        </div>
      </section>

      <section className="section credentials-section">
        <div className="section-heading">
          <span className="section-label">07 / CREDENTIALS</span>
          <h2>Certification &amp; <em>continuous learning.</em></h2>
        </div>
        <div className="credential-row">
          <div className="credential-card">
            <div className="credential-icon"><Award size={24} /></div>
            <div><span>TECHNICAL CERTIFICATION</span><h3>Hydra</h3><p>Certification listed in current profile.</p></div>
          </div>
          <div className="credential-note"><span>MORE TO COME</span><p>Additional certifications can be added as Santosh completes them.</p></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="section-label">08 / CONTACT</span>
            <h2>Let&apos;s build the <em>next opportunity.</em></h2>
            <p>Open to internship and entry-level conversations around market research, AI development and software development.</p>
            <div className="contact-links">
              <a href="mailto:santoshaher730@gmail.com"><Mail size={18} /> santoshaher730@gmail.com <ArrowUpRight size={15} /></a>
              <a href="tel:+917823853147"><Phone size={18} /> +91 78238 53147 <ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/in/santosh-aher-60453428a/" target="_blank" rel="noreferrer"><ExternalLink size={18} /> LinkedIn Profile <ArrowUpRight size={15} /></a>
              <a href="https://github.com/santoshaherdev730" target="_blank" rel="noreferrer"><ExternalLink size={18} /> GitHub Profile <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-top"><span>CONTACT // SA</span><span>01</span></div>
            <div className="contact-card-center"><Send size={34} /><strong>READY TO CONNECT</strong><span>MARKET RESEARCH · AI · SOFTWARE</span></div>
            <button onClick={() => setAssistantOpen(true)}>ASK THE AI ASSISTANT <ArrowRight size={17} /></button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div><strong>SANTOSH TULSHIRAM AHER</strong><span>AI · SOFTWARE · RESEARCH</span></div>
        <div>© {new Date().getFullYear()} · Built for the next opportunity.</div>
      </footer>

      <button className="ai-fab" onClick={() => setAssistantOpen((v) => !v)} aria-label="Open AI assistant"><Sparkles size={20} /><span>AI</span></button>
      <AnimatePresence>
        {assistantOpen && (
          <motion.aside className="assistant" initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 22, scale: .98 }}>
            <div className="assistant-head"><div><strong>Santosh AI Assistant</strong><span>PROFILE COPILOT</span></div><button onClick={() => setAssistantOpen(false)}><X size={18} /></button></div>
            <div className="assistant-body">
              <div className="assistant-bubble">{answer}</div>
              <div className="assistant-suggestions">
                {['Who are you?', 'What are your skills?', 'What is your experience?'].map((q) => <button key={q} onClick={() => { setQuestion(q); }}>{q}</button>)}
              </div>
            </div>
            <div className="assistant-input"><input value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => e.key === "Enter" && askAssistant()} placeholder="Ask about Santosh..." /><button onClick={askAssistant}><Send size={17} /></button></div>
          </motion.aside>
        )}
      </AnimatePresence>
      <button className="scroll-top" onClick={() => scrollTo("top")}><ArrowDown size={16} /></button>
    </main>
  );
}
