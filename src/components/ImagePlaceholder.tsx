export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-muted/50 bg-card text-center font-mono text-xs uppercase tracking-wide text-muted ${className}`}
    >
      {label}
    </div>
  );
}
