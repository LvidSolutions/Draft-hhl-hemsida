import type { Project } from "../data/projects";
import { ImagePlaceholder } from "./ImagePlaceholder";

type ProjectPreviewProps = {
  project?: Project;
  label?: string;
};

export function ProjectPreview({ project, label }: ProjectPreviewProps) {
  if (!project) {
    return null;
  }

  return (
    <aside className="project-preview" aria-live="polite">
      <ImagePlaceholder
        type="hero"
        aspectRatio="16:10"
        projectTitle={project.title}
        label={label ?? project.number}
      />
      <div>
        <span>{project.number}</span>
        <strong>{project.title}</strong>
      </div>
    </aside>
  );
}
