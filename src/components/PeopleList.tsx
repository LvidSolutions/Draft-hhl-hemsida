const foundingPartners = ["Andreas Hermansson", "Andreas Hiller", "Samuel Lundberg"];
const studio = ["Architect A", "Architect B", "Architect C", "Architect D", "Studio Coordinator"];

export function PeopleList() {
  return (
    <div className="people-list">
      <section>
        <h3>Founding partners</h3>
        <ul>
          {foundingPartners.map((person) => (
            <li key={person}>{person}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Studio</h3>
        <ul>
          {studio.map((person) => (
            <li key={person}>{person}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
