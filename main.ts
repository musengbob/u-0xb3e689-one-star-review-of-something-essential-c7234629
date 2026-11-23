import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "One star. Sleep takes eight hours every night and still delivers me tired. No refund, no support line, no way to cancel. Would not renew.";

const MAX_CHARS = 160;

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const count = codePointCount(text);
  if (count < 1 || count > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line with no line breaks");
  }
}

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

validate(LINE);
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");

const readBack = readFileSync(outputPath, "utf8");
if (readBack !== LINE) {
  throw new Error(`read-back mismatch at ${outputPath}`);
}

console.log(`verified ${codePointCount(LINE)} characters at ${outputPath}`);
