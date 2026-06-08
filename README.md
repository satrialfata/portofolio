# Portfolio Web - satrialfata.id

Sebuah website portofolio pribadi modern, responsif, dan dinamis yang dibangun menggunakan **Next.js 16 (App Router)** dan **Tailwind CSS**. Website ini menampilkan profil, keahlian, portofolio, sertifikat, serta integrasi langsung ke GitHub contribution graph.

## 🚀 Fitur Utama
- **Responsive Sidebar Navigation**: Sidebar navigasi modern yang menyesuaikan secara elegan baik di tampilan Desktop maupun Mobile.
- **Dark/Light Mode**: Dukungan pergantian tema (*theme toggle*) yang mulus menggunakan `next-themes`.
- **Halaman Lengkap**: Mencakup Beranda, Tentang, Portofolio, Sertifikat, dan Kontak.
- **Skill Carousel Animasi**: Komponen `SkillCarousel` interaktif dengan efek *marquee loop* otomatis untuk memamerkan keahlian (*skills*).
- **GitHub Contribution Graph**: Terintegrasi menggunakan `react-github-calendar` untuk menampilkan kontribusi koding secara langsung.

## 🛠️ Teknologi yang Digunakan
- [Next.js 16](https://nextjs.org/) - Framework React dengan arsitektur App Router.
- [React 19](https://reactjs.org/) - Library frontend.
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS *utility-first* untuk *styling*.
- [next-themes](https://github.com/pacocoursey/next-themes) - Manajemen state untuk tema gelap/terang.
- [react-icons](https://react-icons.github.io/react-icons/) & SimpleIcons - Ikon untuk UI dan keahlian.
- [TypeScript](https://www.typescriptlang.org/) - Untuk keamanan tipe data statis.

## 📁 Struktur Folder Utama

```text
satrialfata.id/
├── public/                 # File aset statis
├── src/
│   ├── app/                # Sistem Routing Next.js (App Router)
│   │   ├── kontak/         # Halaman Kontak
│   │   ├── portofolio/     # Halaman Portofolio
│   │   ├── sertifikat/     # Halaman Sertifikat
│   │   ├── tentang/        # Halaman Tentang Saya
│   │   ├── globals.css     # Styling global (Konfigurasi Tailwind)
│   │   ├── layout.tsx      # Root layout dari aplikasi
│   │   └── page.tsx        # Halaman Utama (Beranda)
│   ├── components/         # Komponen UI (Reusable Components)
│   │   ├── GithubContribution.tsx  # Grafik kalender GitHub
│   │   ├── Sidebar.tsx             # Menu navigasi samping
│   │   ├── SkillCarousel.tsx       # Animasi skill marquee
│   │   └── ThemeProvider.tsx       # State penyedia tema (Dark/Light)
│   └── img/                # Aset gambar lokal
├── eslint.config.mjs       # Konfigurasi linter
├── package.json            # Daftar dependensi & scripts NPM
└── tsconfig.json           # Konfigurasi TypeScript
```

## 💻 Cara Menjalankan secara Lokal

1. **Clone repository ini** ke komputer Anda:
   ```bash
   git clone https://github.com/satrialfata/satrialfata.id.git
   cd satrialfata.id
   ```

2. **Instal dependensi** menggunakan NPM:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. Buka browser dan arahkan ke [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya!

## 📜 Lisensi
Dikembangkan oleh **Satria Alfata** - Mahasiswa Sains Data & *AI/Cybersecurity Enthusiast*.
