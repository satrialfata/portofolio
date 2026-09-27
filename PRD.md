# Product Requirements Document (PRD)
# Satria Alfata — Personal Portfolio & Resources

**Version:** 1.0  
**Status:** Draft / Initial Scope  
**Website:** satrialfata.my.id

---

## 1. Overview

Website ini merupakan personal portfolio milik Satria Alfata yang tidak hanya berfungsi sebagai tempat menampilkan profil, pengalaman, sertifikat, dan project, tetapi juga menyediakan beberapa resource sederhana yang bermanfaat bagi mahasiswa dan developer.

Konsep utama:

> **Personal Portfolio + Practical Resources**

Website tetap berfokus pada identitas dan karya Satria, sedangkan fitur Resources menjadi nilai tambah yang membantu pengunjung dalam kegiatan programming dan perkuliahan.

---

## 2. Goals

### Primary Goals

1. Menampilkan identitas profesional Satria Alfata.
2. Menampilkan project dan kemampuan teknis.
3. Menyediakan resource praktis yang dapat digunakan pengunjung.
4. Membuat website portfolio yang memiliki alasan untuk dikunjungi kembali.
5. Menjaga website tetap sederhana, cepat, dan mudah digunakan.

### Secondary Goals

1. Menjadi tempat berbagi snippets kode.
2. Menyediakan template laporan praktikum.
3. Menjadi direktori tools/software yang relevan dengan programming dan Data Science.
4. Mengembangkan personal branding Satria sebagai mahasiswa Data Science yang aktif membangun project.

---

## 3. Target Users

### Primary Users

- Mahasiswa
- Programmer pemula
- Mahasiswa Data Science
- Developer yang membutuhkan code snippet sederhana

### Secondary Users

- Recruiter
- Dosen
- Mentor
- Teman sesama developer
- Pengunjung umum yang ingin melihat project Satria

---

# 4. Information Architecture

## Main Navigation

```text
Beranda
Tentang
Portofolio
Resources
Sertifikat
Kontak
```

## Resources

```text
Resources
├── Snippets
├── Templates
│   └── Laporan Praktikum
└── Tools
```

---

# 5. Feature Requirements

## 5.1 Beranda

### Purpose

Menampilkan identitas utama Satria dan memberikan akses cepat ke portfolio.

### Content

- Foto profil
- Nama
- Role / headline
- Deskripsi singkat
- Lokasi/status
- CTA Portfolio
- CTA Download CV
- Statistik atau highlight portfolio
- Featured Projects

### Actions

- Melihat portfolio
- Download CV
- Membuka project
- Membuka social media

---

# 6. Tentang

## Purpose

Menjelaskan profil dan latar belakang profesional secara lebih lengkap.

### Content

- Profil singkat
- Pendidikan
- Fokus bidang
- Skills
- Experience
- Career interests
- Technology stack

### Fokus

Identitas utama diarahkan pada:

- Data Science
- Data Engineering
- AI / Machine Learning
- Software Development

---

# 7. Portofolio

## Purpose

Menampilkan project yang pernah dibuat.

### Project yang dapat ditampilkan

- Marata
- News RAG Pipeline
- Acne Detection
- Laravel Sales Analytics Dashboard
- Customer Segmentation
- House Price Prediction
- Project lainnya

### Project Detail

Setiap project minimal memiliki:

- Nama project
- Deskripsi
- Problem / tujuan
- Solution
- Tech stack
- Screenshot
- GitHub repository
- Live demo jika tersedia
- Documentation jika tersedia

### CTA

```text
View Project
GitHub
Live Demo
Documentation
```

CTA yang tidak tersedia tidak perlu ditampilkan.

---

# 8. Resources

Resources merupakan fitur tambahan utama yang membedakan website dari portfolio biasa.

Resources hanya terdiri dari tiga kategori:

```text
Snippets
Templates
Tools
```

Scope harus tetap sederhana dan tidak berkembang menjadi knowledge platform besar pada versi awal.

---

# 9. Snippets

## Purpose

Menyediakan potongan kode yang sering digunakan dan dapat langsung disalin oleh pengunjung.

### Categories

- Python
- SQL
- R
- PHP
- Laravel
- JavaScript
- HTML
- CSS
- Git
- Linux

### Snippet Data

Setiap snippet memiliki:

- Title
- Description
- Language
- Category
- Code
- Tags
- Created date
- Updated date

### User Features

- Search snippet
- Filter berdasarkan bahasa
- Membuka detail snippet
- Copy code
- View related snippets

### Example

```python
import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())
```

Button:

```text
Copy Code
```

---

# 10. Templates

## Purpose

Menyediakan template yang membantu mahasiswa membuat laporan praktikum.

### Scope

Untuk versi pertama, hanya menyediakan:

> **Template Laporan Praktikum**

Tidak termasuk:

- Template proposal
- Template CV
- Template makalah
- Template PKL

Fokus dapat diperluas pada versi berikutnya jika memang diperlukan.

### Template Information

Setiap template memiliki:

- Nama
- Deskripsi
- Format file
- Ukuran file
- Preview
- Download
- Version

### Format

Prioritas:

- DOCX
- PDF preview

### Contoh

```text
Template Laporan Praktikum

Format: DOCX
Preview: PDF

[ Preview ]
[ Download DOCX ]
```

### Isi Template

Template dapat memiliki struktur umum:

```text
Cover
BAB I — Pendahuluan
BAB II — Dasar Teori
BAB III — Metodologi
BAB IV — Hasil & Pembahasan
BAB V — Kesimpulan
Daftar Pustaka
```

Template harus dapat diedit oleh pengguna setelah di-download.

---

# 11. Tools

## Purpose

Menyediakan direktori tools/software yang relevan untuk programming, Data Science, dan AI.

### Important Rule

Website **tidak meng-host installer/software sendiri**.

Tidak menyimpan:

- `.exe`
- `.msi`
- installer
- software binary
- mirror file software

Website hanya memberikan informasi dan link menuju sumber resmi.

### Categories

#### Development

- VS Code
- Git
- Node.js
- Docker
- Laragon

#### Data Science

- Python
- R
- RStudio
- Jupyter
- MySQL
- PostgreSQL

#### AI / Machine Learning

- PyTorch
- TensorFlow
- Ollama
- Ultralytics
- Google Colab

Daftar tools dapat berkembang.

### Tool Information

Setiap tool memiliki:

- Name
- Logo/icon
- Description
- Category
- Official website
- Documentation
- Download link
- GitHub jika tersedia

### Example

```text
Python

Programming language yang banyak digunakan
untuk Data Science, AI, automation, dan backend.

[ Official Website ]
[ Documentation ]
[ Download ]
```

Semua link download harus mengarah ke sumber resmi.

---

# 12. Sertifikat

## Purpose

Menampilkan sertifikat dan pencapaian.

### Content

- Nama sertifikat
- Issuer
- Tanggal
- Credential ID jika ada
- Credential URL jika ada
- Preview/image/PDF

### Features

- View certificate
- Open credential
- Download jika tersedia

---

# 13. Kontak

## Purpose

Memudahkan pengunjung menghubungi Satria.

### Contact Methods

- Email
- LinkedIn
- GitHub
- Instagram jika relevan

### Contact Form

Opsional untuk versi awal.

Jika menggunakan form:

```text
Name
Email
Subject
Message
Send Message
```

---

# 14. Global Search

## Initial Scope

Search tidak wajib pada tahap pertama.

Jika jumlah Resources sudah banyak, search dapat ditambahkan.

### Search Scope

- Snippets
- Templates
- Tools
- Portfolio

### Example

```text
Search snippets, tools, projects...
```

---

# 15. UI / UX Requirements

## Visual Direction

Website menggunakan gaya:

- Modern
- Minimal
- Professional
- Developer-oriented
- Dark-first
- Responsive

### Existing Direction

- Dark background
- Yellow/cream accent
- Blue/dark border accents
- Rounded cards
- Sidebar navigation
- Clear typography
- Subtle animations

### Sidebar

Resources menggunakan expandable navigation:

```text
Resources
  Snippets
  Templates
  Tools
```

Sidebar tidak boleh terlalu penuh.

---

# 16. Responsive Requirements

Website harus berjalan pada:

- Desktop
- Laptop
- Tablet
- Mobile

### Mobile

Sidebar desktop berubah menjadi:

- Mobile navigation
- Drawer
- Hamburger menu

Resources tetap mudah diakses dari mobile.

---

# 17. Accessibility

Minimum requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus state
- Sufficient text contrast
- Alt text pada gambar
- Button memiliki label yang jelas
- Link eksternal memiliki tujuan yang jelas
- Copy button memberikan feedback

Contoh:

```text
Copied!
```

setelah snippet berhasil disalin.

---

# 18. Performance

Website harus mengutamakan performa.

Requirements:

- Optimize image size
- Lazy loading untuk image yang tidak langsung terlihat
- Minimize unnecessary JavaScript
- Optimize assets
- Avoid loading unnecessary third-party scripts
- External tool links harus menggunakan URL resmi

---

# 19. Security

### Resources

File yang tersedia untuk download harus berasal dari file yang dikontrol oleh pemilik website.

### Tools

Tidak boleh mengunggah installer pihak ketiga ke server.

### General

- Validate contact form
- Protect server-side routes
- Validate uploaded files jika fitur upload ditambahkan di masa depan
- Jangan expose environment variables
- Jangan menyimpan API keys di frontend

---

# 20. Admin / Content Management

Untuk versi awal, content management dapat dilakukan melalui backend aplikasi.

Data yang idealnya dapat dikelola:

### Snippets

- Create
- Read
- Update
- Delete

### Templates

- Upload
- Update
- Delete
- Publish/unpublish

### Tools

- Create
- Update
- Delete
- Publish/unpublish

### Portfolio

- Create
- Update
- Delete
- Publish/unpublish

Admin panel tidak harus menjadi bagian dari versi pertama jika content masih sedikit.

---

# 21. Suggested Database Structure

Jika menggunakan database, struktur awal dapat berupa:

```text
users
projects
snippets
snippet_tags
templates
tools
tool_categories
certificates
contacts
```

Untuk versi sederhana, relasi dapat dikembangkan kemudian.

---

# 22. Non-Goals

Fitur berikut **tidak termasuk dalam scope versi awal**:

- User registration
- User login
- User-uploaded snippets
- User-uploaded datasets
- Social network
- Comment system
- Online code execution
- Online compiler
- Hosting software installer
- Dataset marketplace
- Blog CMS kompleks
- Learning management system
- Paid downloads

Tujuannya agar website tetap fokus sebagai personal portfolio + practical resources.

---

# 23. MVP

Minimum Viable Product:

### Portfolio

- [x] Beranda
- [x] Tentang
- [x] Portofolio
- [x] Sertifikat
- [x] Kontak

### Resources

- [ ] Snippets
- [ ] Templates → Laporan Praktikum
- [ ] Tools

### Snippets MVP

- [ ] List snippets
- [ ] Detail snippet
- [ ] Copy code
- [ ] Category/filter

### Templates MVP

- [ ] List template
- [ ] Detail template
- [ ] Preview
- [ ] Download DOCX

### Tools MVP

- [ ] List tools
- [ ] Category
- [ ] Tool detail
- [ ] Official website
- [ ] Documentation
- [ ] Official download

---

# 24. Future Development

Fitur berikut dapat dipertimbangkan setelah MVP stabil:

- Global search
- Dark/light theme improvements
- More templates
- More snippets
- Dataset library
- Cheat sheets
- Learning roadmap
- Analytics
- Favorites/bookmarks
- Admin dashboard
- Content statistics

Fitur future tidak boleh ditambahkan sebelum fitur inti stabil kecuali memang diperlukan.

---

# 25. Success Metrics

Website dianggap berhasil jika:

1. Pengunjung dapat memahami identitas Satria dalam beberapa detik.
2. Pengunjung dapat menemukan project dengan mudah.
3. Pengunjung dapat menyalin snippet tanpa langkah yang rumit.
4. Pengunjung dapat mengunduh template laporan praktikum dengan mudah.
5. Pengunjung dapat menemukan software yang dibutuhkan dan diarahkan ke sumber resmi.
6. Website nyaman digunakan di desktop maupun mobile.
7. Resources memberikan alasan bagi pengunjung untuk kembali ke website.

---

# 26. Final Product Concept

```text
                    SATRIA ALFATA
                         │
             ┌───────────┴───────────┐
             │                       │
        PERSONAL                   RESOURCES
        PORTFOLIO                  PRAKTIS
             │                       │
      ┌──────┼──────┐         ┌──────┼──────┐
      │      │      │         │      │      │
    About  Projects Cert.  Snippets Templates Tools
                              │        │       │
                            Code    Praktikum  Official
```

## Core Principle

> **Portfolio untuk menunjukkan kemampuan. Resources untuk memberikan manfaat.**

Website tidak perlu menjadi platform besar. Fokus utamanya tetap personal portfolio, dengan tiga resource yang benar-benar berguna:

**Snippets + Template Laporan Praktikum + Tools Directory.**
