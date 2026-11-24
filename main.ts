// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// (Node 22, standard library only): writes one out-of-office auto-reply line
// to /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line — "The Manager Who Asked Not To Be Named":
// A real out-of-office reply: a return date, and where urgent matters go.
// The twist lands in the last words — the reply itself does the one thing
// the manager asked it not to do. She asked me to stop putting her name in
// auto-replies; this auto-reply puts her name in, as the contact, while
// telling the reader exactly that. Self-undermining, in one breath, with a
// named person instead of a template. 129 characters, every word earning
// its place: cut "Priya" and it is a form letter; cut the last clause and
// it is a memo.
//
// Anchor (drand mainnet, quoted before the first write of this session):
//   round 6669476, randomness
//   4002c1f7aa46c58acd005674efb7054f728c84b4cff9701dee3c3bfb9ddbde01

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'Out of office until Monday. For anything urgent, contact my manager Priya, who asked me to stop putting her name in auto-replies.';

// The sealed gate allows 1–140 characters, not only white space. Enforce it
// here so a future edit can never silently ship an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
