export default function AnalyticonPage() {
  return (
    <main className="analyticon-page">
      <div className="dashboard-wrapper">
        <iframe
          src="https://analyticon-2026-viz.vercel.app/"
          title="Analyticon 2026 Interactive Dashboard"
          className="dashboard-iframe"
        />
      </div>
    </main>
  );
}