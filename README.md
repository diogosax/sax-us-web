# sax-us-web
SAX US Website

Official website for SAX Group LLC – focused on international expansion services for Latin American companies entering the United States.

This repository contains the source code for the sax-us.com marketing website.

⸻

Overview

The site presents SAX Global’s services and positioning in the U.S. market, including:
	•	Company setup in the United States
	•	Legal and accounting structuring
	•	Logistics and operational support
	•	Immigration strategy for entrepreneurs and executives

The website is designed to be fast, simple, and maintainable, following a modern startup-style stack.

⸻

Tech Stack
	•	Next.js
	•	TypeScript
	•	Tailwind CSS
	•	Vercel for hosting and deployment
	•	GitHub for version control

⸻

Deployment

The website is automatically deployed through Vercel.

Workflow:

GitHub → Vercel → Production
	•	Every push to main triggers a production deployment.
	•	Pull requests generate preview environments.

⸻

Repository Structure

src/
  app/
  components/
  content/
  lib/

public/
  images/

Explanation:
	•	app/ – Next.js routes and pages
	•	components/ – UI components and page sections
	•	content/ – editable content (text and structured data)
	•	lib/ – utilities and helpers
	•	public/ – static assets

⸻

Development Workflow

Project workflow follows a simple startup model:

Architecture and planning: SAX Team
Implementation: AI-assisted development (Claude Code)
Infrastructure: Vercel + GitHub

Typical change flow:
	1.	Feature request or improvement
	2.	Implementation via AI-assisted coding
	3.	Commit and push to GitHub
	4.	Automatic deploy via Vercel

⸻

Maintained By

SAX Group LLC

Orlando, Florida
United States

https://www.sax-us.com

⸻

License

MIT
