
import React from 'react';

import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Download,
  Terminal,
  Layers,
  Activity,
  Box,
  ExternalLink,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  FileText,
  Globe,
  ShieldCheck
} from 'lucide-react';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';

export const icons = {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Download,
  Terminal,
  Layers,
  Activity,
  Box,
  ExternalLink,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  FileText,
  Globe,
  ShieldCheck
};

export function Icon({ name, ...props }) {
  const Comp = icons[name] || Layers;
  return <Comp {...props} />;
}

export function Container({ children, className = '' }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </span>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  link,
  linkText
}) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{kicker}</Eyebrow>
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
      </div>

      {link && (
        <Link className="text-link" to={link}>
          {linkText || 'Explore all'}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}

export function ButtonLink({
  to,
  children,
  secondary = false,
  external = false
}) {
  let cls = `button ${secondary ? 'button-ghost' : 'button-main'}`;

  return external ? (
    <a
      className={cls}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

/* Navbar links */
const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/journal', label: 'Journal' },
  { to: '/learning-hub', label: 'Learning Hub' }
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const loc = useLocation();

  React.useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header className="site-header">
      <Container className="nav-wrap">
        <Link to="/" className="brand">
          <span className="brand-mark">
            R<span>.</span>
          </span>

          <span className="brand-word">
            rishabh<span className="brand-muted">.dev</span>
          </span>
        </Link>

        <nav
          className={`nav-links ${open ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              end={l.end}
              to={l.to}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Link className="mobile-contact" to="/contact">
            Let's connect
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link className="nav-contact" to="/contact">
          Let's connect
          <ArrowUpRight size={16} />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <div>
            <Link to="/" className="footer-name">
              Rishabh<span>.</span>
            </Link>

            <p>
              Building systems. Learning every day.
              <br />
              Sharing the journey along the way.
            </p>
          </div>

          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/journal">Journal</Link>
            <Link to="/learning-hub">Learning Hub</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Rishabh Kumar.
            Built with React & curiosity.
          </span>

          <span>
            Designed for the long run
            <span className="heart">✦</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}

export function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card accent-${project.accent}`}
    >
      <div className="project-graphic">
        <div className="grid-decoration" />

        <div className="project-symbol">
          <Icon
            name={project.icon}
            size={36}
            strokeWidth={1.4}
          />
        </div>

        <span className="project-orbit orbit-one" />
        <span className="project-orbit orbit-two" />
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <ArrowUpRight size={18} />
        </div>

        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="chip-list">
          {project.tags.slice(0, 4).map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function PageHero({ tag, title, desc }) {
  return (
    <section className="page-hero">
      <Container>
        <Eyebrow>{tag}</Eyebrow>
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
      </Container>
    </section>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
