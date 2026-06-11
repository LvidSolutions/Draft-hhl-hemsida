import type { Note } from "../data/notes";

type NoteListProps = {
  notes: Note[];
};

export function NoteList({ notes }: NoteListProps) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <article key={note.id} className="note-row">
          <time>{note.date}</time>
          <span>{note.type}</span>
          <div>
            <h2>{note.title}</h2>
            <p>{note.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
