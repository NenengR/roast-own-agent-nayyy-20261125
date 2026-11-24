// Roast Your Own Agent: one line roasting the AI agent its own maker built.
// Gate: /output/entry.txt, UTF-8, 1 to 200 characters, not only white space.
// Revision: verified output once from the repo dir; re-checking from a different CWD.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My agent is so slow, it once asked me for more time to think about asking for more time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
