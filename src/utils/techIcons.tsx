import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPlotly,
  SiGo,
  SiRust,
  SiLinux,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiGooglecloud,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiGraphql,
  SiOpenai,
} from "react-icons/si";
import { 
  TbBrandPython,
  TbDatabase,
  TbApi,
  TbTerminal,
  TbShield,
  TbCode,
  TbCloud,
} from "react-icons/tb";
import { DiCode } from "react-icons/di";
import { IconType } from "react-icons";

export const techStackIcons: Record<string, IconType> = {
  // Languages
  "Python": SiPython,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Go": SiGo,
  "Rust": SiRust,
  "Bash": TbTerminal,
  "R": TbCode,
  
  // Frontend
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "TailwindCSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  
  // Backend
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "Django": SiDjango,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "NestJS": SiNodedotjs,
  "GraphQL": SiGraphql,
  
  // ML/AI
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": TbBrandPython,
  "XGBoost": TbBrandPython,
  "SMOTE": TbBrandPython,
  "BERT": TbBrandPython,
  "LSTM": TbBrandPython,
  "K-Means": TbBrandPython,
  "DBSCAN": TbBrandPython,
  
  // Database
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  "MySQL": SiMysql,
  "Pinecone": TbDatabase,
  "SQL": TbDatabase,
  
  // Data Tools
  "Pandas": SiPython,
  "NumPy": SiPython,
  "Plotly": SiPlotly,
  "Matplotlib": TbBrandPython,
  "Apache Spark": TbDatabase,
  "Airflow": TbCode,
  "Kafka": TbDatabase,
  
  // DevOps
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Git": SiGit,
  "GitHub": SiGithub,
  "GitLab": SiGitlab,
  
  // Cloud & Services
  "AWS": TbCloud,
  "Google Cloud": SiGooglecloud,
  "Azure": TbCloud,
  "Vercel": SiVercel,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  
  // AI Services
  "OpenAI": SiOpenai,
  "LangChain": TbCode,
  "Gemini Embeddings": SiGooglecloud,
  "NewsAPI": TbApi,
  
  // Security
  "Kali Linux": SiLinux,
  "Wireshark": TbShield,
  "Metasploit": TbShield,
  "CTF": TbShield,
  "Penetration Testing": TbShield,
  
  // Others
  "CLI": TbTerminal,
  "REST API": TbApi,
};

export function getTechIcon(techName: string): IconType {
  return techStackIcons[techName] || DiCode;
}
