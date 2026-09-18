# StartupDesk living spec

## What the app does
StartupDesk is a multi-page marketing site for UAE company formation and business advisory, positioned at startupdesk.ae. It adapts the public information architecture of the Zone10X reference into a distinct premium B2B identity.

## Routes
- `/` — hero, package selector, trust metrics, value pillars, jurisdictions, process, licenses, CTA
- `/services` — filterable jurisdiction catalog and comparison prompt
- `/services/:id` — detail pages for Dubai Free Zone, SPC, SHAMS, Mainland, and Offshore
- `/licenses` — business license directory and selection guidance
- `/cost-calculator` — client-side indicative estimator for jurisdiction, visas, and workspace
- `/about` — company story, principles, and advisory team
- `/contact` — validated local-demo enquiry form with inline confirmation and toast

## Data model and integrations
Service and license content is local typed frontend data in `frontend/src/lib/siteData.ts`. Contact submission is LOCAL DEMO ONLY: no email, CRM, or external integration is connected. The existing FastAPI/Mongo status endpoint remains template infrastructure and is not required by the marketing flows.

## Key flows
1. Visitor selects a package on the homepage and follows a CTA into service detail, pricing, or contact.
2. Visitor filters jurisdiction cards and opens a detail page.
3. Visitor adjusts the calculator and receives a live indicative estimate.
4. Visitor completes contact form validation and sees local success feedback.
5. Desktop visitors use Zone10X-inspired Free Zone, Offshore, Mainland, Other Services, and Resources dropdowns; mobile visitors use the same hierarchy in accordion navigation.

## Auth and roles
No authentication or gated areas.