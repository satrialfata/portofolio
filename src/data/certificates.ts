export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credential: string;
  image: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    title: "Junior Website Developer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "2025",
    category: "Web Developer",
    credential: "#",
    image: "/sertifikat/sertifikat_bnsp.jpeg",
    description: "Sertifikasi kompetensi profesional di bidang pengembangan website yang dikeluarkan oleh Badan Nasional Sertifikasi Profesi, memvalidasi kemampuan dalam merancang dan mengembangkan aplikasi web."
  },
  {
    title: "Temuan Kerentanan Website Provinsi DKI Jakarta",
    issuer: "Diskominfo DKI Jakarta",
    date: "2025",
    category: "Cybersecurity",
    credential: "#",
    image: "/sertifikat/diskominfo_jakarta.jpeg",
    description: "Penghargaan atas kontribusi dalam menemukan dan melaporkan kerentanan keamanan pada sistem website Pemerintah Provinsi DKI Jakarta, membantu meningkatkan keamanan infrastruktur digital publik."
  },
  {
    title: "Temuan Kerentanan Website Provinsi DIY",
    issuer: "Diskominfo DIY",
    date: "2025",
    category: "Cybersecurity",
    credential: "#",
    image: "/sertifikat/diskominfo_diy.jpeg",
    description: "Apresiasi dari Dinas Komunikasi dan Informatika Provinsi DIY atas penemuan celah keamanan pada sistem informasi pemerintah daerah, berkontribusi pada peningkatan keamanan siber."
  },
  {
    title: "Temuan Kerentanan Website KPI",
    issuer: "Komisi Penyiaran Indonesia",
    date: "2025",
    category: "Cybersecurity",
    credential: "#",
    image: "/sertifikat/kpi.jpeg",
    description: "Sertifikat penghargaan dari Komisi Penyiaran Indonesia atas identifikasi kerentanan pada sistem website KPI, membantu menjaga integritas dan keamanan platform digital lembaga negara."
  },
  {
    title: "Temuan Kerentanan Website KPK",
    issuer: "Komisi Pemberantasan Korupsi",
    date: "2025",
    category: "Cybersecurity",
    credential: "#",
    image: "/sertifikat/kpk.jpeg",
    description: "Penghargaan dari Komisi Pemberantasan Korupsi atas pelaporan responsible disclosure terkait kerentanan keamanan website KPK, mendukung perlindungan sistem informasi lembaga antikorupsi."
  },
  {
    title: "Pelatihan Pengembangan Web dengan Django",
    issuer: "Penyelenggara Pelatihan",
    date: "2025",
    category: "Web Developer",
    credential: "#",
    image: "/sertifikat/sertifikat_pelatihan_django.jpeg",
    description: "Sertifikat kelulusan pelatihan intensif pengembangan aplikasi web menggunakan framework Django, mencakup konsep MVC, ORM, authentication, dan deployment aplikasi Python berbasis web."
  },
];
