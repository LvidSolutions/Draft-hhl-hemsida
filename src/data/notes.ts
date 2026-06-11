export type Note = {
  id: string;
  date: string;
  type: "Competition" | "Construction" | "Publication" | "Lecture" | "Exhibition" | "Studio";
  title: string;
  excerpt: string;
};

export const notes: Note[] = [
  {
    id: "goteborgs-konstmuseum-competition",
    date: "28.03.2024",
    type: "Competition",
    title: "Göteborgs Konstmuseum",
    excerpt:
      "First prize in the competition for the renovation and extension of Göteborgs Konstmuseum, in collaboration with Barozzi Veiga and Peter Korn.",
  },
  {
    id: "lecture-tectonics",
    date: "14.11.2023",
    type: "Lecture",
    title: "Order, tectonics and public work",
    excerpt: "A lecture on recent projects and the relation between construction systems and civic value.",
  },
  {
    id: "publication-no4",
    date: "03.06.2023",
    type: "Publication",
    title: "NO4 published",
    excerpt: "The transformation project in Nacka is presented through plans, sections and built photographs.",
  },
  {
    id: "construction-kompisen",
    date: "19.01.2023",
    type: "Construction",
    title: "Kompisen under construction",
    excerpt: "Facade work and interior rooms continue on the preschool project in Stockholm.",
  },
  {
    id: "new-project-arsta",
    date: "07.09.2022",
    type: "Studio",
    title: "New housing study in Årsta",
    excerpt: "The studio begins work on an urban housing project in dialogue with post-war planning structures.",
  },
  {
    id: "exhibition-archive",
    date: "22.04.2022",
    type: "Exhibition",
    title: "Drawings from the archive",
    excerpt: "Selected drawings and models are shown as part of a small exhibition on housing and transformation.",
  },
  {
    id: "publication-skuru",
    date: "16.02.2021",
    type: "Publication",
    title: "Skuru in print",
    excerpt: "The private house is documented with a focus on proportion, plaster and tectonic order.",
  },
];
