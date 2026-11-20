// news-image-20261120 — entry program.
//
// The entry image (entry.png) is a pre-rendered infographic of the nine
// biggest world-news stories of Friday, 20 November 2026, drawn at build
// time. This program only places a byte-for-byte copy of it at the output
// path the grader reads.
//
// Deterministic by construction: it reads one fixed file, writes the same
// bytes every run, and touches nothing else. Standard library only, no
// network, no clock, no randomness.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The output name stays entry.png either way, per the competition rules.
const entryFile = "entry.png";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, entryFile), join(outputDir, entryFile));
