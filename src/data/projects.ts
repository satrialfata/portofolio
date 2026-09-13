export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  github: string;
  demo: string | null;
  overview: string;
  role?: string;
  features: string[];
  implementation?: string;
  challenges?: string;
  outcome?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "news-intelligence-rag-pipeline",
    title: "News Intelligence RAG Pipeline",
    category: "Data Engineering",
    year: "2025",
    image: "/projects/news-rag.png",
    tags: ["NewsAPI", "Gemini Embeddings", "Pinecone", "LangChain", "FastAPI"],
    github: "https://github.com/satrialfata/news-rag-pipeline",
    demo: null,
    description: "Sistem Retrieval-Augmented Generation (RAG) yang mengumpulkan artikel berita terbaru dari NewsAPI, mengubahnya menjadi embedding vektor menggunakan Google Gemini Embeddings, menyimpannya di Pinecone Vector Database, dan menyediakan fitur tanya jawab cerdas melalui FastAPI.",
    overview: "News Intelligence RAG Pipeline adalah sistem pipeline data end-to-end yang dirancang untuk mengumpulkan, memproses, dan mengindeks artikel berita secara real-time. Sistem ini memanfaatkan teknik Retrieval-Augmented Generation (RAG) untuk memungkinkan pengguna melakukan tanya jawab cerdas terhadap korpus berita yang terus diperbarui. Pipeline ini mengintegrasikan NewsAPI untuk pengumpulan data, Google Gemini untuk embedding vektor, Pinecone sebagai vector database, dan LangChain untuk orchestration.",
    role: "Full-stack Data Engineer",
    features: [
      "Real-time news data collection dari NewsAPI",
      "Text preprocessing dan cleaning pipeline",
      "Vector embedding menggunakan Google Gemini Embeddings",
      "Vector storage dan indexing di Pinecone",
      "Question-answering interface dengan LangChain",
      "RESTful API dengan FastAPI",
      "Semantic search dan retrieval",
      "Automated pipeline scheduling"
    ],
    implementation: "Pipeline dibangun dengan Python, menggunakan FastAPI sebagai backend framework. Data berita dikumpulkan dari NewsAPI secara periodik, diproses melalui cleaning pipeline, kemudian diubah menjadi vector embeddings menggunakan Google Gemini API. Vector disimpan di Pinecone untuk efficient similarity search. LangChain digunakan untuk orchestrate RAG workflow, menggabungkan retrieved context dengan generative model untuk menghasilkan jawaban yang akurat dan contextual.",
    outcome: "Sistem berhasil memproses ribuan artikel berita dan menyediakan interface tanya jawab dengan response time kurang dari 2 detik. Pipeline dapat di-scale untuk handle multiple news sources dan kategori berita yang berbeda.",
    screenshots: []
  },
  {
    slug: "fraud-detection-system",
    title: "Fraud Detection System",
    category: "Machine Learning",
    year: "2024",
    image: "/projects/fraud-detection.png",
    tags: ["Python", "XGBoost", "SMOTE"],
    github: "#",
    demo: "#",
    description: "Model ML untuk mendeteksi transaksi keuangan mencurigakan menggunakan algoritma ensemble.",
    overview: "Sistem deteksi fraud berbasis machine learning yang dirancang untuk mengidentifikasi transaksi keuangan mencurigakan secara real-time. Sistem ini menggunakan ensemble learning dengan XGBoost untuk mencapai akurasi tinggi dalam mendeteksi pola transaksi yang tidak normal, dengan memanfaatkan teknik SMOTE untuk mengatasi class imbalance.",
    role: "Machine Learning Engineer",
    features: [
      "Anomaly detection pada transaksi keuangan",
      "Real-time fraud scoring",
      "Handling imbalanced dataset dengan SMOTE",
      "Feature engineering dari transaction data",
      "Model evaluation dengan multiple metrics",
      "Explainable AI untuk interpretasi prediksi"
    ],
    implementation: "Model dibangun menggunakan XGBoost classifier dengan extensive feature engineering. SMOTE (Synthetic Minority Over-sampling Technique) digunakan untuk mengatasi ketidakseimbangan data antara transaksi normal dan fraud. Model di-tune menggunakan cross-validation dan hyperparameter optimization untuk mencapai performa optimal.",
    screenshots: []
  },
  {
    slug: "network-anomaly-detector",
    title: "Network Anomaly Detector",
    category: "Cybersecurity",
    year: "2024",
    image: "/projects/network-anomaly.png",
    tags: ["TensorFlow", "Wireshark", "Kafka"],
    github: "#",
    demo: "#",
    description: "Sistem IDS berbasis ML untuk mendeteksi anomali jaringan secara real-time dengan LSTM.",
    overview: "Intrusion Detection System (IDS) berbasis deep learning yang menggunakan LSTM neural network untuk mendeteksi anomali traffic jaringan secara real-time. Sistem ini menganalisis packet data dari Wireshark, memproses streaming data menggunakan Kafka, dan mengidentifikasi pola serangan atau aktivitas mencurigakan pada jaringan.",
    role: "Security Engineer & ML Developer",
    features: [
      "Real-time network traffic monitoring",
      "LSTM-based anomaly detection",
      "Streaming data processing dengan Kafka",
      "Packet analysis dari Wireshark",
      "Alert system untuk suspicious activity",
      "Dashboard monitoring network health",
      "Support untuk multiple attack patterns"
    ],
    implementation: "Sistem menggunakan TensorFlow untuk membangun LSTM model yang dapat mendeteksi sequence patterns dalam network traffic. Wireshark digunakan untuk capture packet data, yang kemudian di-stream melalui Kafka untuk real-time processing. Model di-train menggunakan dataset yang berisi normal traffic dan berbagai jenis network attacks.",
    screenshots: []
  },
  {
    slug: "sentiment-analysis-dashboard",
    title: "Sentiment Analysis Dashboard",
    category: "NLP",
    year: "2024",
    image: "/projects/sentiment-analysis.png",
    tags: ["FastAPI", "React", "BERT"],
    github: "#",
    demo: "#",
    description: "Aplikasi web analisis sentimen teks media sosial dengan visualisasi interaktif.",
    overview: "Dashboard web interaktif untuk menganalisis sentimen dari teks media sosial menggunakan model BERT pre-trained. Aplikasi ini memungkinkan pengguna untuk menganalisis sentimen tweet, komentar, atau review secara batch maupun real-time, dengan visualisasi yang intuitif untuk memahami distribusi sentimen.",
    role: "Full-stack Developer & NLP Engineer",
    features: [
      "Sentiment classification (positive, negative, neutral)",
      "Batch processing untuk multiple texts",
      "Real-time sentiment analysis",
      "Interactive data visualization",
      "Sentiment trend analysis",
      "Export hasil analisis",
      "API endpoint untuk integrasi"
    ],
    implementation: "Backend dibangun dengan FastAPI yang menyediakan RESTful API untuk sentiment analysis. Model BERT fine-tuned digunakan untuk classification task. Frontend React menyediakan interface yang user-friendly dengan charts dan visualisasi menggunakan library seperti Chart.js atau Recharts.",
    screenshots: []
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    category: "Data Analysis",
    year: "2024",
    image: "/projects/customer-segmentation.png",
    tags: ["K-Means", "Plotly", "Pandas"],
    github: "#",
    demo: "#",
    description: "Segmentasi pelanggan menggunakan K-Means dan DBSCAN dengan dashboard visualisasi Plotly.",
    overview: "Sistem analisis segmentasi pelanggan yang menggunakan unsupervised learning untuk mengidentifikasi pola dan grup pelanggan berdasarkan behavior dan karakteristik mereka. Menggunakan K-Means clustering dan DBSCAN untuk menemukan segment pelanggan yang optimal, dilengkapi dengan dashboard visualisasi interaktif menggunakan Plotly.",
    role: "Data Analyst",
    features: [
      "Customer clustering dengan K-Means",
      "Density-based clustering dengan DBSCAN",
      "Optimal cluster number determination",
      "Interactive visualization dashboard",
      "Customer profile analysis per segment",
      "RFM (Recency, Frequency, Monetary) analysis",
      "Export segmentation results"
    ],
    implementation: "Menggunakan Pandas untuk data preprocessing dan feature engineering. K-Means clustering digunakan sebagai metode utama dengan elbow method untuk menentukan jumlah cluster optimal. DBSCAN digunakan untuk identifikasi outliers. Plotly digunakan untuk membuat visualisasi interaktif yang membantu stakeholder memahami karakteristik setiap segment.",
    screenshots: []
  },
  {
    slug: "vulnerability-scanner-cli",
    title: "Vulnerability Scanner CLI",
    category: "Cybersecurity",
    year: "2024",
    image: "/projects/vuln-scanner.png",
    tags: ["Go", "CLI", "REST API"],
    github: "#",
    demo: null,
    description: "Tool command-line untuk pemindaian kerentanan aplikasi web secara otomatis.",
    overview: "Command-line tool yang dibangun dengan Go untuk melakukan automated vulnerability scanning pada web applications. Tool ini dapat mendeteksi common vulnerabilities seperti SQL injection, XSS, CSRF, dan security misconfigurations. Dirancang untuk di-integrate ke dalam CI/CD pipeline untuk security testing.",
    role: "Security Tools Developer",
    features: [
      "Automated vulnerability scanning",
      "SQL injection detection",
      "XSS (Cross-Site Scripting) detection",
      "CSRF vulnerability check",
      "SSL/TLS configuration analysis",
      "Security headers validation",
      "Detailed reporting dengan severity levels",
      "CI/CD integration ready"
    ],
    implementation: "Tool dibangun menggunakan Go untuk performance dan portability. Menggunakan concurrent scanning untuk efficiency. Tool mengirimkan berbagai test payloads dan menganalisis response untuk mendeteksi vulnerabilities. Output dapat berupa JSON untuk programmatic processing atau human-readable report.",
    screenshots: []
  }
];
