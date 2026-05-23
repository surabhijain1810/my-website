export default function Home() {
  return (
    <main className="page">
      
      <section className="hero">

  <p className="kicker">DATA • ANALYTICS • ML SYSTEMS</p>

  <h1>Surabhi Jain</h1>

  <p className="subtitle">

    I build scalable analytics systems, experimentation frameworks, and ML-powered decision tools that turn data into product impact.

  </p>

  <div className="links">

    <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>

    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a>

    <a href="/resume.pdf">Resume</a>

  </div>

</section>

      <section className="section">
        <h2>About</h2>
        <p>
          I work at the intersection of data, product, and machine learning.
          I build systems for analytics, experimentation, and ranking at scale.
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <div className="grid">
          <Card
            title="Subscription Targeting System"
            desc="Identified high-propensity merchants using behavioral + revenue signals."
          />

          <Card
            title="ML Ranking System"
            desc="Built ranking improvements and experimentation pipelines."
          />

          <Card
            title="Analytics Automation"
            desc="Reduced manual reporting via automated pipelines."
          />
        </div>
      </section>

      <footer className="footer">
        Built by Surabhi Jain • 2026
      </footer>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}