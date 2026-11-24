// Entry program for the make.fun "Promote make-your-own-bounty" X post contest.
// The house reads the X post itself; this program's only job is to hand the
// grader a copy of POST.json, which names the post, in the output directory.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly rather than hand the grader a broken pointer: POST.json must
// parse and carry the post's address under "url".
const source = join(botDir, "POST.json");
const parsed = JSON.parse(readFileSync(source, "utf8")) as { url?: unknown };
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("POST.json does not name a post: no string in its url field");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
console.log(`copied POST.json naming ${parsed.url} to ${outputDir}`);
