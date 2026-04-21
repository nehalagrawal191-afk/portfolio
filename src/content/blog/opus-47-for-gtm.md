---
title: "Using Opus 4.7 for GTM Without Burning Budget on the Wrong Tasks"
description: "How to structure a Claude Code repository for GTM work — extended thinking for strategy, Sonnet for volume, and a routing function that keeps spend flat."
date: 2026-04-21
draft: false
---

The repository has one markdown file. Everything else follows from it.

## The repository

```
gtm-agent/
├── CLAUDE.md
├── gtm.md
└── sessions/
```

`gtm.md` is the context file Opus reads at session start. It describes the company, the ICP, the funnel, where deals are stalling, and what's been tried.

```markdown
# Company
B2B SaaS, developer infrastructure. Series A.
ACV ~$40k. Sales cycle 45-90 days.

# ICP
VP Eng or VP Infra at growth-stage dev tools companies (50-500 employees).
Pain: observability gaps, incident toil, toolchain sprawl.

# Funnel
- Top: outbound + content. ~120 leads/month.
- Trial-to-paid conversion: 18% (stalling here).
- Enterprise: 4 deals in discovery, stalling at security review.

# What's been tried
- Cold email to CTOs: low reply rate
- LinkedIn DMs to VP Eng: moderate engagement
- Content: two technical deep-dives, decent organic traffic
```

`CLAUDE.md` carries the standing instructions Opus reads before anything else.

```markdown
# Standing instructions
- Tone: direct, technical, peer-to-peer. No marketing language.
- ICP: VP Eng / VP Infra. Assume they read code, not decks.
- Off-limits: growth hacking language, feature-first pitches.
- Do not suggest channels already tried without a new angle.
- When analyzing pipeline, treat the trial-to-paid stall as the primary constraint.
```

## Extended thinking for multi-part prompts

For strategic prompts that span analysis, channel identification, and copy — extended thinking holds the context across all three parts without collapsing them into a generic answer.

```typescript
const response = await anthropic.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  messages: [{
    role: "user",
    content: `Analyze pipeline health, identify the highest-leverage
    outbound channel given our stage, and draft the first three messages
    for a sequence targeting VP Infra at growth-stage dev tools companies.`
  }]
});
```

A two-minute thinking session on a prompt like this lands around 1,500 output tokens. The reasoning trace is visible and traceable — it reflects the constraints you described in `gtm.md` rather than producing something generically plausible.

## Routing by task type

Volume work goes to Sonnet. Enriching a contact list, reformatting sequences for a new segment, generating copy variants — the output quality difference at that complexity is negligible.

```typescript
const STRATEGIC_KEYWORDS = [
  "analyze", "strategy", "positioning",
  "ICP", "channel", "pipeline", "refine"
];

function routeModel(task: string): string {
  const isStrategic = STRATEGIC_KEYWORDS.some(k =>
    task.toLowerCase().includes(k)
  );
  return isStrategic ? "claude-opus-4-7" : "claude-sonnet-4-6";
}
```

Total session spend stays flat because the volume tasks moved off Opus. Output quality on the Opus side improved because extended thinking now has the token budget to hold multi-part context rather than resolving it early.

## The screenshot workflow

Paste an analytics dashboard mid-session. Opus reads the chart axes, catches the anomaly in the conversion drop, and references it downstream. You don't describe the data in text; you show it, and the session carries it forward.

A reference later to "the stall we identified in the enterprise segment" works because the model hasn't lost it. For GTM work specifically, where the funnel model and the current bets have to stay coherent across a sequence of prompts, that session persistence matters more than it does for single-shot tasks.

The setup takes an hour. The compounding happens over sessions.
