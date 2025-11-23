# Creative Break - Design Guidelines

## Design Approach
**Design System**: Custom wellness-inspired approach drawing from meditation apps like Calm and Headspace, emphasizing tranquility and mental clarity through clean layouts and generous whitespace.

**Core Principle**: Create a serene digital space that encourages creative exploration without visual clutter or cognitive overload.

---

## Typography
- **Primary Font**: Inter or DM Sans (via Google Fonts CDN)
- **Display/Headers**: 32-40px, semibold weight
- **Subheadings**: 20-24px, medium weight  
- **Body Text**: 16-18px, regular weight
- **Buttons**: 16px, medium weight, slight letter-spacing (0.02em)

---

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, and 20
- Consistent padding: p-8 for mobile, p-12 for desktop
- Button spacing: gap-4 between buttons
- Section spacing: my-12 to my-20

**Container Strategy**:
- Max-width: max-w-4xl for main content
- Center all content: mx-auto
- Full viewport height for main view: min-h-screen with flex layout

---

## Component Library

### Header
- Fixed top position with subtle shadow
- Logo + wordmark horizontal layout (gap-4)
- Logo size: 42px as provided in SVG
- Header height: h-20
- Background: slightly elevated from main content

### Category Buttons
- Grid layout: grid-cols-2 md:grid-cols-5
- Large, rounded cards: rounded-2xl
- Generous padding: p-6 md:p-8
- Hover: subtle lift effect (transform translateY)
- Active state: gentle scale down
- Icons above text (centered layout)

### Activity Output Card
- Large centered card: max-w-2xl
- Extra padding: p-12
- Rounded corners: rounded-3xl
- Drop shadow for elevation
- Activity text: text-center, larger font (20-24px)
- Action buttons below activity text (gap-4)

### Footer (Add)
- Simple centered layout
- Small text with creator attribution
- Links to share/feedback

---

## Page Structure

**Single Page Layout**:
1. **Header** (h-20): Logo + title, subtle shadow
2. **Main Section** (flex-1, centered): 
   - Welcome heading with tagline
   - Category grid (5 buttons)
   - Output card (appears on selection with fade-in)
3. **Footer**: Minimal info, mt-20

---

## Interactions & Animations
- **Button Selection**: Smooth 200ms transitions
- **Activity Reveal**: Fade-in + slide-up (300ms ease-out)
- **Category Buttons**: Subtle hover lift (-2px translateY)
- Keep animations minimal and purposeful

---

## Icons
**Library**: Heroicons (via CDN)
- Creativo: SparklesIcon
- Teatrale: UserGroupIcon  
- Disegno: PencilIcon
- Reset Mentale: ArrowPathIcon
- Sorpresa: GiftIcon

Icons size: 32px, placed above button text

---

## Images
**Hero Background** (Optional): Subtle gradient overlay or abstract wave pattern as page background
- Placement: Full viewport behind content
- Treatment: Low opacity (10-15%), doesn't compete with UI
- Alternative: Solid calm background without image

**No other images needed** - focus on clean, distraction-free interface

---

## Accessibility
- Clear focus states on all interactive elements (2px outline)
- Sufficient color contrast for all text
- Keyboard navigation support
- ARIA labels for icon buttons
- Visible focus indicators: ring-2 ring-offset-2