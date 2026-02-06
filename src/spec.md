# Specification

## Summary
**Goal:** Fix MessageScreen1/MessageScreen2 responsive layout so the FramedPhoto and message card never overflow on small phones while staying balanced on tablet and laptop.

**Planned changes:**
- Update MessageScreen1 and MessageScreen2 layout styles to prevent horizontal scrolling and keep the photo/banner/text/CTA centered and readable across phone/tablet/laptop breakpoints.
- Refactor the FramedPhoto component styling to use responsive sizing (remove fixed ~300x300 behavior), ensuring it never exceeds its parent width while preserving the existing gold frame and sparkle effects.
- Adjust card spacing/padding on MessageScreen1 and MessageScreen2 to be mobile-safe so content wraps naturally and the “Next” CTA remains fully visible/tappable in common viewport sizes.

**User-visible outcome:** On phones (including ~320px width), tablets, and laptops, the message screens display cleanly without overflow; the framed photo fits inside the rounded card without overlapping other elements; and the content/CTA remain readable and usable.
