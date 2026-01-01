// src/assets/projectsData.jsx
import threatImg from '../../assets/threat_project.png';
import hakimhubImg from '../../assets/hakimhub_project.png';

const projectsData = [
  {
    id: 1,
    title: "Threat Detection in Spoken Amharic Language",
    duration: "Sep 2023 – Jun 2024",
    description: [
      "Built a real-time system to classify Amharic audio into threat vs non-threat using NLP.",
      "Applied audio data augmentation (time stretching, pitch shifting, noise addition).",
      "Extracted MFCCs, Chroma, and Zero-Crossing Rate features.",
      "Evaluated CNN and RNN models with standard classification metrics."
    ],
    image: threatImg,
    liveLink: "https://amharic-language-threat-prediction.vercel.app/"
  },
  {
    id: 2,
    title: "HakimHub – Backend Developer",
    duration: "Mar 2023 – Jun 2023",
    description: [
      "Developed backend features for a hospital recommendation platform.",
      "Extracted disease information from free-text symptom inputs using rule-based NLP.",
      "Implemented 18% of backend endpoints in ASP.NET Core.",
      "Handled real-time hospital availability and query processing."
    ],
    image: hakimhubImg,
    liveLink: "https://hakimhub.app/"
  }
];

export default projectsData;
