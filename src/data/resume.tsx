import { Icons } from "@/components/icons";
import { HomeIcon, Clock, Users } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Yacine Aoui",
  initials: "YA",
  url: "https://yaoui13.github.io",
  location: "Marseille, France",
  locationLink: "https://www.google.com/maps/place/marseille",
  description:
    "Développeur web full-stack en alternance, étudiant à Epitech Marseille. J'aime construire des applications web fiables et soignées.",
  summary:
    "Développeur web full-stack en alternance, je conçois et fais évoluer des applications **en production**, du back-end au front-end. Actuellement chez Jardinier SAP, je développe un **ERP en Ruby on Rails** utilisé en interne et par les clients, ainsi que plusieurs sites **WordPress / PHP** sur-mesure. En parallèle, je poursuis un Master à Epitech où je me forme aussi à la **cybersécurité** (DevSecOps, secure coding). Curieux et autonome, j'aime livrer des produits robustes. À côté du code, je suis quelqu'un de très créatif : écriture de récits, romans et vidéo.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Ruby on Rails", iconUrl: "/skills/rubyonrails.svg" },
    { name: "Symfony", iconUrl: "/skills/symfony.svg" },
    { name: "Node.js", icon: Nodejs },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", iconUrl: "/skills/javascript.svg" },
    { name: "PHP", iconUrl: "/skills/php.svg" },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", iconUrl: "/skills/mongodb.svg" },
    { name: "Docker", icon: Docker },
    { name: "CI/CD", iconUrl: "/skills/cicd.svg" },
    { name: "Git / GitLab", iconUrl: "/skills/gitlab.svg" },
    { name: "Linux", iconUrl: "/skills/linux.svg" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Accueil" }],
  contact: {
    email: "aouiyacine1@gmail.com",
    tel: "+33658267591",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Yaoui13",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yacine-aoui-61255b270/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aouiyacine1@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Jardinier SAP",
      href: "#",
      badges: [],
      location: "Marseille",
      title: "Développeur Web Full-Stack — Alternance",
      logoUrl: "/jardinier-sap.png",
      start: "Octobre 2025",
      end: "Présent",
      description:
        "Développement et maintenance d'un ERP sur-mesure en Ruby on Rails, en production, utilisé à la fois par les équipes internes (tous pôles) et par les clients adhérents (gestion clients, interventions, facturation). Conception de fonctionnalités full-stack : filtres dynamiques, colonnes personnalisées, moteurs d'export et calculs automatisés. Intégration complète du prélèvement SEPA : paiement récurrent, génération des fichiers de mandat XML et interface de gestion/suivi. Développement PHP sur-mesure et maintenance de différents sites WordPress clients. Travail en autonomie au sein d'une équipe de 2 développeurs avec revues de code croisées (Git) ; administration serveur et déploiement via SSH.",
    },
    {
      company: "Site e-commerce — Client",
      href: "#",
      badges: [],
      location: "Freelance",
      title: "Développeur Web Full-Stack",
      logoUrl: "/client-ecommerce.png",
      start: "2026",
      end: "2026",
      description:
        "Conception et développement full-stack d'un site e-commerce pour un client : catalogue, paiement en ligne (Stripe) et pages d'administration. Déploiement automatisé et sécurisé de bout en bout : conteneurisation Docker, pipeline CI/CD, hébergement VPS Hetzner, nom de domaine et DNS chez OVH, emailing transactionnel Brevo. Stack Next.js / React / TypeScript, base PostgreSQL.",
    },
  ],
  education: [
    {
      school: "Epitech Marseille",
      href: "https://www.epitech.eu/",
      degree: "Master of Science — Architecte de Systèmes d'Information",
      logoUrl: "/epitech.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "Le Wagon Marseille",
      href: "https://www.lewagon.com/fr",
      degree: "Développeur Web & Mobile",
      logoUrl: "/lewagon.png",
      start: "2023",
      end: "2023",
    },
    {
      school: "La WAB",
      href: "https://www.la-wab.fr",
      degree: "Développeur WordPress",
      logoUrl: "/lawab.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Lycée La Fourragère",
      href: "#",
      degree: "Baccalauréat ST2S",
      logoUrl: "/education-nationale.png",
      start: "2016",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Plateforme SaaS de gestion du temps",
      href: "#",
      dates: "2025",
      active: true,
      icon: <Clock className="h-16 w-16 text-white/90" />,
      cover: "bg-gradient-to-br from-indigo-500 to-blue-600",
      description:
        "Plateforme SaaS multi-tenant de gestion du temps de travail (pointage, absences, plannings, KPIs) avec contrôle d'accès par rôles (RBAC), authentification JWT / Argon2 et observabilité complète. Back-end Rust (Axum), infrastructure conteneurisée et pipelines CI/CD intégrant un scan de sécurité.",
      technologies: [
        "Rust",
        "Axum",
        "React",
        "TypeScript",
        "Vite",
        "PostgreSQL",
        "Docker",
        "Traefik",
        "Grafana",
        "CI/CD",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Application mobile sociale",
      href: "#",
      dates: "2024",
      active: true,
      icon: <Users className="h-16 w-16 text-white/90" />,
      cover: "bg-gradient-to-br from-rose-500 to-pink-600",
      description:
        "Application mobile de mise en relation sociale développée en équipe et présentée devant un jury.",
      technologies: ["Ruby on Rails", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
