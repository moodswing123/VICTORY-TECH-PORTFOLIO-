// Signal Noir: single-page Victory Tech portfolio composition and interaction layer.
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot, Gamepad2, Github, Globe2, Linkedin, Menu, MessageCircle, MessageSquareText, Minus, MoveUpRight, Radio, Send, Sparkles, X } from "lucide-react";
import { toast } from "sonner";
import { projects, technologyGroups, contactLinks, futureCards, stats, type ProjectCategory } from "@/lib/siteData";

const filters = ["All", "Web Applications", "Bots", "Games", "Tools", "Messaging"] as const;

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] as const } } };

function SectionIntro({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: ReactNode; copy?: string }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="section-intro">
      <div className="eyebrow"><span className="eyebrow-index">{index}</span><span className="signal-dot" />{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  );
}

function AppMark({ small = false }: { small?: boolean }) {
  return <span className={small ? "app-mark app-mark-small" : "app-mark"} aria-hidden="true"><span /><span /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [scrolled, setScrolled] = useState(false);
  const filteredProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter || (filter === "Web Applications" && project.category === "Tools")), [filter]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleProject = (project: (typeof projects)[number]) => {
    if (!project.url) {
      toast("The WhatsApp Bot URL is ready to configure when your final link is available.");
      return;
    }
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
      <div className="site-shell">
      <aside className="system-rail" aria-label="Victory Tech system rail"><span className="rail-label">VT / 01</span><span className="rail-line" /><span className="rail-label rail-vertical">BUILDING IDEAS</span><span className="rail-line" /><span className="rail-label">2026</span></aside>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>

        <a className="brand-lockup" href="#top" onClick={closeMenu} aria-label="Victory Tech home"><AppMark /><span>VICTORY <b>TECH</b></span></a>
        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#technologies" onClick={closeMenu}>Technologies</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let’s build <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-art" aria-hidden="true"><div className="hero-grid" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-crosshair"><span /><span /></div><div className="hero-node node-one" /><div className="hero-node node-two" /></div>
          <div className="hero-inner">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={reveal} className="eyebrow"><span className="eyebrow-index">00</span><span className="signal-dot" />Independent technology studio</motion.div>
              <motion.h1 variants={reveal}>Victory<br /><em>Tech</em><span className="heading-period">.</span></motion.h1>
              <motion.p variants={reveal} className="hero-lede">Building ideas.<br /><strong>Creating technology.</strong></motion.p>
              <motion.p variants={reveal} className="hero-description">We turn working ideas into useful interfaces, automation tools, game systems, and technology platforms. Victory Tech is where concepts become something people can use.</motion.p>
              <motion.div variants={reveal} className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={16} /></a><a className="button button-quiet" href="#contact">Get in touch <Minus size={16} /></a></motion.div>
            </motion.div>
            <motion.div className="hero-index-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.6 }}><span>VT / SYSTEM 01</span><strong>Useful software<br />in active development.</strong><div className="index-line"><span>BUILD STATUS</span><b><i /> LIVE</b></div></motion.div>
          </div>
          <div className="hero-footer"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span>EST. 2026 / DIGITAL ECOSYSTEM</span></div>
        </section>

        <section className="about-section section-pad" id="about"><div className="container about-layout"><SectionIntro index="01" eyebrow="The studio" title={<>A place for<br /><em>the next idea.</em></>} /><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="about-copy"><p className="large-copy">Victory Tech is a developer-led technology studio exploring the space between a sharp idea and a useful digital experience.</p><p>Victory Tech is a developer-led studio building useful digital experiences across web applications, automation systems, messaging tools, bots, generators, and interactive games.</p><p>The studio experiments quickly, then turns the strongest concepts into working products. Each build is part of an evolving technology ecosystem.</p><a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={16} /></a></motion.div></div><div className="container stats-grid">{stats.map((stat, index) => <motion.div className="stat-card" key={stat.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.07 }}><span>0{index + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></motion.div>)}</div></section>

        <section className="projects-section section-pad" id="projects"><div className="container"><SectionIntro index="02" eyebrow="Selected work" title={<>Projects that move<br /><em>from thought to live.</em></>} copy="A working set of tools, systems, and experiments from the Victory Tech ecosystem." /><div className="filter-row" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? projects.length : projects.filter((p) => p.category === item || (item === "Web Applications" && p.category === "Tools")).length}</span></button>)}</div><motion.div layout className="projects-grid"> <AnimatePresence mode="popLayout">{filteredProjects.map((project, index) => { const Icon = project.icon; return <motion.article layout key={project.id} className={`project-card accent-${project.accent}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25, delay: index * 0.04 }}><div className="project-card-top"><div className="project-icon"><Icon size={22} strokeWidth={1.7} /></div><span className="status-pill"><i />{project.status}</span></div><div className="project-card-content"><p className="project-label">{project.label}</p><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-card-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="circle-arrow" onClick={() => handleProject(project)} aria-label={`${project.action}: ${project.name}`}><ArrowUpRight size={17} /></button></div></motion.article>})}</AnimatePresence></motion.div></div></section>

        <section className="tech-section section-pad" id="technologies"><div className="container"><SectionIntro index="03" eyebrow="The toolkit" title={<>Built across<br /><em>the stack.</em></>} copy="Technologies are tools, not trophies. The right combination changes with the problem." /><div className="tech-grid">{technologyGroups.map((group, index) => { const Icon = group.icon; return <motion.div className="tech-group" key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="tech-group-head"><Icon size={18} /><span>0{index + 1}</span></div><h3>{group.title}</h3><div className="tech-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>})}</div></div></section>

        <section className="ecosystem-section section-pad"><div className="container"><SectionIntro index="04" eyebrow="One ecosystem" title={<>Different builds.<br /><em>One direction.</em></>} /><div className="ecosystem-map"><div className="eco-root"><AppMark small /><span>VICTORY TECH</span><b>Core studio</b></div><div className="eco-line eco-line-main" /><div className="eco-branches"><div className="eco-branch"><div className="eco-line vertical" /><div className="eco-node"><Globe2 size={18} /><span>WEB TOOLS</span><strong>VCF Generator</strong><small>Contact utility</small></div><div className="eco-node secondary"><MessageSquareText size={18} /><span>MESSAGING</span><strong>Cipher SMS</strong><small>Digital communication</small></div></div><div className="eco-branch"><div className="eco-line vertical" /><div className="eco-node"><Bot size={18} /><span>AUTOMATION</span><strong>WhatsApp Bot</strong><small>Active development</small></div></div><div className="eco-branch"><div className="eco-line vertical" /><div className="eco-node"><Gamepad2 size={18} /><span>GAMING</span><strong>JJK Game</strong><small>Community beta</small></div></div></div></div></div></section>

        <section className="future-section section-pad"><div className="container future-layout"><SectionIntro index="05" eyebrow="Forward motion" title={<>What’s<br /><em>next?</em></>} /><div className="future-content"><p className="large-copy">Victory Tech is continuously evolving. New projects, tools, bots, platforms, and experiments are currently in development.</p><div className="future-grid">{futureCards.map((card, index) => { const Icon = card.icon; return <motion.div className="future-card" key={card.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.07 }}><div><span className="future-number">0{index + 1}</span><Icon size={19} /></div><p>{card.label}</p><h3>{card.title}</h3><span>{card.copy}</span></motion.div>})}</div></div></div></section>

        <section className="contact-section section-pad" id="contact"><div className="container contact-layout"><div><div className="eyebrow"><span className="eyebrow-index">06</span><span className="signal-dot" />Open channel</div><h2>Let’s build<br /><em>something great.</em></h2><p>Have a project, idea, collaboration, or question? Get in touch with Victory Tech.</p></div><div className="contact-panel"><div className="contact-panel-head"><span>CONTACT DIRECTORY / OPEN CHANNEL</span><Radio size={16} /></div>{contactLinks.map((item) => <a href={item.href} key={item.label} className="contact-row"><span>{item.label}</span><strong>{item.value}</strong><MoveUpRight size={16} /></a>)}<p className="contact-note">Official contact channels are now connected. The WhatsApp Bot card opens the supplied WhatsApp number.</p></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand-lockup" href="#top"><AppMark /><span>VICTORY <b>TECH</b></span></a><p>Building ideas.<br />Creating technology.</p><div className="footer-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#technologies">Technologies</a><a href="#contact">Contact</a></div><div className="footer-social"><a href="https://github.com/moodswing123" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://t.me/victory_is_h1m" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={17} /></a><a href="https://wa.me/2347038253086" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="https://whatsapp.com/channel/0029VbD3gLiAzNbpaG3Z2E3x" target="_blank" rel="noreferrer" aria-label="WhatsApp channel"><MessageSquareText size={17} /></a></div></div><div className="container footer-bottom"><span>© 2026 Victory Tech. All rights reserved.</span><span>Designed and developed as part of the Victory Tech ecosystem.</span><span className="footer-spark"><Sparkles size={13} /> VT / 01</span></div></footer>
    </div>
  );
}
