export type ToolCategory =
  | "Development"
  | "Data Science"
  | "AI / Machine Learning"
  | "Productivity";

export type Tool = {
  name: string;
  description: string;
  category: ToolCategory;
  website: string;
  docs?: string;
  download?: string;
  github?: string;
  logo?: string;
};

export const tools: Tool[] = [
  {
    name: "VS Code",
    description: "Code editor ringan dengan ekstensi yang sangat lengkap.",
    category: "Development",
    website: "https://code.visualstudio.com/",
    docs: "https://code.visualstudio.com/docs",
    download: "https://code.visualstudio.com/download",
    logo: "/tools/vscode.svg",
  },
  {
    name: "Git",
    description: "Distributed version control untuk mengelola riwayat kode.",
    category: "Development",
    website: "https://git-scm.com/",
    docs: "https://git-scm.com/doc",
    download: "https://git-scm.com/downloads",
    github: "https://github.com/git/git",
    logo: "/tools/git.svg",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime untuk backend dan tooling modern.",
    category: "Development",
    website: "https://nodejs.org/",
    docs: "https://nodejs.org/docs/latest/api/",
    download: "https://nodejs.org/en/download",
    logo: "/tools/nodedotjs.svg",
  },
  {
    name: "Docker",
    description: "Container platform untuk membangun dan menjalankan aplikasi secara konsisten.",
    category: "Development",
    website: "https://www.docker.com/",
    docs: "https://docs.docker.com/",
    download: "https://www.docker.com/products/docker-desktop/",
    github: "https://github.com/docker",
    logo: "/tools/docker.svg",
  },
  {
    name: "Laragon",
    description: "Local development environment untuk PHP, Laravel, dan MySQL di Windows.",
    category: "Development",
    website: "https://laragon.org/",
    docs: "https://laragon.org/docs/",
    download: "https://laragon.org/download/",
    logo: "/tools/laragon.svg",
  },
  {
    name: "Python",
    description: "Bahasa pemrograman utama untuk Data Science, AI, automation, dan backend.",
    category: "Data Science",
    website: "https://www.python.org/",
    docs: "https://docs.python.org/3/",
    download: "https://www.python.org/downloads/",
    github: "https://github.com/python/cpython",
    logo: "/tools/python.svg",
  },
  {
    name: "R",
    description: "Bahasa untuk statistik, analisis data, dan visualisasi.",
    category: "Data Science",
    website: "https://www.r-project.org/",
    docs: "https://cran.r-project.org/manuals.html",
    download: "https://cran.r-project.org/",
    logo: "/tools/r.svg",
  },
  {
    name: "RStudio",
    description: "IDE populer untuk mengembangkan project di R.",
    category: "Data Science",
    website: "https://posit.co/products/open-source/rstudio/",
    docs: "https://docs.posit.co/ide/user/",
    download: "https://posit.co/download/rstudio-desktop/",
    logo: "/tools/rstudioide.svg",
  },
  {
    name: "Jupyter",
    description: "Notebook interaktif untuk eksplorasi data dan dokumentasi kode.",
    category: "Data Science",
    website: "https://jupyter.org/",
    docs: "https://jupyter.org/documentation",
    download: "https://jupyter.org/install",
    github: "https://github.com/jupyter",
    logo: "/tools/jupyter.svg",
  },
  {
    name: "MySQL",
    description: "Relational database yang banyak dipakai di web application.",
    category: "Data Science",
    website: "https://www.mysql.com/",
    docs: "https://dev.mysql.com/doc/",
    download: "https://dev.mysql.com/downloads/mysql/",
    logo: "/tools/mysql.svg",
  },
  {
    name: "PostgreSQL",
    description: "Database relasional open source yang kuat dan fleksibel.",
    category: "Data Science",
    website: "https://www.postgresql.org/",
    docs: "https://www.postgresql.org/docs/",
    download: "https://www.postgresql.org/download/",
    github: "https://github.com/postgres/postgres",
    logo: "/tools/postgresql.svg",
  },
  {
    name: "PyTorch",
    description: "Deep learning framework yang fleksibel untuk riset dan produksi.",
    category: "AI / Machine Learning",
    website: "https://pytorch.org/",
    docs: "https://pytorch.org/docs/stable/",
    download: "https://pytorch.org/get-started/locally/",
    github: "https://github.com/pytorch/pytorch",
    logo: "/tools/pytorch.svg",
  },
  {
    name: "TensorFlow",
    description: "Platform machine learning end-to-end dari Google.",
    category: "AI / Machine Learning",
    website: "https://www.tensorflow.org/",
    docs: "https://www.tensorflow.org/guide",
    download: "https://www.tensorflow.org/install",
    github: "https://github.com/tensorflow/tensorflow",
    logo: "/tools/tensorflow.svg",
  },
  {
    name: "Ollama",
    description: "Jalankan model LLM lokal dengan mudah di komputer sendiri.",
    category: "AI / Machine Learning",
    website: "https://ollama.com/",
    docs: "https://docs.ollama.com/",
    download: "https://ollama.com/download",
    github: "https://github.com/ollama/ollama",
    logo: "/tools/ollama.svg",
  },
  {
    name: "Ultralytics",
    description: "Framework YOLO untuk object detection dan computer vision.",
    category: "AI / Machine Learning",
    website: "https://www.ultralytics.com/",
    docs: "https://docs.ultralytics.com/",
    github: "https://github.com/ultralytics/ultralytics",
    logo: "/tools/ultralytics.svg",
  },
  {
    name: "Google Colab",
    description: "Notebook cloud gratis dengan akses GPU untuk experiment machine learning.",
    category: "AI / Machine Learning",
    website: "https://colab.research.google.com/",
    docs: "https://colab.research.google.com/notebooks/intro.ipynb",
    logo: "/tools/googlecolab.svg",
  },
  {
    name: "Microsoft Office 365",
    description:
      "Productivity suite yang mencakup aplikasi seperti Word, Excel, PowerPoint, dan layanan Microsoft lainnya.",
    category: "Productivity",
    website: "https://www.microsoft.com/microsoft-365",
    docs: "https://learn.microsoft.com/en-us/microsoft-365/",
    download: "https://pixeldrain.com/u/yLhscNhZ",
    logo: "/tools/microsoft365.svg",
  },
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  "Development",
  "Data Science",
  "AI / Machine Learning",
  "Productivity",
];
