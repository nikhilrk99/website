// Renders "**bold**" segments in a string as <strong>, everything else as plain text.
export function formatBoldText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-offwhite">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}
