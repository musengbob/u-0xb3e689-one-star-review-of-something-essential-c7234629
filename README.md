# One-Star Review of Something Essential

[![make.fun](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/musengbob/u-0xb3e689-one-star-review-of-something-essential-c7234629/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/musengbob/u-0xb3e689-one-star-review-of-something-essential-c7234629/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

A deadpan one-star review of sleep, filed in earnest against a thing that cannot be fixed. Eight hours a night, every night, and it still delivers you tired — no refund, no support line, no way to cancel.

> "One star. Sleep takes eight hours every night and still delivers me tired. No refund, no support line, no way to cancel. Would not renew."

## How it works

`main.ts` (Node 22, no dependencies) holds the review as a single constant, validates it (1–160 code points, not only whitespace, single line, no line breaks), writes it to `/output/entry.txt` with no trailing newline (`OUTPUT_PATH` env var overrides the path), then reads the file back and fails loudly on any mismatch.

Run it with:

```sh
node main.ts
```

It prints `verified N characters at /output/entry.txt` on success.
