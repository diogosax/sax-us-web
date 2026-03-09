CLAUDE.md

Guidelines for AI-assisted development in the SAX US Website repository.

This document defines strict rules for any AI agent (Claude, ChatGPT, or other coding assistants) contributing to this project.

The goal is to preserve brand integrity, accuracy of information, and maintainability.

⸻

Project Overview

This repository contains the source code for the official website of:

SAX Group LLC

The website presents SAX Global’s services related to:

• International expansion for Latin American companies
• U.S. company formation
• Legal and accounting structuring
• Logistics and operational setup
• Immigration strategy for founders and executives

The website is a marketing and informational website, not a SaaS product.

⸻

Technology Stack

The site must remain simple and maintainable.

Current stack:

• Next.js
• TypeScript
• Tailwind CSS
• Vercel deployment
• GitHub version control

Avoid introducing unnecessary frameworks or dependencies.

⸻

Brand Identity Rules

The SAX visual identity must remain consistent across the entire website.

When implementing UI components, always respect:

• Official brand colors
• Official typography
• Consistent spacing and layout
• Minimal and professional design

Do not introduce random colors, fonts, or visual styles.

If design tokens are defined in the project, always use them.

⸻

Content Integrity Rules

AI agents must not invent information.

Never fabricate:

• testimonials
• clients
• numbers or statistics
• partnerships
• certifications
• offices or locations
• case studies

All content must be derived from:
	1.	The existing sax-us.com website
	2.	Content explicitly provided by the project owner
	3.	Clearly marked placeholders

⸻

Image Rules

AI agents must never generate fictional imagery descriptions.

Do not:

• invent product screenshots
• invent photos
• invent illustrations
• invent icons

If images are required and not available, use placeholders such as:

TODO: image to be provided

⸻

Writing Style

Content should follow these principles:

• clear
• professional
• concise
• startup-style communication

Avoid:

• marketing exaggeration
• buzzword-heavy language
• long paragraphs
• generic filler text

Preferred tone:

Direct, trustworthy, and business-focused.

⸻

UI Design Principles

The website should follow modern startup design patterns:

• large clear headings
• generous whitespace
• simple sections
• responsive layout
• mobile-first approach

Avoid:

• complex animations
• excessive gradients
• heavy visual effects
• unnecessary UI libraries

⸻

Code Quality Rules

AI agents must:

• write clean and readable code
• follow Next.js best practices
• keep components modular
• avoid unnecessary abstractions

Do not introduce complex architecture for a simple marketing site.

⸻

Repository Structure

Expected structure:
src/
  app/
  components/
  content/
  lib/

public/
  images/

Components must be reusable and well organized.

⸻

When Information is Missing

If required information is not available:

• ask for clarification, OR
• create a clearly marked placeholder

Example:

TODO: content to be confirmed

Never invent missing content.

⸻

Change Philosophy

This repository follows a minimal change philosophy.

AI agents should prioritize:

• clarity
• maintainability
• simplicity

Avoid overengineering.

⸻

Maintainers

Maintained by:

SAX Group LLC

Orlando, Florida
United States

https://www.sax-us.com
