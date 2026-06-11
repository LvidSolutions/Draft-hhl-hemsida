import type { Project } from "../data/projects";

type FactsTableProps = {
  project: Project;
};

export function FactsTable({ project }: FactsTableProps) {
  const facts = [
    ["Location", project.location],
    ["Country", project.country],
    ["Years", project.years],
    ["Status", project.status],
    ["Programme", project.programme.join(" / ")],
    ["Client", project.facts.client],
    ["Collaborators", project.facts.collaborators],
    ["Photographer", project.facts.photographer],
    ["Area", project.facts.area],
    ["Awards", project.facts.awards?.join(" / ")],
    ["Themes", project.themes.join(" / ")],
  ].filter(([, value]) => value);

  return (
    <dl className="facts-table">
      {facts.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
