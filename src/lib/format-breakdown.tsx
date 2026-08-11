import { formatBoldText } from "@/lib/format-bold-text";

const numberedLine = /^\d+\.\s+/;
const bulletLine = /^[-*]\s+/;

// Splits blank-line-separated blocks of text into paragraphs, rendering a
// block as a numbered list if every line starts with "1. " (etc.), or a
// bullet list if every line starts with "- " or "* ". "**bold**" is
// supported within any line via formatBoldText.
export function formatBreakdown(text: string) {
  const blocks = text.trim().split(/\n\s*\n/);

  return blocks.map((block, i) => {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const isNumberedList = lines.every((line) => numberedLine.test(line));
    const isBulletList = lines.every((line) => bulletLine.test(line));

    if (isNumberedList) {
      return (
        <ol
          key={i}
          className="flex list-decimal flex-col gap-2 pl-5 marker:text-offwhite"
        >
          {lines.map((line, j) => (
            <li key={j}>{formatBoldText(line.replace(numberedLine, ""))}</li>
          ))}
        </ol>
      );
    }

    if (isBulletList) {
      return (
        <ul
          key={i}
          className="flex list-disc flex-col gap-2 pl-5 marker:text-offwhite"
        >
          {lines.map((line, j) => (
            <li key={j}>{formatBoldText(line.replace(bulletLine, ""))}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="whitespace-pre-line leading-relaxed">
        {formatBoldText(block)}
      </p>
    );
  });
}
