"use client";
import Link from 'next/link';

// ─── STYLES ────────────────────────
const styles = `
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background-color: #0a0a0a;
  color: #ededed;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.portfolio-root {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* Typography & Links */
h1 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.05em; margin-bottom: 0.5rem; color: #ffffff; }
h2 { font-size: 1.25rem; font-weight: 600; margin: 3rem 0 1.5rem; color: #ffffff; border-bottom: 1px solid #333; padding-bottom: 0.5rem; }
h3 { font-size: 1.1rem; font-weight: 600; color: #ffffff; margin-bottom: 0.25rem; }
p { font-size: 1rem; color: #a1a1aa; margin-bottom: 1rem; }
a { color: #ffffff; text-decoration: none; border-bottom: 1px solid #555; transition: border-color 0.2s; }
a:hover { border-bottom-color: #fff; }

/* Header Elements */
.subtitle { font-size: 1.15rem; color: #a1a1aa; margin-bottom: 1.5rem; }
.contact-links { display: flex; gap: 1.5rem; font-size: 0.95rem; margin-bottom: 3rem; }

/* Grid Layouts */
.stack-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 1rem; 
  margin-bottom: 2rem; 
}
.stack-item {
  background: #111;
  border: 1px solid #333;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}
.stack-label { color: #ffffff; font-weight: 600; display: block; margin-bottom: 0.25rem; }
.stack-tech { color: #a1a1aa; }

/* Project Cards */
.project-card {
  margin-bottom: 2.5rem;
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}
.project-role { font-size: 0.9rem; color: #888; font-family: monospace; }
.project-metrics {
  margin-top: 0.75rem;
  padding-left: 1.25rem;
  color: #a1a1aa;
  font-size: 0.95rem;
}
.project-metrics li { margin-bottom: 0.5rem; }
.project-metrics strong { color: #ededed; }

@media (max-width: 600px) {
  .portfolio-root { padding: 2.5rem 1.5rem; }
  h1 { font-size: 2rem; }
  .contact-links { flex-direction: column; gap: 0.75rem; }
  .project-header { flex-direction: column; }
}
`;

export default function Portfolio() {
  return (
    <>
      <style>{styles}</style>
      <div className="portfolio-root">
        
        {/* --- HERO SECTION --- */}
        <header>
          <h1>Lotanna Wisdom Iwuala</h1>
          <div className="subtitle">Senior Full-Stack Product Engineer & Systems Architect</div>
          
          <div className="contact-links">
            <a href="mailto:lotanna8900@gmail.com">lotanna8900@gmail.com</a>
            <a href="https://github.com/lotanna8900" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>Lagos, Nigeria (Remote)</span>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#ededed', maxWidth: '750px', lineHeight: '1.7' }}>
            I engineer complex, stateful systems and high-performance applications. My expertise consists of the JavaScript ecosystem (React/Next.js), Python backend architecture, and autonomous AI system layers. I combine careful architecture with a creative mindset in order to ship scalable, commercial-grade software. I always think of the product first.
          </p>
        </header>

        {/* --- TECHNICAL ARSENAL --- */}
        <section>
          <h2>Core Technologies</h2>
          <div className="stack-grid">
            <div className="stack-item">
              <span className="stack-label">Frontend Ecosystem</span>
              <span className="stack-tech">React, Next.js 14/15, TypeScript</span>
            </div>
            <div className="stack-item">
              <span className="stack-label">Backend & Data</span>
              <span className="stack-tech">Node.js, Python (Asyncio), PostgreSQL, Supabase</span>
            </div>
            <div className="stack-item">
              <span className="stack-label">Architecture & Web3</span>
              <span className="stack-tech">AI Agent Frameworks, Solidity, Viem, Wagmi</span>
            </div>
            <div className="stack-item">
              <span className="stack-label">Infrastructure</span>
              <span className="stack-tech">Docker, CI/CD, Graph Theory Logic</span>
            </div>
          </div>
        </section>

        {/* --- SELECTED WORK --- */}
        <section>
          <h2>Selected Engineering Work</h2>

          <div className="project-card">
            <div className="project-header">
              <h3>
                <a href="https://store.steampowered.com/app/4641420/Keepers_Vigil/" target="_blank" rel="noopener noreferrer">
                  Commercial Software Release: Keeper's Vigil ↗
                </a>
              </h3>
              <span className="project-role">Independent Developer · Shipped Jun 2026</span>
            </div>
            <p><strong>Stack:</strong> ChoiceScript, Platform APIs (Steam, iOS, Android)</p>
            <ul className="project-metrics">
              <li><strong>Scale & State Management:</strong> Engineered and deployed a highly-rated, 200,000-word interactive application. Designed the underlying branching logic architecture, managing complex state variables, multi-threaded conditional flags, and parallel player states.</li>
              <li><strong>Commercial Success:</strong> Successfully launched as a profitable product across three major global storefronts via Hosted Games.</li>
              <li><strong>Crisis Management:</strong> Directed high-visibility launch communications, managing active player feedback loops and mitigating community friction to ensure sustained positive platform ratings.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>
                <a href="https://github.com/lotanna8900/hive/tree/feat/cli-graph-diff" target="_blank" rel="noopener noreferrer">
                  Hive (YC S24 AI Framework) ↗
                </a>
              </h3>
              <span className="project-role">Core Contributor (AI Systems) · Feb 2026 - Present</span>
            </div>
            <p><strong>Stack:</strong> Python, Asyncio, Graph Theory</p>
            <ul className="project-metrics">
              <li><strong>CLI Tooling & Analysis:</strong> Architected <code>hive diff</code>, an offline developer experience (DX) tool utilizing deep-graph comparison to visually audit and track generational node mutations in self-evolving agents.</li>
              <li><strong>Transactional Safety:</strong> Engineered sandboxed execution environments and deep state serialization to prevent AI agents from rewriting code into broken states.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>
                <a href="https://lotalabs.com" target="_blank" rel="noopener noreferrer">
                  Story-to-Chain Engine (Lota Labs) ↗
                </a>
              </h3>
              <span className="project-role">Lead Architect · Nov 2024 - Present</span>
            </div>
            <p><strong>Stack:</strong> Next.js 14, Supabase, TypeScript, Web3 (Viem/Wagmi)</p>
            <ul className="project-metrics">
              <li><strong>Engine Architecture:</strong> Built a custom node-based runtime that compiles interactive fiction logic into React components. Reverse-engineered the InkJS runtime to support localized on-chain triggers.</li>
              <li><strong>Full-Stack Scale:</strong> Developed a resilient community hub featuring real-time nested comments, Web3 wallet authentication, and persistent global state syncing across user sessions.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>
                <a href="https://tm-vault-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                  TM Vault (DeFi dApp) ↗
                </a>
              </h3>
              <span className="project-role">Web3 Developer · Jan 2026</span>
            </div>
            <p><strong>Stack:</strong> Solidity, React, Viem</p>
            <ul className="project-metrics">
              <li><strong>Crisis Deployment:</strong> Pivoted architecture from React Native to Web in 48 hours to resolve critical dependencies, delivering a stable production build on a strict deadline.</li>
              <li><strong>Performance Optimization:</strong> Optimized React dashboards for high-frequency data fetching (real-time APY and TVL) using optimistic UI patterns.</li>
            </ul>
          </div>

        </section>

        {/* --- FOOTER --- */}
        <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #333', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Lotanna Wisdom Iwuala. Built with Next.js.</p>
        </footer>

      </div>
    </>
  );
}