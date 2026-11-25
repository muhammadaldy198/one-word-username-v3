// One word, 8 chars: a mischievous little imp living in the ramen bowl.
// Single token, lowercase, no digits, no hyphens: inside the 1-30 char gate.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const WORD = "ramenimp";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
