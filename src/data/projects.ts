export type ProjectStatus = "Built" | "Competition" | "Ongoing" | "Study" | "Unbuilt";

export type Project = {
  id: string;
  number: string;
  title: string;
  location: string;
  country: string;
  years: string;
  status: ProjectStatus;
  categories: string[];
  programme: string[];
  themes: string[];
  facts: {
    client?: string;
    collaborators?: string;
    photographer?: string;
    area?: string;
    awards?: string[];
  };
};

export const projects: Project[] = [
  {
    id: "goteborgs-konstmuseum",
    number: "01",
    title: "Göteborgs Konstmuseum",
    location: "Göteborg",
    country: "Sweden",
    years: "2024",
    status: "Competition",
    categories: ["Culture", "Transformation"],
    programme: ["Museum", "Public building"],
    themes: ["Civic value", "Continuity", "Material depth"],
    facts: {
      client: "Göteborgs Stad",
      collaborators: "Barozzi Veiga, Peter Korn",
      awards: ["First prize"],
    },
  },
  {
    id: "kompisen",
    number: "02",
    title: "Kompisen",
    location: "Stockholm",
    country: "Sweden",
    years: "2021-2024",
    status: "Built",
    categories: ["Education", "Civic"],
    programme: ["Preschool"],
    themes: ["Brick", "Everyday publicness"],
    facts: {
      client: "Stockholm Stad",
      area: "2,100 m²",
    },
  },
];
