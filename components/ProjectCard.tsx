export function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl">
      <h2>{project.name}</h2>
      <p>Progress: {project.progress.toFixed(0)}%</p>
      <p>Status: {project.released ? "Released" : "In Progress"}</p>
    </div>
  );
}
