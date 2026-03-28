# myFM — Landing Page

> Letterboxd for music. Log artists, write reviews, see what your friends are listening to.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Axios** for API calls
- **Framer Motion** (fade-in animations)
- **Google Fonts**: Bebas Neue, Playfair Display, IBM Plex Mono, IBM Plex Sans

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
```
Then fill in your values in `.env.local`:
```
NEXT_PUBLIC_SHEETID=your_google_spreadsheet_id
NEXT_PUBLIC_GID=your_sheet_name_or_gid
NEXT_PUBLIC_GOOGLE_SCRIPT_WEBAPP_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

### 3. Run dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
myfm/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts        # Google Sheets proxy
│   ├── globals.css             # Design tokens, utility classes
│   ├── layout.tsx              # Fonts, metadata, grain overlay
│   └── page.tsx                # Page assembly
├── components/
│   ├── Nav.tsx                 # Sticky nav
│   ├── Hero.tsx                # Hero + iPod mockup
│   ├── FriendsActivity.tsx     # Friends feed table
│   ├── Features.tsx            # Bento feature grid
│   ├── Reviews.tsx             # Review cards
│   ├── HowItWorks.tsx          # 3-step flow
│   ├── FinalCTA.tsx            # Dark CTA section
│   ├── Footer.tsx              # Footer
│   ├── IpodMockup.tsx          # CSS iPod decoration
│   └── WaitlistForm.tsx        # Shared form (hero + cta)
└── .env.local.example
```

## Waitlist Form

The `WaitlistForm` component POSTs to `/api/waitlist` which proxies to your Google Apps Script.

**Payload sent:**
```json
{
  "Name": "Jane",
  "Email": "jane@example.com",
  "Source": "hero",
  "SpreadsheetId": "...",
  "SheetName": "..."
}
```

**States:** `idle → loading → success | error`

## Design System

All design tokens live in `globals.css` as CSS variables:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#f0ede6` | Page background (warm off-white) |
| `--color-black` | `#0f0e0d` | Primary text, buttons |
| `--color-border` | `#c8c3b8` | All borders |
| `--color-accent` | `#c9a8b2` | Dusty pink (Maxell tape) |
| `--color-text-muted` | `#7a7570` | Secondary text |

`border-radius: 0` is applied globally — everything is sharp.
# myfm-landing
