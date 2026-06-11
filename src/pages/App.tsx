import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function App() {
  const go = (path: string) => {
    window.history.pushState({}, "", path);
  };

  return (
    <>
      <Header currentPath={window.location.pathname} onNavigate={go} />
      <main className="page">
        <section className="home-hero">
          <div className="hero-name-lockup">
            <p className="hero-meta">Hermansson Hiller Lundberg</p>
            <h1 className="hero-name">
              <span>Architecture</span>
              <span>with permanence</span>
            </h1>
          </div>
          <p className="hero-intro">A calm, editorial archive for projects, notes, people and practice.</p>
        </section>
      </main>
      <Footer onNavigate={go} />
    </>
  );
}
