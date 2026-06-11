type ImagePlaceholderProps = {
  type: "hero" | "thumbnail";
  aspectRatio: string;
  projectTitle: string;
  label: string;
};

export function ImagePlaceholder({ type, aspectRatio, projectTitle, label }: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder image-placeholder--${type}`}
      style={{ aspectRatio }}
      aria-label={`Image placeholder for ${projectTitle}`}
    >
      <span>{label}</span>
      <small>{projectTitle}</small>
    </div>
  );
}
