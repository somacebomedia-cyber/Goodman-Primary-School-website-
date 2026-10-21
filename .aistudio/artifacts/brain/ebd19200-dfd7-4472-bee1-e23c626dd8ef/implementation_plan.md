# Replace Campus Grounds Image with Authentic Goodman Primary Branding

Replace the outdated campus grounds image (which showed St. Andrew's Primary School) with a newly generated, sunny, authentic Goodman Primary and Pre School campus grounds image showcasing learners in uniform on landscaped walkways alongside modern brick classrooms, manicured lawns, and Goodman Primary branding with the red eagle crest.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during clarification and will govern the implementation:

- **Confirmed Image Generation**: Generate a brand-new, high-resolution sunny campus grounds image specifically designed for Goodman Primary and Pre School.
- **Confirmed Scene Composition**: Young South African primary learners in school uniform strolling along landscaped paved walkways and manicured lawns between single-story red-brick classroom buildings.
- **Confirmed Branding on Campus**: Prominent campus signage reading **"GOODMAN PRIMARY AND PRE SCHOOL"** featuring the official red double-headed eagle crest and South African daylight atmosphere.

---

### 1. Overview & Core Concept

- **What It Does**: Completely eliminates the incorrect "St. Andrew's Primary School" signage and imagery from the application, replacing it across the interactive gallery and data sets with authentic Goodman Primary and Pre School campus grounds imagery.
- **Target Audience**: Prospective parents and community members in Umzimkhulu reviewing campus facilities, learning spaces, and student life in the interactive gallery.
- **Key Value**: Ensures 100% brand consistency, credibility, and visual truthfulness across all campus photography.

---

### 2. User Experience & Visual Design

- **New Campus Grounds Visual Asset**:
  - Warm, sunny outdoor setting in Umzimkhulu with green hills, lush hedges, blooming indigenous flowers, and manicured lawns.
  - Red-brick primary school pavilions with covered walkways, large windows, and architectural signage: **"GOODMAN PRIMARY AND PRE SCHOOL"** with the red eagle coat of arms.
  - South African primary school learners in neat school uniform (navy/red) smiling and walking along paved pathways with school bags.
  - Aspect ratio: `4:3` / `16:9` high-resolution framing optimal for the campus gallery card and lightbox viewer.
- **Gallery Integration**:
  - Update `GALLERY_ITEMS[0]` in `src/data/schoolData.ts` to reference the newly generated Goodman Primary campus image.
  - Update caption: *"Our welcoming, modern red-brick classrooms and landscaped gardens at Goodman Primary & Pre School in Umzimkhulu."*
  - Seamless full-screen lightbox viewing with smooth zoom, title badge, and keyboard arrow navigation.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Generate Brand-New Tailored Campus Grounds vs Reusing Daylight Hero Building**
  - *Chosen Approach*: Generate a distinct grounds scene focusing on learners on landscaped pathways and campus greenery, rather than duplicating the hero building facade.
  - *Why*: Adds rich variety to the visual gallery tour, letting prospective parents see both the main administrative facade (in the hero) and the lively student walkways and gardens (in the gallery).
  - *Alternatives Considered*: Reusing the hero image was considered, but having distinct photos significantly enriches the campus tour experience.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Interactive Gallery Flow                        │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Asset Generation (`generate_image`)                              │  │
│  │ -> /src/assets/images/goodman_campus_grounds_*.jpg               │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                   │                                    │
│                                   ▼                                    │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Data Model (`src/data/schoolData.ts`)                            │  │
│  │ - GALLERY_ITEMS[0].image = new Goodman grounds asset path        │  │
│  │ - GALLERY_ITEMS[0].caption = Goodman Primary campus description  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                   │                                    │
│                                   ▼                                    │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ UI Component (`src/components/InteractiveGallery.tsx`)           │  │
│  │ - Campus Grounds Card Thumbnail (4:3) with hover zoom            │  │
│  │ - Fullscreen Lightbox with crisp rendering & keyboard navigation │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

- **Asset Generation**:
  - Call `generate_image` in Phase 1 of execution with descriptive prompt for Goodman Primary campus grounds.
- **Data & Component Synchronization**:
  - Replace `hero_school_campus_1792577914085.jpg` reference in `src/data/schoolData.ts`.
  - Validate all image links, run compilation and linter to verify zero regressions.
