export default function Home() {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Introduction">
        <p className="kicker fade-up fade-up-1">Data · Analytics · ML Systems</p>
        <h1 className="fade-up fade-up-2">Surabhi Jain</h1>
        <p className="subtitle fade-up fade-up-3">
          Senior BI Engineer at Amazon building scalable analytics systems,
          LLM evaluation frameworks, and AI-powered decision tools. 10 years
          turning data into product impact.
        </p>
      </section>
      {/* ── Impact ───────────────────────────────────────── */}
      <section className="section" id="impact" aria-label="Impact highlights">
        <h2>Impact at a glance</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-num" style={{ color: "#8B5CF6" }}>80→90%</div>
            <div className="impact-label">LLM agent response accuracy</div>
          </div>
          <div className="impact-card">
            <div className="impact-num" style={{ color: "#F59E0B" }}>6h→min</div>
            <div className="impact-label">Automation & scale</div>
          </div>
          <div className="impact-card">
            <div className="impact-num" style={{ color: "#34D399" }}>30%</div>
            <div className="impact-label">Advertising Investment increase</div>
          </div>
          <div className="impact-card">
            <div className="impact-num" style={{ color: "#60A5FA" }}>29→9%</div>
            <div className="impact-label">Subscription order rejection rate</div>
          </div>

          
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section className="section" id="projects" aria-label="Featured projects">
        <h2>Featured Projects</h2>
        <div className="grid">

          <div className="card">
            <h3>AI Agent and LLM Evaluation Framework</h3>
            <p>Built a RAG-powered AI agent for natural language insights across multiple data sources, reducing analysis turnaround from hours to minutes. Developed an LLM evaluation framework that improved response accuracy from 80% to 90% and supported Responsible AI standards.</p>
            <div className="project-tag-row">
              <span className="project-tag">RAG</span>
              <span className="project-tag">LLM</span>
              <span className="project-tag">Prompt Engineering</span>
              <span className="project-tag">LLM Evaluation</span>
              <span className="project-tag">Responsible AI</span>
            </div>
          </div>

          <div className="card">
            <h3>Marketing Attribution Model</h3>
            <p>Invented the attribution framework for Amazon's Co-op campaigns — defining Attributed Sales, Lift%, and ROAS from the ground up. Automated reporting cut turnaround from 6 hours to minutes, directly improving how Amazon measures and grows brand partnerships</p>
            <div className="project-tag-row">
              <span className="project-tag">ETL</span>
              <span className="project-tag">Amazon Redshift</span>
              <span className="project-tag">Data Analysis</span>
              <span className="project-tag">Data Modeling</span>
            </div>
          </div>

          <div className="card">
            <h3>In-Store Ads Datamart</h3>
            <p>Built a full analytics datamart for Amazon's In-Store Ads from the ground up — dimensional models, fact tables, and Airflow-integrated ETL pipelines. Optimized SQL queries delivered 55% faster runtime and 80% faster ad-hoc processing, directly enabling the Digital Signage Ads reporting launch</p>
            <div className="project-tag-row">
              <span className="project-tag">ETL</span>
              <span className="project-tag">Airflow</span>
              <span className="project-tag">Spark</span>
              <span className="project-tag">AWS</span>
              <span className="project-tag">Data Modeling</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section className="section" id="skills" aria-label="Technical skills">
        <h2>Skills &amp; Stack</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-title">Cloud &amp; Infra</div>
            <div className="skill-tags">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Google BigQuery</span>
              <span className="skill-tag">Amazon Marketing Cloud</span>
              <span className="skill-tag">Apache Spark</span>
              <span className="skill-tag">Hadoop</span>
              <span className="skill-tag">Airflow</span>
              <span className="skill-tag">Teradata</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">ML &amp; AI</div>
            <div className="skill-tags">
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">LLM Evaluation</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Linear Regression</span>
              <span className="skill-tag">Logistic Regression</span>
              <span className="skill-tag">K-means clustering</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Visualization</div>
            <div className="skill-tags">
              <span className="skill-tag">Tableau</span>
              <span className="skill-tag">Amazon QuickSight</span>
              <span className="skill-tag">Jupyter Notebook</span>
              <span className="skill-tag">ETL/ELT Pipelines</span>
              <span className="skill-tag">Data Modeling</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Languages</div>
            <div className="skill-tags">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SAS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section className="section" id="experience" aria-label="Work experience">
        <h2>Experience</h2>

        <div className="spine-timeline">
          <div className="spine-items">

            {/* 1 — LEFT */}
            <div className="spine-item">
              <div className="spine-card">
                <div className="spine-company" style={{ color: "#8B5CF6" }}>Amazon · Toronto</div>
                <div className="spine-role">
                  Senior BI Engineer
                  <span className="exp-badge">current</span>
                </div>
                <div className="spine-period">Apr 2024 – Present</div>
                <ul className="exp-bullets">
                  <li>Built data and AI systems spanning analytics, LLMs, and large-scale data engineering, including RAG-based recommendation tools, LLM evaluation frameworks, and optimized data marts using Airflow, SQL, and Spark. Strong in building scalable pipelines and translating complex datasets into actionable business and product insights</li>
                </ul>
              </div>
              <div className="spine-dot">
                <div className="spine-dot-inner" style={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 4px rgba(139,92,246,0.12)" }} />
              </div>
              <div className="spine-empty" />
            </div>

            {/* 2 — RIGHT */}
            <div className="spine-item">
              <div className="spine-empty" />
              <div className="spine-dot">
                <div className="spine-dot-inner" style={{ borderColor: "#60A5FA", boxShadow: "0 0 0 4px rgba(96,165,250,0.12)" }} />
              </div>
              <div className="spine-card">
                <div className="spine-company" style={{ color: "#3B82F6" }}>Amazon · Toronto</div>
                <div className="spine-role">BI Engineer II</div>
                <div className="spine-period">Dec 2022 – Mar 2024</div>
                <ul className="exp-bullets">
                  <li>Worked on building scalable data systems and analytics solutions enabling self-serve insights and data-driven decision-making across business and revenue teams. Led initiatives spanning advertiser-to-brand mapping, promotion impact modeling, and data reliability improvements through robust ETL pipelines, CI/CD workflows, and monitoring frameworks</li>
                </ul>
              </div>
            </div>

            {/* 3 — LEFT */}
            <div className="spine-item">
              <div className="spine-card">
                <div className="spine-company" style={{ color: "#3B82F6" }}>Amazon · Bangalore</div>
                <div className="spine-role">BI Engineer II</div>
                <div className="spine-period">Jun 2021 – Dec 2022</div>
                <ul className="exp-bullets">
                  <li>Worked on marketing analytics and subscription growth initiatives, building attribution models for Co-op campaigns to measure sales lift and ROAS while reducing reporting time from hours to minutes. Also developed an Auto Payments dashboard for Subscribe & Save that surfaced CTR drop insights, led to A/B testing improvements, and contributed to recognition from VP leadership</li>
                </ul>
              </div>
              <div className="spine-dot">
                <div className="spine-dot-inner" style={{ borderColor: "#60A5FA", boxShadow: "0 0 0 4px rgba(96,165,250,0.12)" }} />
              </div>
              <div className="spine-empty" />
            </div>

            {/* 4 — RIGHT */}
            <div className="spine-item">
              <div className="spine-empty" />
              <div className="spine-dot">
                <div className="spine-dot-inner" style={{ borderColor: "#34D399", boxShadow: "0 0 0 4px rgba(52,211,153,0.12)" }} />
              </div>
              <div className="spine-card">
                <div className="spine-company" style={{ color: "#10B981" }}>Amazon · Bangalore</div>
                <div className="spine-role">Senior Business Analyst</div>
                <div className="spine-period">Jan 2019 – May 2021</div>
                <ul className="exp-bullets">
                  <li>Built customer analytics and experimentation systems for Subscribe & Save and Coupons, including a K-means segmentation model that significantly reduced order rejection rates and improved targeting performance. Also drove push notification optimization through A/B testing and cohort analysis, increasing coupon engagement, and automated vendor performance dashboards to streamline reporting and reduce manual effor</li>
                </ul>
              </div>
            </div>

            {/* 5 — LEFT */}
            <div className="spine-item">
              <div className="spine-card">
                <div className="spine-company" style={{ color: "#94A3B8" }}>Mu Sigma · Bangalore</div>
                <div className="spine-role">Decision Scientist</div>
                <div className="spine-period">Nov 2015 – Dec 2018</div>
                <ul className="exp-bullets">
                  <li>I built scalable data and analytics solutions that modernized legacy systems and enabled faster, data-driven decision-making. My work included migrating large enterprise pipelines to cloud platforms for significant performance gains, developing customer segmentation models for targeted strategies, and designing efficient data models and dashboards that reduced reporting time and improved operational visibility across retail and insurance teams</li>
                </ul>
              </div>
              <div className="spine-dot">
                <div className="spine-dot-inner" style={{ borderColor: "#94A3B8", boxShadow: "0 0 0 4px rgba(148,163,184,0.15)" }} />
              </div>
              <div className="spine-empty" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="section" id="contact" aria-label="Contact">
        <h2>Get in touch</h2>
        <p className="contact-blurb">
          Open to interesting conversations about data, ML systems, or new opportunities.
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/surabhi-jain-88812367/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:surabhi.jain1810@gmail.com">Email</a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer>
        <span>© 2026 Surabhi Jain · Toronto, Canada</span>
        <span>Built with Next.js</span>
      </footer>

    </div>
  );
}
