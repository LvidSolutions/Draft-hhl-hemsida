type FooterProps = {
  onNavigate: (path: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <div>
        <strong>Hermansson Hiller Lundberg</strong>
        <span>Stockholm, Sweden</span>
      </div>
      <address>
        Birger Jarlsgatan 57 C<br />
        113 56 Stockholm<br />
        <a href="mailto:office@hhl.se">office@hhl.se</a>
        <br />
        <a href="tel:+46800000000">+46 8 00 00 00</a>
      </address>
      <div className="footer-links">
        <button onClick={() => onNavigate("/contact")}>Contact</button>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
