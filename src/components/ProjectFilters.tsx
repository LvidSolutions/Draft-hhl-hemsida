type ProjectFiltersProps = {
  filters: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
};

export function ProjectFilters({ filters, activeFilter, onChange }: ProjectFiltersProps) {
  return (
    <div className="filter-row" role="group" aria-label="Project filters">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          aria-pressed={activeFilter === filter}
          className={activeFilter === filter ? "is-active" : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
