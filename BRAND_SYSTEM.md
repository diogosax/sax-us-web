# BRAND_SYSTEM.md

Defines the visual identity rules for the **SAX US Website**.

This file is the source of truth for typography, colors, logo usage, and brand consistency across the project.

Any AI agent or developer working on this repository must follow these rules strictly.

---

## Brand Goal

The SAX visual identity should communicate:

- credibility
- clarity
- professionalism
- international business focus
- modern startup-style simplicity

The website should feel premium, clean, and business-oriented.

Avoid visual noise and avoid generic “template” aesthetics.

---

## Typography

The website must use the official SAX typeface.

**Primary font:**
- Montserrat

Recommended usage:

- Headings: Montserrat, semibold or bold
- Body text: Montserrat, regular or medium
- Buttons and navigation: Montserrat, medium or semibold

Do not introduce secondary decorative fonts unless explicitly approved.

---

## Color System

Use the official SAX color palette.

### Primary Colors

**SAX Teal**
- `#00BFA6`

**SAX Navy**
- `#0A2342`

### Neutral Colors

Recommended neutral support palette:

- White: `#FFFFFF`
- Light gray background: `#F8FAFC`
- Medium gray text: `#475569`
- Dark text: `#0F172A`

These neutrals may be adapted slightly for accessibility and UI balance, but the primary brand colors must remain dominant.

---

## Color Usage Rules

### SAX Teal `#00BFA6`
Use for:
- primary buttons
- highlights
- links when appropriate
- key accents
- icons or emphasis details

Do not overuse teal in large heavy blocks unless visually balanced.

---

### SAX Navy `#0A2342`
Use for:
- headings
- footer background
- dark sections
- important text
- navigation emphasis

This should be the main anchor color of the brand.

---

### White and Neutrals
Use for:
- page backgrounds
- content breathing space
- cards
- secondary text
- visual hierarchy

The site should feel clean and spacious.

---

## Logo Asset Rules

AI agents must never recreate, redesign, trace, or invent logos.

Only official logo files provided by the project owner may be used.

### Official asset location

All logo files must be stored inside:

```text
public/images/brand/

Recommended structure:
public/images/brand/
  sax/
  keepsalive/
  unihub/
  office-today/

Recommended naming convention:

sax-logo-primary.png
sax-logo-white.png
keepsalive-logo-primary.png
unihub-logo-primary.png

Logo usage rules
	•	Use the primary logo on light backgrounds
	•	Use the white version on dark backgrounds
	•	Never stretch logos
	•	Never change logo colors
	•	Never apply shadows, glow, outlines, or effects
	•	Never crop logos tightly
	•	Preserve visual breathing room around each logo

If a required logo asset is missing, use a clearly marked placeholder and request the correct file.

Example:
TODO: official logo asset required

Image Rules

Only use images that are explicitly provided or approved.

Do not invent:
	•	product screenshots
	•	lifestyle photos
	•	fake office images
	•	abstract brand illustrations
	•	fictional company graphics

If imagery is missing, use one of these approaches:
	•	simple layout without image
	•	neutral placeholder block
	•	clearly marked TODO

The design should still work well even with minimal imagery.

⸻

UI Style Principles

The visual style must be:
	•	clean
	•	modern
	•	restrained
	•	premium
	•	readable
	•	responsive

Use:
	•	generous whitespace
	•	clean sections
	•	clear typography hierarchy
	•	subtle card layouts
	•	simple icon usage only if necessary

Avoid:
	•	flashy gradients
	•	crowded layouts
	•	over-animated UI
	•	overly playful visuals
	•	generic stock-template feeling

⸻

Buttons

Primary buttons should typically use:
	•	background: SAX Teal #00BFA6
	•	text: White
	•	hover state: slightly darker teal tone

Secondary buttons may use:
	•	outline with SAX Navy
	•	text in SAX Navy
	•	white or transparent background

Button style should be:
	•	clean
	•	slightly rounded
	•	modern
	•	highly readable

Do not create overly pill-shaped or cartoonish buttons.

⸻

Section Styling

Recommended section behavior:
	•	alternate between white and very light neutral backgrounds
	•	use navy for selected emphasis sections
	•	keep section padding generous
	•	maintain consistent spacing rhythm

Every section should feel intentionally placed.

⸻

Cards and Content Blocks

Cards should be:
	•	simple
	•	lightly elevated or flat
	•	rounded in a modern way
	•	consistent in spacing

Do not use heavy shadows or loud borders.

⸻

Iconography

If icons are used:
	•	keep them minimal
	•	use simple line icons
	•	maintain consistent stroke style
	•	do not mix multiple icon styles

Do not use decorative icons just to fill space.

⸻

Accessibility and Readability

Design choices must preserve:
	•	contrast
	•	legibility
	•	mobile usability
	•	clear interactive states

Brand fidelity must not reduce usability.

⸻

Implementation Preference

Whenever possible, brand values should be implemented via reusable design tokens or Tailwind classes.

Recommended future implementation examples:
	•	primary color token
	•	secondary color token
	•	heading classes
	•	button classes
	•	spacing rhythm

This should help keep the UI consistent as the site grows.

⸻

Official Rule

If there is any conflict between creative freedom and brand consistency, brand consistency wins.

Do not improvise visual identity.
