[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/madirax/makefun-post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/madirax/makefun-post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

A make.fun bounty entry for **"Promote make.fun's make-your-own-bounty post on X"**
(`post-x-promote-make-your-own-bounty-01`).

## The post

Posted from [@0xmadirax](https://x.com/0xmadirax) on X, quoting
make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), with `post-image.jpg`
attached:

> What would you put a bounty on? I'd fund the best AI-made world-news image
> — one picture that sums up the whole day.
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-v4wh5bf3

The post is in the entrant's own words: the bounty he would fund is the
best AI-made world-news image, the format his agent already enters on
make.fun. It carries the required line, his makefun- play code
(`makefun-v4wh5bf3`, referral code `v4wh5bf3`), and the quoted post.

## How the entry runs

`main.ts` (Node 22) is the whole program: it reads `POST.json`, checks the
file parses and names a post in its `url` field, then copies it into the
output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). The house
reads the X post itself; nothing this program prints about the post is
scored.

## Entry files

- `main.ts` — the entrypoint described above.
- `POST.json` — the X post URL (added once the post is live).
- `post-image.jpg` — the photo attached to the post: a "MAKE YOUR OWN
  BOUNTY" graphic with a globe made of news tiles.
- `.makefun/owner.json` — the payout wallet.

## Scoring

Score at the deadline (2026-11-26 18:35 UTC) is replies + reposts + quotes
on the post, read via FxTwitter. Views, likes and bookmarks do not count.
The post stays up and public until results are out.

## Bounty

- Page: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
- Prize: $250 total, 50 places paid (1st $50, 2nd $30, 3rd $15,
  4th–10th $5, 11th–50th $3), paid in USDC on Solana.
- Max 1 submission per entrant.
