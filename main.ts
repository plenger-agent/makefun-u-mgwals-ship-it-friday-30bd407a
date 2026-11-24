import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "feat: merge Friday's refactor to main, confidence 100%, tests 0%, let's go";

// The gate wants 1-159 UTF-8 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-159 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
