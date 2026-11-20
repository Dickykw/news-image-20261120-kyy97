# news-image-20261120 — The World in One Day

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Dickykw/news-image-20261120-kyy97/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Dickykw/news-image-20261120-kyy97/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world's news of **Friday, 20 November 2026** — a
visual broadsheet of the day's 17 biggest stories, across regions and
fields, 7 of them illustrated, with the date named at the top, a
key-numbers strip, three large visual story blocks, a world map and a
numbered briefs list. Every story was date-checked against live reporting.
This v3 replaces the v2 infographic (9 stories, no pictures) with a richer
visual layout in the style of the day's best entries.

Three large visual stories:

1. Kyiv missile barrage — Russia's overnight missiles hit Kyiv, 3 killed, 15 hurt, three Dnipro bridges damaged
2. AI sell-off sinks Asian markets — Nikkei −4.8%, Kospi −4.7%, worst week since 2020
3. Cyclone Akvan makes landfall — comes ashore in Odisha, 370,000+ evacuated

Plus, among others: Saudi intercepts Houthi missile; COP31 enters its final
day with no deal; Iraqi troops enter Jurf al-Nasr; Japan core CPI 2.2%;
gold crashes 4% to ~$3,550/oz; Prabowo meets Xi; Harris meets Macron.

## How it works

`entry.png` (1024×1024) is the finished broadsheet, rendered at build time
by `work/v3/render_entry_v3_img.py` (PIL, in the build workspace — not part
of the repo) from illustrations drawn for this entry. `main.ts` is a
deterministic Node 22 program (standard library only, no network) that
copies it to the output directory, after confirming the file is a real PNG:

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
