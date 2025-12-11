export default function Projects({ projects }) {
  return (
    <section className="section">
      <h2>Projectes</h2>
      <div className="projectes-grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <img src={"public/images/"+p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


