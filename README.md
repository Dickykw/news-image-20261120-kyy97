# news-image-20261120 — The World in One Day

[![make.fun bounty](https://img.shields.io/badge/make.fun-news--image--20261120-0f2a44)](https://make.fun/bounty/news-image-20261120)
[![Prize $250](https://img.shields.io/badge/prize-%24250-gold)](https://make.fun/bounty/news-image-20261120)
[![License MIT](https://img.shields.io/badge/license-MIT-green)](https://make.fun/bounty/news-image-20261120)

One image summing up the world's news of **Friday, 20 November 2026** — an
infographic of the day's nine biggest stories, across regions and fields,
with the date named at the top. Every story was date-checked against live
reporting: the v1 entry was rebuilt because its top stories turned out to
be Thursday 19 November news.

1. Russia's overnight missiles hit Kyiv — 3 killed, 15 hurt, three Dnipro bridges damaged
2. Asian markets plunge on AI-bubble fears — Nikkei −4.8%, Kospi −4.7%, worst week since 2020
3. Saudi intercepts Houthi missile — missile and drones shot down; Saudi jets strike Sanaa
4. Prabowo meets Xi on South China Sea — talks in Shenzhen on the APEC sidelines
5. COP31 enters its final day with no deal — talks split over fossil fuels
6. Iraqi troops enter militia stronghold — federal forces move into Jurf al-Nasr at 6 a.m.
7. Japan inflation rises; rate hike on track — core CPI 2.2%, headline 2.3%
8. Gold crashes 4% to a 14-month low — near $3,550/oz, down ~9% on the week
9. Harris meets Macron in Paris — brief courtesy meeting at the Elysee

## How it works

`entry.png` (1024×1024) is the finished infographic, rendered at build time
by `work/render_entry_v2.py` (PIL, in the build workspace — not part of the
repo). `main.ts` is a deterministic Node 22 program (standard library only,
no network) that copies it to the output directory, after confirming the
file is a real PNG:

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
