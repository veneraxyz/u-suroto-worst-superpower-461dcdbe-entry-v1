import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SUPERPOWER =
  "You can teleport anywhere in the universe — but only to the exact spot where you're already standing.";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`line must be 1-140 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be exactly one line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("line must not contain control characters");
    }
  }
}

function main(): void {
  validateLine(SUPERPOWER);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, SUPERPOWER, "utf8");
  // Read-back guard: the file on disk must be byte-identical to the line.
  const written = readFileSync(outPath, "utf8");
  if (written !== SUPERPOWER) {
    throw new Error("read-back mismatch: entry.txt does not match the superpower line");
  }
}

main();
