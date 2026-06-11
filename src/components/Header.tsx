import { useState } from "react";

type HeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

const navItems = [
  { label: "Projects", path: "/projects" },
  { label: "Index", path: "/index" },
  { label: "Practice", path: "/practice" },
  { label: "Notes", path: "/notes" },
];

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <button className="brand-link" onClick={() => go("/")} aria-label="Go to home">
        <span>HERMANSSON</span>
        <span>HILLER</span>
        <span>LUNDBERG</span>
      </button>
      <button
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        Menu
      </button>
      <nav id="primary-navigation" className={open ? "is-open" : ""} aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => go(item.path)}
            aria-current={currentPath.startsWith(item.path) ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
