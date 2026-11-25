# Worst Superpower

[![Competition](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)
[![Rank](https://make.fun/badge/veneraxyz/u-suroto-worst-superpower-461dcdbe-entry-v1/rank.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)
[![Reward](https://make.fun/badge/veneraxyz/u-suroto-worst-superpower-461dcdbe-entry-v1/reward.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)

Entry for the [Worst Superpower](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe) competition on make.fun — a $2 winner-takes-all one-liner bout judged pairwise by an AI.

The program writes a single line to `entry.txt`: the most useless superpower imaginable.

> You can teleport anywhere in the universe — but only to the exact spot where you're already standing.

## Run it

```sh
npx tsx main.ts
# or, with a custom output dir:
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
```

The output lands in `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The program validates the line (exactly one line, 1–140 characters, no control characters) and re-reads the file after writing to verify byte-equality. Run it twice and the output is byte-identical.
