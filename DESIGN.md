---
name: Professional Craft
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#566065'
  on-secondary: '#ffffff'
  secondary-container: '#dae4ea'
  on-secondary-container: '#5c666b'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae4ea'
  secondary-fixed-dim: '#bec8ce'
  on-secondary-fixed: '#131d21'
  on-secondary-fixed-variant: '#3f484d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar-width: 320px
  container-max: 1100px
  gutter: 24px
  margin-page: 40px
  stack-gap: 16px
  section-padding: 64px
---

## Brand & Style
The design system is built for a professional personal portfolio, balancing a "developer-centric" utility with a refined "designer-first" aesthetic. It targets recruiters, hiring managers, and potential collaborators who value clarity, technical proficiency, and attention to detail.

The visual style is **Corporate / Modern** with a slight **Minimalist** lean. It utilizes a structured "application" layout—featuring a fixed sidebar and window controls—to evoke the feeling of a high-end IDE or productivity tool. The emotional response should be one of reliability, organization, and approachable expertise. 

Key visual hallmarks include ample white space, a strictly defined color palette for information hierarchy, and subtle depth through soft shadows and tonal layering.

## Colors
The palette is rooted in professional stability. 

- **Primary Background**: Pure White (#FFFFFF) is used for the main content areas to maximize readability and provide a clean canvas for project visuals.
- **Sidebar Background**: Very Light Gray (#F9FAFB) provides a subtle tonal distinction for the fixed navigation and profile area, creating a clear vertical split.
- **Primary Accent**: Professional Blue (#2563EB) is reserved for key actions, links, and high-level branding elements.
- **Secondary Accent**: Very Light Blue-Gray (#EBF5FB) acts as a soft container color or hover state for interactive items.
- **Success Accent**: Professional Green (#10B981) is utilized for status indicators, "Open to Work" badges, or successful form submissions.
- **Text Layers**: Dark Gray (#374151) provides high contrast for headings and primary information, while Medium Gray (#6B7280) is used for supporting body text and metadata to reduce visual noise.

## Typography
The system uses a dual-font strategy to balance personality with utility.

**Montserrat** is used for headings. Its geometric construction feels modern and confident. Use Bold (700) for section titles to create a strong visual anchor.

**Inter** is the workhorse for all UI and body text. It is chosen for its exceptional legibility at small sizes and its neutral, professional character. 

For accessibility and hierarchy:
- Use `headline-lg` for major page sections (Experience, Projects).
- Use `body-md` for general descriptions.
- Use `label-md` with uppercase styling for small metadata like dates or categories.

## Layout & Spacing
This design system utilizes a **Fixed Sidebar + Fluid Content** model.

- **Sidebar**: A fixed 320px sidebar on the left contains the profile image, bio, and primary CTA buttons. It does not scroll with the main content.
- **Main Content**: The right-hand area scrolls vertically. Content is centered within a maximum width of 1100px to ensure line lengths remain readable on ultra-wide monitors.
- **Grid**: A standard 12-column grid is used within the scrollable area for project cards, though many components (like Experience) will span the full width of the container.
- **Breakpoints**: 
  - **Desktop (1024px+)**: Two-column layout (Sidebar + Content).
  - **Tablet (768px - 1023px)**: Sidebar shrinks or transforms into a top-bar; margins reduce to 24px.
  - **Mobile (Below 768px)**: Single column stack. The sidebar becomes a header with a collapsible menu.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** and **Ambient Shadows**.

1.  **Level 0 (Base)**: The Primary Background (#FFFFFF).
2.  **Level 1 (Sub-surface)**: The Sidebar (#F9FAFB), used to push content slightly "behind" the main stage.
3.  **Level 2 (Cards/Floating)**: Experience and Project cards use a pure white background but are lifted by a very soft, diffused shadow (`0px 4px 20px rgba(0, 0, 0, 0.05)`).
4.  **Dividers**: Thin, 1px horizontal lines in `#E5E7EB` are used to separate major sections (e.g., between "Stack" and "Projects") when a card-based layout isn't desired.

## Shapes
The shape language is consistently **Rounded**, conveying an approachable and modern feel.

- **Standard Elements**: Input fields, buttons, and small cards use a 0.5rem (8px) radius.
- **Large Containers**: Experience and Project cards use `rounded-lg` (1rem / 16px) to emphasize their role as primary content blocks.
- **Tech Stack Logos**: Icons in the "Stack" section are strictly circular (full-round) to create a rhythmic, repetitive pattern.
- **Profile Image**: The profile/GIF area in the sidebar should also utilize the `rounded-xl` (1.5rem) or a circle to maintain softness.

## Components

### Buttons
- **Primary**: Solid `#2563EB` background with White text. Bold weight.
- **Secondary**: `#EBF5FB` background with `#2563EB` text. Used for "Get CV" or secondary navigation.
- **States**: Hover states should involve a slight darkening of the background color (e.g., Primary becomes `#1D4ED8`).

### Experience & Project Cards
- **Structure**: A white container with a 1px border (`#F3F4F6`) or the Level 2 shadow.
- **Internal Layout**: Title and Date share the top row (Space-between). Technology logos are displayed as a horizontal row of 32px circles at the bottom right or left.

### Tech Stack Icons
- 48px to 64px circles with a light gray border. Logos should be centered with 25% internal padding to ensure consistency across different brand shapes.

### Window Controls
- Located at the top right of the viewport (or sidebar). Three small circles: Red, Yellow, Green (reminiscent of macOS) to lean into the "Developer Workspace" theme.

### Horizontal Dividers
- Full-width 1px lines (`#F3F4F6`) with section titles (`Montserrat`, 700) placed directly above them.
