# Specification

## Summary
**Goal:** Restore the prior look-and-feel (typography + royal gold framed photo) and fix invisible/transparent navigation buttons by ensuring theme CSS variables and font loading apply correctly from first paint.

**Planned changes:**
- Restore the earlier typography across all screens and ensure it is applied immediately on first paint (no flash of default/system font on hard refresh).
- Fix invisible primary navigation/progression buttons (Intro CTA, “Pop the Balloons →”, “Next”, etc.) by correcting styles/contrast across normal/hover/active/focus states.
- Restore the “royal golden” framed photo presentation on MessageScreen2 so the photo renders with the premium gold frame styling (border + decorative/shadow effects) on mobile and desktop without clipping.
- Ensure the birthday theme CSS variables used by theme utility classes (e.g., bg-birthday-*, text-birthday-*) are defined in the active global stylesheet so theme-based colors render reliably on every screen.

**User-visible outcome:** The app loads with the intended earlier typography immediately, navigation buttons are clearly visible and usable throughout the flow, and MessageScreen2 again displays the photo inside the royal golden frame styling.
