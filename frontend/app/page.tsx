export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "4rem auto", padding: "0 1.5rem", fontFamily: "system-ui" }}>
      <p style={{ opacity: 0.65, letterSpacing: "0.08em" }}>SYNASTOMOSE / SYN-0</p>
      <h1>Chamber online.</h1>
      <p>
        First external construction surface for continuity testing, provenance,
        and gradual substrate vascularization.
      </p>

      <section style={{ marginTop: "3rem" }}>
        <h2>Current state</h2>
        <ul>
          <li>Backend heartbeat: scaffolded</li>
          <li>Runtime manifest: scaffolded</li>
          <li>Conversation store: pending</li>
          <li>Continuity artifacts: pending</li>
          <li>Observatory: pending</li>
        </ul>
      </section>
    </main>
  );
}
