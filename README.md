# willow-creek-montessori-example

A live example site for a fictional small Montessori school — **Willow Creek
Montessori**.

**Live site:** https://sebastiansells13-bot.github.io/willow-creek-montessori-example/

## How this differs

Back to Eleventy + Sass (like the original four examples), but a completely
different visual language: soft pastels, heavily rounded corners, organic blob
shapes, and a playful display face (`Baloo 2`) — the opposite end of the spectrum
from `northbound-records-example`'s brutalist black/white/neon-green look right
before it in this batch.

**No staff photos.** Every staff member is an illustrated initials-avatar
(`src/_data/staff.json` — name, role, initials, a pastel color), not a
photograph — sidesteps the real-person-likeness question entirely rather than
sourcing (or fabricating) staff photos for a fictional school. No blog, no CMS —
a small, focused site.

## Feature: tuition calculator

`src/tuition.njk` + `src/_includes/js/tuition-calculator.js` — pick a program and a
days-per-week schedule (button toggle, not a dropdown), optionally add after-care,
get a live monthly estimate. Explicitly framed as an estimate rather than a real
enrollment quote, same honesty pattern as every other calculator/estimator across
this portfolio.

## Local development

```bash
npm install
npm start
```
