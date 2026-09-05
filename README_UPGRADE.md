# Feliciah Portfolio — Upgraded

## What changed
- Reworked the vCard template into a modern Senior Data Engineer portfolio.
- Added responsive navigation and mobile sidebar.
- Added stronger hero section, career timeline, skills and contact CTA.
- Replaced generic project cards with three **portfolio-ready architecture concepts**.
- Added clickable architecture modals.
- Added a copy-email interaction.
- Removed unused testimonial/blog/template presentation from the visible site.

## IMPORTANT: Project architecture
The three architectures are intentionally presented as **concepts aligned to the technologies in the original source**. They are not claims about specific projects you completed.

Before publishing, replace:
- Project names
- Business problem
- Exact source/target systems
- GCP services
- Processing tools
- Performance metrics
- GitHub/demo links

with your real project details.

## Suggested architecture story

### 01 — Scalable Cloud ETL Pipeline
Source systems/files → GCS Raw Zone → PySpark/Dataproc → Validation & Logging → BigQuery Curated Zone

### 02 — Enterprise Data Modernisation
Oracle → Incremental Extract → PySpark/Hadoop → Schema & Reconciliation → GCP Analytics

### 03 — Data Quality & Observability
Incoming Data → Quality Rules → Valid/Invalid Split → Audit & Error Logs → Curated Dataset

## GitHub Pages
Keep `index.html` at the repository root and preserve the `assets/` directory structure.
