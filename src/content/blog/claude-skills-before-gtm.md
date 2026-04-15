---
title: "Build Your Claude Skills File Before You Touch GTM"
description: "The .md file you write before touching HubSpot or n8n is the highest-leverage thing you'll do all week."
date: 2026-04-15
image: /assets/images/blog/claude-skills.png
imageAlt: Claude Code skills and SKILL.md for GTM engineering
draft: false
---

most people using Claude Code for GTM work start the same way: open a new session, paste in some context, get a decent output, and repeat. every session. forever.

that's not a system. that's copy-paste with extra steps.

the fix takes about 20 minutes and makes every session after it significantly better. it's called a **skill file** — a `.md` file that lives in your Claude Code setup and tells Claude exactly who you are, what you're building, and how you think before you even type your first prompt.

## what a skill actually is

a skill is a markdown file with a YAML header. Claude reads it automatically at the start of every relevant session. you write it once, it loads every time.

the file lives here:

```
~/Library/Application Support/Claude/local-agent-mode-sessions/skills-plugin/.../skills/your-skill-name/SKILL.md
```

the YAML header at the top controls when it triggers:

```yaml
---
name: gtm-context
description: >
  Context for Nehal's GTM engineering work at Invigilo AI. Use this whenever
  working on outreach, HubSpot, n8n workflows, ICP research, or any sales
  automation task.
---
```

everything below that header is your actual instructions.

## what to put in it for gtm work

the goal is to give Claude the context it would take you 10 minutes to explain in a normal session — but you only write it once.

for GTM specifically, that means:

- **your ICP** — not "B2B SaaS companies" but the specific company stage, team size, tech stack signals, and trigger events that matter
- **your stack** — which tools you're actually using (HubSpot, Apollo, n8n, Clay, whatever) and how they're connected
- **your sequence logic** — how you think about outreach (who gets contacted when, what signals trigger what)
- **your tone** — what good outreach sounds like for your context, what to avoid
- **recurring tasks** — things you ask Claude to do often, so it knows the pattern

a real example from my setup:

```markdown
## ICP
- Series A-B SaaS companies, 50–200 employees
- VP Sales or RevOps as primary contact
- Trigger signals: recent SDR hire, new CRM migration, job posts for "sales ops"
- Exclude: companies with a dedicated GTM engineer already in seat

## Stack
- HubSpot (CRM + sequences), Apollo (prospecting), n8n (automation), Clay (enrichment)
- All enrichment flows through Clay before hitting HubSpot

## Outreach rules
- Lead with a specific observation, not a generic opener
- Reference their stack or a recent hire when possible
- No "just checking in" follow-ups — each touch adds new context
```

now Claude knows all of this before you say anything. you don't re-explain it. you just say "draft a follow-up for this prospect" and it already knows your ICP, your stack, and your tone.

## the part most people skip

the description field in your YAML header is what tells Claude *when* to load this skill. if it's vague, the skill won't trigger when you need it.

bad:
```yaml
description: GTM stuff
```

good:
```yaml
description: >
  Context for GTM engineering work. Use this for any task involving outreach,
  HubSpot, Apollo, n8n, Clay, ICP research, sequence writing, or sales automation.
  Also use it when asked to review a workflow or draft copy for a prospect.
```

be specific about the trigger contexts. think about the phrases you actually type when you start a session.

## why before you build, not after

the reflex is to build first and document later. that's backwards for GTM.

when you're mid-build in n8n or halfway through a HubSpot sequence, Claude is making assumptions about your ICP, your tone, and your stack. without a skill file, those assumptions are generic. with one, they're yours.

the skill file also forces you to make decisions you'd otherwise defer — what does your ICP actually look like? what are your outreach rules? when you can't dodge those questions, you build tighter.

20 minutes now. every session after is faster.

## one more thing

skills stack. you can have one for GTM context, one for your blog writing voice, one for your outreach tone. they load independently based on what you're doing.

the best setup I've found: one skill for ICP + stack context, one for outreach copy rules, one for any recurring workflow you run more than twice a week.

if you're running Claude Code for GTM work and you haven't written a skill file yet — that's the first thing to do. not the workflow. not the sequence. the file.
