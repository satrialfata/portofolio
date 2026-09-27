# DESIGN.md
# Satria Alfata — Portfolio & Resources

## 1. Design Direction

Website ini menggunakan pendekatan **personal portfolio modern dengan developer/resource hub**.

Design harus mempertahankan karakter visual dari screenshot saat ini:

- Dark-first interface
- Minimal
- Modern
- Technical / developer-oriented
- Clean
- Banyak whitespace
- Border dan card yang subtle
- Typography tegas
- Accent warna kuning/cream
- Sidebar sebagai navigasi utama
- Content area luas dan tidak terasa padat

Prinsip utama:

> **Personal, minimal, functional, dan resource-oriented.**

Website tidak boleh terasa seperti dashboard SaaS yang penuh data. Ini tetap portfolio pribadi.

---

# 2. Overall Layout

Desktop menggunakan dua area utama:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  SIDEBAR                  MAIN CONTENT                      │
│  fixed                    scrollable                        │
│                                                             │
│  Profile                  Page content                      │
│  Navigation               Cards / sections                  │
│  Social links             Project / Resource                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Sidebar

Sidebar berada di sebelah kiri dan bersifat persistent pada desktop.

Karakter:

- Lebar sekitar 240–280px
- Full height
- Background lebih gelap daripada content area
- Border kanan tipis
- Padding konsisten
- Navigation menggunakan icon + label
- Active state sangat jelas
- Resources menggunakan expandable submenu

### Main Content

Content berada di sebelah kanan sidebar.

- Max-width sekitar 1200–1400px
- Padding desktop besar
- Content dapat scroll secara vertikal
- Tidak menggunakan terlalu banyak card bertumpuk
- Section memiliki vertical spacing yang cukup

---

# 3. Sidebar Design

Sidebar adalah elemen visual penting berdasarkan screenshot.

Struktur:

```text
┌──────────────────────────┐
│                          │
│       Profile            │
│      Satria Alfata       │
│      Data Science        │
│                          │
├──────────────────────────┤
│                          │
│  Home                    │
│  About                   │
│  Portfolio               │
│                          │
│  Resources            ›  │
│                          │
│  Certificates            │
│  Contact                 │
│                          │
├──────────────────────────┤
│                          │
│  Social links            │
│                          │
└──────────────────────────┘
```

## Sidebar Rules

- Jangan menambahkan terlalu banyak menu.
- Resources harus menjadi satu parent navigation.
- Submenu Resources:

```text
Resources
├── Snippets
├── Templates
└── Tools
```

- Active page menggunakan accent color.
- Hover menggunakan background yang subtle.
- Icon tidak boleh lebih dominan daripada label.
- Sidebar harus terasa ringan, bukan seperti admin dashboard.

---

# 4. Color System

Gunakan warna yang konsisten dengan visual screenshot.

## Base

```text
Background Primary:   #0D0D0D
Background Secondary: #141414
Surface:              #181818
Surface Hover:        #202020

Border:               #2A2A2A

Text Primary:         #F5F5F0
Text Secondary:       #A5A5A0
Text Muted:           #73736F

Accent:               #F2E85C
Accent Hover:         #E4D94D
```

Accent digunakan secara terbatas untuk:

- Active navigation
- CTA utama
- Link penting
- Highlight
- Small decorative elements
- Status

Jangan menggunakan accent pada seluruh background atau setiap button.

---

# 5. Typography

Gunakan satu font utama yang konsisten.

Prioritas:

```text
Inter
```

Alternatif:

```text
Plus Jakarta Sans
```

Typography hierarchy:

```text
Hero / Page Title
48–72px
font-weight: 600–700

Section Heading
28–40px
font-weight: 600

Card Heading
18–22px
font-weight: 600

Body
15–17px
line-height: 1.6

Small / Metadata
12–14px
```

Gunakan typography besar untuk heading dan body yang relatif kecil untuk menjaga kesan modern.

---

# 6. Spacing

Gunakan spacing system yang konsisten.

Base unit:

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
```

Recommended:

```text
Card padding:       24px
Section spacing:    64–96px
Page padding:       32–64px
Element gap:        12–24px
```

Jangan membuat semua elemen terlalu rapat.

---

# 7. Border Radius

Gunakan radius yang moderat.

```text
Small:  6px
Medium: 10px
Large:  16px
```

Tidak menggunakan radius yang terlalu besar seperti 30–50px untuk semua komponen.

---

# 8. Borders

Border harus subtle.

```css
border: 1px solid #2A2A2A;
```

Gunakan border terutama pada:

- Cards
- Inputs
- Sidebar separator
- Code blocks
- Resource items
- Buttons jika diperlukan

Hindari border pada setiap elemen kecil.

---

# 9. Buttons

## Primary

Accent background:

```text
Background: Accent
Text: Dark
```

Contoh:

```text
[ View Portfolio ]
[ Download CV ]
```

## Secondary

Transparent / dark surface:

```text
Background: transparent
Border: subtle
Text: primary
```

Contoh:

```text
[ GitHub ]
[ Documentation ]
```

## Text Button

Untuk action kecil:

```text
View Project →
View Snippet →
Learn More →
```

---

# 10. Homepage

Homepage harus tetap terasa sebagai **personal portfolio**, bukan resource website.

Urutan:

```text
Hero
↓
Featured Projects
↓
About / Skills
↓
Resources Preview
↓
Certificates / Highlights
↓
Contact
```

## Hero

Hero harus sederhana.

Contoh struktur:

```text
Hi, I'm

Satria Alfata

Data Science Student
Building with Data, AI & Technology.

[ View Portfolio ]
[ Download CV ]

GitHub · LinkedIn · Email
```

Jangan terlalu banyak teks pada hero.

---

# 11. Portfolio Section

Project ditampilkan dalam grid.

Desktop:

```text
┌────────────────────┐ ┌────────────────────┐
│ Project             │ │ Project             │
│ Image               │ │ Image               │
│                     │ │                     │
│ Description         │ │ Description         │
│ Tech stack          │ │ Tech stack          │
│                     │ │                     │
│ GitHub →            │ │ Live Demo →         │
└────────────────────┘ └────────────────────┘
```

Project card:

- Image / preview
- Title
- Short description
- Tech stack
- Links

Hover:

- Slight translate
- Border highlight
- Image scale sangat kecil
- Tidak menggunakan animasi berlebihan

---

# 12. Resources Design

Resources harus terasa sebagai bagian dari portfolio, bukan website terpisah.

Landing section:

```text
Resources

Useful things I've collected and built
for students and developers.

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Snippets    │ │ Templates   │ │ Tools       │
│             │ │             │ │             │
│ Code ready  │ │ Practical   │ │ Useful      │
│ to use      │ │ documents   │ │ software    │
│             │ │             │ │             │
│ Explore →   │ │ Explore →   │ │ Explore →   │
└─────────────┘ └─────────────┘ └─────────────┘
```

---

# 13. Snippets Page

Layout:

```text
Snippets

Useful code snippets for everyday development.

[ Search snippets... ]

[All] [Python] [SQL] [R] [Laravel] [Git]

┌──────────────────────────────────────────────┐
│ Read CSV with Pandas                        │
│ Python · Pandas                             │
│                                              │
│ import pandas as pd                          │
│                                              │
│ df = pd.read_csv("data.csv")                 │
│                                              │
│ [ Copy Code ]                     View →     │
└──────────────────────────────────────────────┘
```

## Code Block

- Darker surface
- Monospace font
- Syntax highlighting
- Copy button
- Copy feedback

After clicking:

```text
✓ Copied
```

---

# 14. Templates Page

Templates hanya fokus pada:

> **Template Laporan Praktikum**

Page:

```text
Templates

Practical templates for students.

┌──────────────────────────────────────────────┐
│ 📄 Laporan Praktikum                        │
│                                              │
│ Template laporan praktikum yang dapat        │
│ diedit dan disesuaikan.                      │
│                                              │
│ DOCX · Editable                              │
│                                              │
│ [ Preview ]       [ Download DOCX ]          │
└──────────────────────────────────────────────┘
```

Jika nanti tersedia beberapa versi:

```text
Laporan Praktikum Umum
Laporan Praktikum Data Science
Laporan Praktikum Pemrograman
```

Gunakan card yang sama.

---

# 15. Tools Page

Tools bukan download server.

Tujuan halaman:

> **Membantu pengunjung menemukan software yang dibutuhkan dan mengarahkannya ke sumber resmi.**

Layout:

```text
Tools

Useful software for development,
Data Science, and AI.

[ Search tools... ]

Development
────────────────────────────

┌────────────┐ ┌────────────┐
│ VS Code    │ │ Git        │
│            │ │            │
│ Code       │ │ Version    │
│ editor     │ │ control    │
│            │ │            │
│ Official → │ │ Official → │
└────────────┘ └────────────┘


Data Science
────────────────────────────

┌────────────┐ ┌────────────┐
│ Python     │ │ R          │
└────────────┘ └────────────┘
```

## Tool Card

```text
Icon
Name
Short description
Category

[ Official Website ]
[ Documentation ]
```

Jika tersedia:

```text
[ Download ]
```

Semua download mengarah ke official source.

---

# 16. Resource Card

Semua resource card menggunakan visual language yang sama.

Struktur:

```text
Icon
Title
Short description

Metadata / category

Action →
```

Jangan membuat setiap kategori memiliki desain card yang berbeda-beda.

---

# 17. Search

Jika search digunakan:

```text
┌───────────────────────────────────────┐
│ 🔍 Search snippets, tools...          │
└───────────────────────────────────────┘
```

Input:

- Background surface
- Border subtle
- Focus border menggunakan accent
- Search icon
- Clear button jika ada query

---

# 18. Animations

Gunakan animasi minimal.

### Allowed

- Fade in
- Fade up
- Hover transition
- Button transition
- Sidebar submenu expand
- Card hover

### Duration

```text
150–250ms
```

### Avoid

- Excessive parallax
- Continuous floating animations
- Large moving backgrounds
- Excessive glowing effects
- Animations yang mengganggu pembacaan kode

Portfolio harus terasa profesional.

---

# 19. Icons

Gunakan satu icon library secara konsisten.

Recommended:

```text
Lucide Icons
```

Style:

- Stroke
- Simple
- Consistent size

Recommended size:

```text
16px — inline
18px — navigation
20–24px — cards
```

---

# 20. Images

Project screenshots harus:

- Consistent aspect ratio
- Optimized
- Lazy loaded
- Tidak terlalu besar
- Memiliki alt text

Portfolio tidak membutuhkan banyak decorative images.

Gunakan screenshot project sebagai visual utama.

---

# 21. External Links

External links seperti:

- GitHub
- LinkedIn
- Official Tools
- Documentation

harus memiliki visual indicator jika diperlukan.

Untuk Tools:

> **Always link to official sources.**

Jangan menggunakan third-party download mirror jika official source tersedia.

---

# 22. Mobile Design

Pada mobile:

```text
┌───────────────────────┐
│ ☰   Satria Alfata    │
├───────────────────────┤
│                       │
│ Main Content          │
│                       │
└───────────────────────┘
```

Sidebar berubah menjadi drawer.

### Mobile Rules

- Content padding: 20–24px
- Card menjadi single column
- Project grid menjadi 1 column
- Resource grid menjadi 1 column
- Hero heading mengecil
- Code block dapat horizontal scroll
- Button dapat full width jika diperlukan

---

# 23. Accessibility

Requirements:

- Semantic HTML
- Keyboard accessible
- Focus state
- Proper heading hierarchy
- Alt text
- Accessible button labels
- Sufficient color contrast
- Do not rely only on color to indicate active state
- Respect `prefers-reduced-motion`

---

# 24. Design Principles

### 1. Portfolio First

Website tetap harus terlihat sebagai portfolio Satria.

### 2. Resources Second

Resources adalah value-added feature, bukan identitas utama.

### 3. Minimal

Jangan menambahkan komponen hanya karena tersedia.

### 4. Practical

Setiap resource harus memiliki fungsi nyata.

### 5. Consistent

Semua halaman menggunakan design system yang sama.

### 6. Fast

Visual yang bagus tidak boleh mengorbankan performance.

---

# 25. Final Visual Hierarchy

```text
SATRIA ALFATA
│
├── Personal Identity
│
├── Portfolio
│   ├── Projects
│   ├── Skills
│   └── Certificates
│
└── Resources
    ├── Snippets
    ├── Templates
    │   └── Laporan Praktikum
    └── Tools
```

---

# 26. Design Success Criteria

Design dianggap berhasil jika:

- Sidebar terlihat jelas dan tidak penuh.
- Pengunjung langsung memahami bahwa website adalah portfolio pribadi.
- Resources mudah ditemukan.
- Snippet dapat dibaca dan dicopy dengan cepat.
- Template dapat dipreview dan didownload dengan jelas.
- Tools mudah ditemukan dan mengarah ke sumber resmi.
- Tampilan konsisten antara portfolio dan resources.
- Desktop dan mobile sama-sama nyaman.
- Animasi tidak mengganggu usability.
- Website tetap terasa personal, bukan seperti admin dashboard.

---

## Design Rule Paling Penting

> **Jangan mengubah portfolio menjadi website dokumentasi.**
>
> Portfolio adalah identitas utama.
> Resources adalah fitur tambahan yang membuat website lebih bermanfaat.
