import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  { title: "News Intelligence RAG Pipeline", category: "Data Engineering", tags: ["NewsAPI", "Gemini Embeddings", "Pinecone", "LangChain", "FastAPI"], github: "https://github.com/satrialfata/news-rag-pipeline", demo: null, description: "Sistem Retrieval-Augmented Generation (RAG) yang mengumpulkan artikel berita terbaru dari NewsAPI, mengubahnya menjadi embedding vektor menggunakan Google Gemini Embeddings, menyimpannya di Pinecone Vector Database, dan menyediakan fitur tanya jawab cerdas melalui FastAPI." },
  { title: "Fraud Detection System", category: "Machine Learning", tags: ["Python", "XGBoost", "SMOTE"], github: "#", demo: "#", description: "Model ML untuk mendeteksi transaksi keuangan mencurigakan menggunakan algoritma ensemble." },
  { title: "Network Anomaly Detector", category: "Cybersecurity", tags: ["TensorFlow", "Wireshark", "Kafka"], github: "#", demo: "#", description: "Sistem IDS berbasis ML untuk mendeteksi anomali jaringan secara real-time dengan LSTM." },
  { title: "Sentiment Analysis Dashboard", category: "NLP", tags: ["FastAPI", "React", "BERT"], github: "#", demo: "#", description: "Aplikasi web analisis sentimen teks media sosial dengan visualisasi interaktif." },
  { title: "Customer Segmentation", category: "Data Analysis", tags: ["K-Means", "Plotly", "Pandas"], github: "#", demo: "#", description: "Segmentasi pelanggan menggunakan K-Means dan DBSCAN dengan dashboard visualisasi Plotly." },
  { title: "Vulnerability Scanner CLI", category: "Cybersecurity", tags: ["Go", "CLI", "REST API"], github: "#", demo: null, description: "Tool command-line untuk pemindaian kerentanan aplikasi web secara otomatis." },
];

export default function PortofolioPage() {
  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text)" }}>Portofolio</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Proyek saya</h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Kumpulan proyek di bidang machine learning, analisis data, dan keamanan siber.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-5 rounded-2xl border transition-colors duration-150"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            {/* Category */}
            <span
              className="self-start px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border mb-3"
              style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)", color: "var(--accent)" }}
            >
              {project.category}
            </span>

            <h2 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>{project.title}</h2>
            <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-lg border"
                  style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <a
                href={project.github}
                className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: "var(--muted)" }}
              >
                <GitBranch size={12} strokeWidth={1.8} /> Source
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  <ExternalLink size={12} strokeWidth={1.8} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
