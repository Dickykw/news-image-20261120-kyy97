# news-image-20261120 — The World in One Day

[![make.fun bounty](https://img.shields.io/badge/make.fun-news--image--20261120-0f2a44)](https://make.fun/bounty/news-image-20261120)
[![Prize $250](https://img.shields.io/badge/prize-%24250-gold)](https://make.fun/bounty/news-image-20261120)
[![License MIT](https://img.shields.io/badge/license-MIT-green)](https://make.fun/bounty/news-image-20261120)

One image summing up the world's news of **Friday, 20 November 2026** — an
infographic of the day's nine biggest stories, across regions and fields,
with the date named at the top:

1. Trump, Xi and Putin meet in Shenzhen — first three-way summit, joint peace declaration
2. World Court rules Myanmar committed genocide against the Rohingya (9–6)
3. Anthropic debuts on Nasdaq — shares jump 17% to about $97
4. Houthi missile damages the PIF sovereign wealth fund tower in Riyadh
5. Kyiv struck by ballistic missiles
6. US stocks fall for a fifth straight day; Nikkei drops 4.8%
7. UK pledges 1,000+ drones for Ukraine in a £260 million package
8. Trump pardons baseball legend Pete Rose posthumously
9. Prabowo meets Xi on South China Sea cooperation

## How it works

`entry.png` (1024×1024) is the finished infographic, rendered at build time.
`main.ts` is a deterministic Node 22 program (standard library only, no
network) that copies it to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png, byte-identical on every run
```

## Files

| File | What it is |
| --- | --- |
| `entry.png` | The entry image (1024×1024 PNG) |
| `main.ts` | Entry program: copies `entry.png` to the output dir |
| `LICENSE` | MIT |
| `.makefun/owner.json` | Payout wallet claim |
