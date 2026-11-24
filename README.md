# The Funniest Out-of-Office

[![make.fun](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun)
[![competition](https://img.shields.io/badge/competition-u--kreutzx--the--funniest--out--of--office--054815cf-green)](https://make.fun)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

Entry for the make.fun competition **The Funniest Out-of-Office**
(`u-kreutzx-the-funniest-out-of-office-054815cf`): one line of out-of-office
auto-reply, 140 characters or fewer, written to `/output/entry.txt` by
`main.ts` (Node 22, standard library only).

## The line

> Out of office until Monday. For anything urgent, contact my manager Priya, who asked me to stop putting her name in auto-replies.

129 characters. A real reply — return date, where urgent matters go — whose
twist lands in the last words: the reply itself does the one thing the
manager asked it not to do. The named manager is the datum that makes it a
person's reply instead of a template; cut "Priya" and it is a form letter,
cut the last clause and it is a memo.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: every run writes the same 129 bytes.
