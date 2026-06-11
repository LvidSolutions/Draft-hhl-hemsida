type SectionHeadingProps = {
  title: string;
  intro?: string;
};

export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <h1>{title}</h1>
      {intro ? <p>{intro}</p> : null}
    </header>
  );
}
