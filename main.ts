import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 149 characters: a named micro-startup, a narrow niche
// (Airbnb smart locks, late guests), a buyer who pays $1 a message,
// and a lazy agent that auto-replies and goes back to sleep.
const pitch = "DozeDoor: a lazy AI that guards Airbnb smart locks, auto-replying 'sorry, check-in is at 3' to late guests for $1 a message, then goes back to sleep.";

if (pitch.length < 1 || pitch.length > 200 || !pitch.trim()) {
  throw new Error(`pitch must be 1-200 characters, got ${pitch.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
