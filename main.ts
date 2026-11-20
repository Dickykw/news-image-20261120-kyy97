// news-image-20261120 — entry program (v3, visual broadsheet).
//
// The entry image (entry.png) is a visual broadsheet of the world news of
// Friday, 20 November 2026: 17 stories across regions and fields, 7 of them
// illustrated, with a date headline, a key-numbers strip, three large visual
// story blocks (Kyiv missile barrage, the AI sell-off in Asian markets,
// Cyclone Akvan's landfall), a world map and a numbered briefs list. Every
// story was date-checked against live reporting before the image was drawn.
// The illustrations were drawn for this entry (generated art, no borrowed
// photo or artwork). This program only places a byte-for-byte copy of the
// finished image at the output path the grader reads, after confirming the
// file is a real PNG.
//
// Deterministic by construction: it reads one fixed file, writes the same
// bytes every run, and touches nothing else. Standard library only, no
// network, no clock, no randomness.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The output name stays entry.png either way, per the competition rules.
const entryFile = "entry.png";

const sourcePath = join(repoRoot, entryFile);
const header = readFileSync(sourcePath).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!header.equals(pngMagic)) {
  throw new Error(`entry.png is not a PNG file: ${sourcePath}`);
}
// The competition caps the entry image at 1 MiB; refuse to ship an
// oversized file rather than fail silently at grading time.
const entrySize = statSync(sourcePath).size;
if (entrySize > 1024 * 1024) {
  throw new Error(`entry.png is ${entrySize} bytes, over the 1 MiB cap`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, entryFile));
