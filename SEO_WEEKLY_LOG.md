# SEO Weekly Log — notepad-ai.online

---

## Week of 2026-04-13

### Research findings
- **Indexed pages:** 5 pages found in Google index — homepage, /offline, /home, /text-to-pdf, /tools/word-counter. Blog posts and most pages still in indexing queue.
- **Top competitors for "online notepad no login":** protectedtext.com, hypernotepad.com, anotepad.com, freenotepad.app — all emphasize privacy and simplicity. Notepad AI differentiates with NLP/AI features.
- **Top competitors for "AI notepad offline":** QuillBot (quillbot.com/notepad) is a major new competitor — well-established brand, free, no login. Also screenapp.io/features/ai-online-notepad. Notepad AI must lean harder into the "no account ever" and "local storage" privacy angle to differentiate.
- **Sentence counter SERP:** Heavily contested by QuillBot, Grammarly, sentencecounter.io, wordcounter.net. All rank for "free sentence counter online" (est. 18k/mo). Opportunity to capture long-tail with tool page + FAQ schema.
- **Private notepad/no cloud SERP:** hypernotepad.com blog published "Best Online Notepads in 2026" — actively competing in this comparison space. Privacy angle ("stores nothing online") has gap — few dedicate full pages to this query.
- **PAA questions found:** "How many sentences is 500 words?", "Is localStorage private?", "What is a private notepad?", "What is the best free notepad no cloud?" — added as FAQs in both page and homepage schema.

### Changes made
- `src/app/tools/sentence-counter/page.tsx` — **NEW FILE.** Full tool page targeting "free sentence counter online" (~18k/mo). Includes BreadcrumbSchema, FAQSchema (6 questions), SoftwareApplicationSchema, sentence count reference table, how-detection-works section, internal links to word-counter and character-counter.
- `src/app/blog/private-notepad-no-cloud/page.tsx` — **NEW FILE.** Blog post targeting "private notepad no cloud" (~5.8k/mo). Covers cloud privacy risks, localStorage mechanics step-by-step, local vs cloud comparison table, who-needs-it sections, practical tips, FAQSchema (6 questions), internal links to /offline, /features, /blog/evernote-alternative-free, /blog/best-online-notepad-2026.
- `src/components/seo/SchemaMarkup.tsx` — Added 3 new homepage FAQs to `homepageFAQs` array: sentence counter PAA, private notepad no cloud PAA, best free notepad no cloud PAA. Total homepage FAQs: 15 (was 12).
- `src/app/sitemap.ts` — Added `/tools/sentence-counter` (priority 0.9, weekly) and `/blog/private-notepad-no-cloud` (priority 0.8, monthly).

### New pages created
- `/tools/sentence-counter` — target keyword: "free sentence counter online", est. volume: 18k/mo
- `/blog/private-notepad-no-cloud` — target keyword: "private notepad no cloud", est. volume: 5.8k/mo

### Git
- Committed: `9b4405f` — "SEO weekly: add sentence-counter tool, private-notepad-no-cloud blog, 3 new FAQs, sitemap updates"
- Push: **SKIPPED** — GitHub HTTPS credentials not available in sandbox. Commit is ready locally; push manually with `git push origin main`.

### Skipped (not yet implemented — next week candidates)
- `/tools/paragraph-counter` (9.5k/mo) — next priority tool page
- `/tools/text-formatter` (7.5k/mo) — after paragraph counter
- `/blog/quillbot-notepad-alternative` — QuillBot identified as major new AI notepad competitor this week; high-value comparison post
- `/blog/notepad-dark-mode` (3.2k/mo) — pending
- `/blog/how-to-take-notes-without-cloud` (3.1k/mo) — pending
- `/blog/is-online-notepad-safe` (2.1k/mo) — pending

---

## Week of 2026-04-20

### Research findings
- **Indexed pages:** 5 pages in Google index (homepage, /offline, /home, /mobile, /tools/word-counter). Blog posts and most pages still in indexing queue — likely normal for a growing site.
- **Competitor Hypernotepad.com** launched v3.0 with a premium tier ($2.99/mo), tables, images, and custom themes. Dark mode is now **premium-only** on Hyper Notepad — this is a direct opportunity for Notepad AI to own the "free dark mode notepad" angle.
- **QuillBot's notepad** remains a major competitor — free, no login, but requires a QuillBot account to save notes. Opportunity to target "quillbot notepad alternative" queries (2.8k/mo estimated).
- **"best online notepad 2026" SERP:** Notepad AI not yet appearing in roundup articles (Zapier, SaasWorthy, Hyper Notepad Blog dominate). This is a long-term link-building target — Notepad AI's best-online-notepad-2026 blog post needs promotion.
- **Key PAA trends found:** "Does online notepad have dark mode?", "What happens to notes if I clear cache?", "Is QuillBot notepad free?", "Is it safe to write sensitive notes online?" — all now addressed via new FAQ schema entries.
- **notepad-ai.online citations:** 1 external citation found (screenapp.io). GEO/AI engine presence is still limited — site needs more third-party citations to appear in AI-generated answers.

### Changes made
- `src/components/seo/SchemaMarkup.tsx` — Added 4 new homepage FAQs to `homepageFAQs` array:
  1. "Does Notepad AI have dark mode?" — targeting dark mode search intent
  2. "What happens to my notes if I clear my browser cache?" — common PAA, addresses retention anxiety
  3. "Is Notepad AI a good alternative to QuillBot's online notepad?" — targets "quillbot notepad alternative" (2.8k/mo)
  4. "Is it safe to write sensitive notes in an online notepad?" — targets "is online notepad safe" intent
  Total homepage FAQs: 19 (was 15).
- `src/app/blog/notepad-dark-mode/page.tsx` — **NEW FILE.** ~1,200 word blog post targeting "online notepad dark mode" (3.2k/mo est.). Includes: 5-entry comparison table (Notepad AI vs Hyper Notepad, QuillBot, Google Keep, ProtectedText), feature grid, PWA installation tips, privacy section, FAQSchema (5 questions), BreadcrumbSchema, internal links to /, /features, /offline, /tools/word-counter.
- `src/app/sitemap.ts` — Added `/blog/notepad-dark-mode` (priority 0.8, monthly changefreq).

### New pages created
- `/blog/notepad-dark-mode` — target keyword: "online notepad dark mode" / "free notepad dark mode", estimated volume: 3.2k/mo

### Git status
- All file changes successfully written to disk.
- **Git commit BLOCKED** — stale `.git/HEAD.lock` and `.git/index.lock` files from previous automated run could not be removed from sandbox (Operation not permitted on mounted FUSE filesystem).
- **ACTION REQUIRED — run these commands on your machine:**
  ```bash
  cd /Users/usamalatif/Desktop/Apps/notepad-ai
  rm -f .git/HEAD.lock .git/index.lock
  git add src/app/sitemap.ts src/components/seo/SchemaMarkup.tsx src/app/blog/notepad-dark-mode/
  git commit -m "SEO weekly: notepad-dark-mode blog, 4 new homepage FAQs, sitemap update"
  git push origin main
  ```

### Skipped (next week candidates)
- `/tools/paragraph-counter` (9.5k/mo) — high-priority tool page, ready to build next run
- `/tools/text-formatter` (7.5k/mo) — next tool after paragraph counter
- `/blog/quillbot-notepad-alternative` (2.8k/mo) — excellent timing given QuillBot prominence in SERPs; create next run
- `/blog/is-online-notepad-safe` (2.1k/mo) — pending
- `/blog/how-to-take-notes-without-cloud` (3.1k/mo) — pending
- GEO: Submit to online directories (ProductHunt, AlternativeTo, SaasWorthy) to increase AI engine citations

---

## Week of 2026-05-18

### Research findings
- **APEX audit conducted.** Full audit saved to `/Users/usamalatif/Desktop/SEO Agents/notepad-ai-apex-audit-2026-05-18.md`. Key findings: (a) Homepage `StatsSection` showed FAKE metrics — 50K users, 1M notes, 99.9% uptime, 4.9 rating — none real, all E-E-A-T integrity risk. (b) Pre-hydration counters render literal `0` values to search engines that don't execute JS. (c) Site has 37 routes vs only 11 originally planned — strategy doc + weekly log execution is mature. (d) ZERO backlink strategy documented anywhere — single biggest bottleneck at DR 1.2.
- **Programmatic burst spec produced.** Saved to `/Users/usamalatif/Desktop/SEO Agents/notepad-ai-programmatic-burst-spec-v1.md`. 20 utility tool pages mapped across 4 waves with aggregate ~165K/mo addressable volume. Includes shared `<TextToolShell>` pattern (Section 6) as the leverage point.
- **Backlink Campaign #1 playbook produced.** Saved to `/Users/usamalatif/Desktop/SEO Agents/notepad-ai-backlink-campaign-1.md`. ProductHunt launch + 8 dev directory submissions with exact pitch copy + HARO daily routine + Reddit/HN strategy. 10-day execution timeline. Conservative targets: 10 RDs by Week 4, 20 by Week 8, 30 by Week 12.
- **Prior NotePad Agent artifacts reviewed.** Found earlier audit (April 11) and keyword research xlsx in `/SEO Agents/NotePad Agent/`. No contradictions with current state. Competitor list captured: quillbot.com/notepad, smartonlinenotepad.com, screenapp.io, canva.com/notes, anotepad.com, granola.ai, shrib.com, notebixby.com.

### Changes made
- `src/components/ui/StatsSection.tsx` — **FIXED FABRICATED METRICS.** Replaced 50K users / 1M notes / 99.9% uptime / 4.9 rating with defensible product facts: 100% Free Forever / 0 Logins Required / 4+ Languages / 9+ Built-in Tools. Each value is objectively true today. Added 4 new semantic icons (shield-check, open-padlock, globe, settings-gear). Inline comment points to APEX audit Section 5 with Option C migration path for real metrics once analytics are wired.
- `src/components/tools/TextToolShell.tsx` — **NEW SHARED COMPONENT.** Generic UI shell for embedded text tool widgets per APEX burst spec Section 6. Pure UI — accepts text + onTextChange + primaryStat + optional secondaryStats + extraActions + readOnly. Handles copy-to-clipboard, clear, responsive layout, dark-theme Tailwind. Privacy helper text included. Each new tool page is now ~30-min job.
- `src/components/tools/ParagraphCounterTool.tsx` — **NEW.** Client wrapper that wraps TextToolShell with paragraph counter logic. Splits text on `/\n\s*\n+/` (web-standard blank-line detection, matches MLA/APA/Chicago). Computes paragraphs (primary), sentences/words/characters (secondary).
- `src/app/tools/paragraph-counter/page.tsx` — **NEW PAGE.** Full SEO landing targeting "free paragraph counter online" (~9.5K/mo, KD Low). Embedded working tool above the fold (different from existing `/tools/sentence-counter` pattern which CTAs to editor — new pages have the tool ON the page for user intent + schema integrity). Quick-answer entity definition (GEO Law 1), how-to-use, what-counts-as-paragraph, tracked metrics grid, paragraph-length reference table, use cases, 3 related tools, 8 FAQs, final CTA. Schema: BreadcrumbSchema + FAQSchema + SoftwareApplicationSchema.
- `src/app/sitemap.ts` — Added `/tools/paragraph-counter` entry (priority 0.9, monthly changefreq).

### New pages created
- `/tools/paragraph-counter` — target keyword: "free paragraph counter online", est. volume: 9.5k/mo

### Automation infrastructure (one-time, persists)
- `USER_ACTION_QUEUE.md` created in `/Users/usamalatif/Desktop/SEO Agents/` — single file where the user checks all blocking/pending manual actions.
- `weekly-push.sh` created in `/Users/usamalatif/Desktop/SEO Agents/` — one-command commit + push for the user. Handles stuck `.git/index.lock` cleanup automatically.
- Scheduled task `apex-notepad-ai-weekly-sprint` created — runs every Monday at 09:00 local. Will pick next priority work item from burst spec, build it, update logs, queue any user actions. User receives a notification when each run completes.
- Vercel MCP connector suggested to user — would give deploy-status visibility but not yet installed.

### Git
- Commits NOT YET PUSHED. Five files changed in this sprint:
  - `src/components/ui/StatsSection.tsx` (StatsSection fix from prior session — still unpushed)
  - `src/components/tools/TextToolShell.tsx` (NEW)
  - `src/components/tools/ParagraphCounterTool.tsx` (NEW)
  - `src/app/tools/paragraph-counter/page.tsx` (NEW)
  - `src/app/sitemap.ts` (MODIFIED)
- **USER ACTION REQUIRED.** Push via `bash /Users/usamalatif/Desktop/SEO\ Agents/weekly-push.sh "APEX sprint 2026-05-18: stats fix + paragraph counter tool"`. The script clears the FUSE-stuck `.git/index.lock` automatically.

### Skipped (next week candidates — for the Monday auto-sprint)
- `/tools/line-counter` (3.2k/mo) — Wave 1, page #2. Uses TextToolShell. Should be ~30-min build.
- `/tools/syllable-counter` (5.8k/mo) — Wave 1, page #3. Syllable detection algorithm needs care.
- `/tools/reading-time-calculator` (8.2k/mo) — Wave 1, page #4. Simple ÷ 200 wpm.
- `/blog/quillbot-notepad-alternative` (2.8k/mo) — competitor-alternative blog, high-value comparison
- ProductHunt launch + dev directory submissions — pre-drafted in `notepad-ai-backlink-campaign-1.md`, blocked on user creating accounts (per USER_ACTION_QUEUE.md item B1)
- GEO citation baseline — run 20-query check across Perplexity / ChatGPT / Claude / Gemini

---
