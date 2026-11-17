* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f3f0;
  --panel: #ffffff;
  --panel-soft: #f4efe9;
  --panel-muted: #f3f4f6;
  --line: rgba(15, 23, 42, 0.09);
  --primary: #111827;
  --primary-strong: #0b1220;
  --accent: #f7b84d;
  --accent-strong: #e99521;
  --success: #10b981;
  --text: #101828;
  --text-soft: #5d6472;
  --shadow: 0 22px 50px rgba(15, 23, 42, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(245, 243, 240, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.05);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #f7d57d, #d98a19);
  color: #111827;
  box-shadow: 0 14px 28px rgba(217, 138, 25, 0.35);
}

.brand-name {
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: -0.06em;
}

.brand-name span {
  color: #d98a19;
}

.brand-tag {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--text-soft);
  font-size: 0.94rem;
  font-weight: 600;
}

.nav-links a:hover {
  color: var(--primary);
}

.primary,
.secondary,
.ghost {
  border: none;
  border-radius: 14px;
  min-height: 48px;
  padding: 0 20px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #17130c;
  box-shadow: 0 18px 26px rgba(233, 149, 33, 0.22);
}

.secondary {
  background: rgba(255, 255, 255, 0.75);
  color: var(--primary);
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.ghost {
  background: transparent;
  border: 1px solid rgba(17, 24, 39, 0.1);
  color: var(--primary);
}

.primary:hover,
.secondary:hover,
.ghost:hover,
.primary.small:hover,
.secondary.small:hover {
  transform: translateY(-1px);
}

.primary.small,
.secondary.small {
  min-height: 40px;
  padding: 0 14px;
  font-size: 0.82rem;
}

.hero {
  padding: 52px 0 24px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 42px;
  align-items: center;
}

.hero-copy {
  padding: 18px 0;
}

.eyebrow,
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(247, 184, 77, 0.12);
  color: #7e510a;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  font-weight: 700;
  text-transform: uppercase;
}

.section-tag.alt {
  background: rgba(17, 24, 39, 0.08);
  color: #2d3748;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f7d57d, #d98a19);
  box-shadow: 0 0 18px rgba(217, 138, 25, 0.7);
}

.hero-copy h1 {
  margin: 20px 0 18px;
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.08em;
  font-weight: 800;
}

.hero-copy p {
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-soft);
}

.hero-actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.mini-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 34px;
}

.mini-stats div {
  min-width: 128px;
}

.mini-stats strong {
  display: block;
  font-size: 1.45rem;
  letter-spacing: -0.05em;
  margin-bottom: 6px;
}

.mini-stats span {
  color: var(--text-soft);
  font-size: 0.82rem;
}

.preview-panel {
  display: flex;
  justify-content: center;
}

.preview-window {
  width: min(100%, 520px);
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.96), rgba(17, 24, 39, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 18px;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: white;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 58px;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.pill.live {
  background: rgba(16, 185, 129, 0.18);
  color: #9af5d2;
}

.preview-header .time {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.74);
}

.preview-art {
  position: relative;
  min-height: 436px;
  background: linear-gradient(135deg, rgba(247, 184, 77, 0.26), rgba(17, 24, 39, 0.42));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  overflow: hidden;
}

.preview-art::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.26), transparent 36%),
    linear-gradient(120deg, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.65));
}

.scene-scroller {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 14px;
  padding: 24px 18px 20px;
}

.scene-card {
  position: relative;
  z-index: 1;
  padding: 18px 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
  color: white;
}

.scene-card.glowing {
  background: linear-gradient(135deg, rgba(247, 184, 77, 0.22), rgba(17, 24, 39, 0.36));
}

.scene-card.alt {
  background: rgba(17, 24, 39, 0.28);
}

.scene-label {
  display: inline-flex;
  margin-bottom: 8px;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.scene-card h3 {
  margin: 0;
  font-size: 1.35rem;
  line-height: 1.3;
}

.studio {
  padding: 34px 0 10px;
}

.studio-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
}

.panel {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.left-panel,
.output-panel {
  padding: 22px 20px 20px;
}

.panel-header {
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 10px 0 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.15;
  letter-spacing: -0.05em;
}

.field-label {
  display: block;
  margin-bottom: 10px;
  color: var(--text-soft);
  font-weight: 600;
  font-size: 0.82rem;
}

textarea,
select {
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 16px;
  background: var(--panel);
  color: var(--text);
  padding: 15px 16px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

textarea {
  resize: vertical;
  min-height: 160px;
}

select {
  min-height: 52px;
}

textarea:focus,
select:focus {
  border-color: rgba(233, 149, 33, 0.65);
  box-shadow: 0 0 0 4px rgba(247, 184, 77, 0.12);
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.prompt-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  gap: 14px;
  color: var(--text-soft);
  border: 1px dashed rgba(15, 23, 42, 0.12);
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(247, 184, 77, 0.04), rgba(15, 23, 42, 0.02));
}

.spinner {
  width: 42px;
  height: 42px;
  border: 4px solid rgba(17, 24, 39, 0.08);
  border-top-color: var(--accent-strong);
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.result-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.result-visual {
  position: relative;
  min-height: 220px;
  background: linear-gradient(135deg, #f7d57d, #7c3aed 52%, #0f172a);
}

.result-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.42), transparent 22%),
    linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.5));
}

.result-copy {
  padding: 18px 18px 20px;
}

.result-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(247, 184, 77, 0.14);
  color: #8f5b13;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.badge.muted {
  background: rgba(17, 24, 39, 0.06);
  color: #495468;
}

.result-copy h3 {
  margin: 14px 0 8px;
  font-size: 1.55rem;
  letter-spacing: -0.04em;
}

.result-copy p {
  margin: 0;
  line-height: 1.7;
  color: var(--text-soft);
}

.hidden {
  display: none !important;
}

.features,
.gallery {
  padding: 52px 0 20px;
}

.section-heading {
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 10px 0 0;
  font-size: clamp(1.9rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 18px 28px rgba(15, 23, 42, 0.03);
}

.icon-box {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(247, 184, 77, 0.2), rgba(15, 23, 42, 0.04));
  color: #8a5b12;
  font-size: 1.2rem;
}

.feature-card h3 {
  margin: 18px 0 10px;
  font-size: 1.15rem;
}

.feature-card p {
  margin: 0;
  line-height: 1.7;
  color: var(--text-soft);
}

.row-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 18px;
}

.gallery-item {
  position: relative;
  display: flex;
  align-items: end;
  min-height: 280px;
  border-radius: 22px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.gallery-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0), rgba(15, 23, 42, 0.7));
}

.item-1 {
  background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=900');
}

.item-2 {
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=900');
}

.item-3 {
  background-image: url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=900');
}

.overlay {
  position: relative;
  z-index: 1;
  padding: 20px;
  color: #fff;
}

.overlay span {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.9;
}

.overlay h3 {
  margin: 8px 0 0;
  font-size: 1.35rem;
}

@media (max-width: 980px) {
  .hero-grid,
  .studio-grid,
  .feature-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 30px;
  }

  .hero-copy h1 {
    letter-spacing: -0.06em;
  }

  .field-grid,
  .prompt-actions {
    grid-template-columns: 1fr;
    display: grid;
  }

  .prompt-actions button,
  .hero-actions button {
    width: 100%;
  }

  .mini-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .topbar .primary.small {
    display: none;
  }
}
