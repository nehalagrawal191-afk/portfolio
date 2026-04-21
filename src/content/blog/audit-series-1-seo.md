---
title: "SEO Audit: What to Hand to Claude Code vs What to Do Yourself"
description: "Claude Code speeds up an SEO audit as a first-pass triage layer. It doesn't replace the steps that require live HTTP requests, real measurement, or a browser."
date: 2026-04-21
series: "Auditing for Visibility"
seriesPart: 1
draft: false
---

Running Screaming Frog on a site and pasting the URL export into Claude Code is a reasonable starting point. Claude reads the list, identifies patterns in title tag lengths, flags missing meta descriptions, spots heading structure inconsistencies across pages, and gives you a prioritized list of where the biggest gaps are. That part it handles well.

The problem shows up when you ask it to go further. Claude Code works with what you give it. When the input is incomplete — a partial export, a sitemap that's three months out of date, a few page screenshots — it fills gaps with inference. Sometimes that inference is close enough. Sometimes it confidently flags a canonical issue that doesn't exist, or misses a 301 chain because it was never in the file you uploaded. The hallucinations tend to be confident and plausible-sounding, which makes them harder to catch if you're using Claude as your only pass.

## What Claude Code handles well

Give it a complete URL export and it's useful as a triage layer. Paste the CSV and ask it to surface pages missing title tags, identify duplicate H1s across the site, find URLs with no inbound internal links, or flag posts that don't follow a consistent slug structure. It processes volume faster than doing it row by row, and the output is organized by impact rather than just listed.

Content-level analysis works too. Paste a page and ask whether the meta description reflects what the page actually covers, or whether the heading hierarchy makes sense for the target keyword. For anything where the input is text and the judgment is structural, the output is generally reliable.

## What you do yourself

**Extract URLs with Screaming Frog first.** Every URL, crawled fresh, not a sample. The export is the input Claude works from — if the export is stale or partial, the analysis inherits those gaps.

**Verify dead links manually.** Claude flags URLs that pattern-match as broken, but it can't make HTTP requests. Run the Screaming Frog response codes filter yourself and check status codes directly. A 301 that should be a 200, a 404 that's been silently redirecting — those only show up in an actual crawl.

**Check Core Web Vitals in PageSpeed Insights.** LCP, CLS, and FID don't appear in any export. Claude has no way to measure render time from static files. Run the top five landing pages through PageSpeed directly.

**Cross-reference index status in Search Console.** Claude doesn't know what Google has actually crawled and indexed. A page can exist in a sitemap and still be excluded. That gap only shows up in Search Console, not in any file you can paste.

The frame that works: Claude Code as the first pass over a complete, freshly-crawled export — for pattern recognition and triage — with manual steps covering anything that requires a live request or real measurement. The audit gets faster. The judgment on what matters still has to be yours.

*Part 1 of 3 — Auditing for Visibility*
