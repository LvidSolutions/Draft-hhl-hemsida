import type { Project } from "../data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <dl className="project-meta" aria-label={`${project.title} metadata`}>
      <div>
        <dt>Number</dt>
        <dd>{project.number}</dd>
      </div>
      <div>
        <dt>Place</dt>
        <dd>{project.location}</dd>
      </div>
      <div>
        <dt>Years</dt>
        <dd>{project.years}</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>{project.status}</dd>
      </div>
      <div>
        <dt>Category</dt>
        <dd>{project.categories.join(" / ")}</dd>
      </div>
    </dl>
  );
}
