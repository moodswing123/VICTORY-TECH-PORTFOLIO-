// Signal Noir: editable content and project configuration for the Victory Tech portfolio.
import type { LucideIcon } from "lucide-react";
import { Bot, Braces, Download, Gamepad2, Globe2, MessageSquareText, Server, Sparkles, Wrench, Zap } from "lucide-react";

export type ProjectCategory = "Web Applications" | "Bots" | "Games" | "Tools" | "Messaging";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  label: string;
  description: string;
  tags: string[];
  status: string;
  action: string;
  url?: string;
  version?: string;
  installGuide?: string;
  icon: LucideIcon;
  accent: "lime" | "cyan" | "amber" | "violet";
};

export const projects: Project[] = [
  {
    id: "vcf-generator",
    name: "Victory Tech VCF Generator",
    category: "Tools",
    label: "Web tool",
    description: "A web-based VCF generator designed to help users create and manage contact files efficiently through a simple and accessible interface.",
    tags: ["Web", "Utility", "Vercel"],
    status: "Live build",
    action: "Launch project",
    url: "https://victory-tech-vcf.vercel.app/",
    icon: Braces,
    accent: "lime",
  },
  {
    id: "jjk-game",
    name: "JJK Game",
    category: "Games",
    label: "Game / bot",
    description: "An interactive Jujutsu Kaisen-inspired game featuring player progression, battles, challenges, characters, and engaging game mechanics.",
    tags: ["Telegram", "Game systems", "Progression"],
    status: "Community beta",
    action: "Join JJK game",
    url: "https://t.me/+SbIK5NQNT4s3ZWNk",
    icon: Gamepad2,
    accent: "violet",
  },
  {
    id: "cipher-sms",
    name: "Cipher SMS",
    category: "Messaging",
    label: "SMS platform",
    description: "A modern SMS-related platform built as part of the Victory Tech ecosystem, focused on accessible messaging services and digital communication tools.",
    tags: ["Messaging", "Platform", "Vercel"],
    status: "Live build",
    action: "Visit Cipher SMS",
    url: "https://cipher-sms.vercel.app/",
    icon: MessageSquareText,
    accent: "cyan",
  },
  {
    id: "whatsapp-bot",
    name: "Victory Tech WhatsApp Bot",
    category: "Bots",
    label: "Automation / bot",
    description: "A WhatsApp automation project built around messaging features, bot commands, interactive functionality, and automated digital services.",
    tags: ["WhatsApp", "Automation", "Commands"],
    status: "Active development",
    action: "Explore project",
    url: "https://wa.me/2347038253086",
    icon: Bot,
    accent: "amber",
  },
  {
    id: "tiktok-video-downloader",
    name: "TikTok Video Downloader",
    category: "Tools",
    label: "Video utility",
    description: "A practical video utility for working with TikTok content through a focused, easy-to-use web experience.",
    tags: ["TikTok", "Video", "Utility"],
    status: "Live link",
    action: "Open TikTok Downloader",
    url: "https://tiktok-downloader-two-psi.vercel.app/",
    icon: Download,
    accent: "cyan",
  },
  {
    id: "lawliet-gpt",
    name: "Lawliet GPT",
    category: "Web Applications",
    label: "AI chat platform",
    description: "An AI chat platform for continuing conversations through a focused web interface with account-based access.",
    tags: ["AI", "Chat", "Web app"],
    status: "Live build",
    action: "Open Lawliet GPT",
    url: "https://lawliet-lilac.vercel.app/",
    icon: Sparkles,
    accent: "violet",
  },
  {
    id: "session-id-generator",
    name: "Session ID Generator",
    category: "Tools",
    label: "Developer utility",
    description: "A focused developer utility for generating session identifiers through a lightweight web interface.",
    tags: ["Sessions", "Developer tool", "Web app"],
    status: "Live build",
    action: "Open Session Generator",
    url: "https://session-generator-delta.vercel.app/",
    icon: Braces,
    accent: "amber",
  },
  {
    id: "lawliet-gpt-android",
    name: "Lawliet GPT Android App",
    category: "Tools",
    label: "Android app",
    description: "The Android companion app for Lawliet GPT, available as a direct APK download for mobile use.",
    tags: ["Android", "AI", "APK"],
    status: "APK release",
    action: "Download APK",
    url: "https://www.mediafire.com/file/crbwue5he6p5qdl/lawlietgpt-1.0.1.apk/file",
    version: "1.0.1",
    installGuide: "Android: download the APK, then allow Install unknown apps for your browser or file manager in Settings → Security before opening it.",
    icon: Download,
    accent: "violet",
  },
];

export const technologyGroups = [
  { title: "Languages", items: ["JavaScript", "Python", "HTML", "CSS"], icon: Braces },
  { title: "Platforms", items: ["Node.js", "PostgreSQL", "APIs", "Vercel", "GitHub"], icon: Server },
  { title: "Build areas", items: ["Web development", "Bot development", "Automation", "Android development"], icon: Wrench },
  { title: "Integrations", items: ["Telegram", "WhatsApp", "Messaging systems"], icon: Zap },
];

export const contactLinks = [
  { label: "Email", value: "patrickvictory170@gmail.com", href: "mailto:patrickvictory170@gmail.com" },
  { label: "Telegram", value: "@victory_is_h1m", href: "https://t.me/victory_is_h1m" },
  { label: "WhatsApp", value: "+234 703 825 3086", href: "https://wa.me/2347038253086" },
  { label: "GitHub", value: "github.com/moodswing123", href: "https://github.com/moodswing123" },
  { label: "WA channel", value: "Victory Tech channel", href: "https://whatsapp.com/channel/0029VbD3gLiAzNbpaG3Z2E3x" },
];

export const futureCards = [
  { label: "Coming soon", title: "A new useful layer", copy: "A future tool will land here when the idea is ready to ship.", icon: Globe2 },
  { label: "In development", title: "Systems in motion", copy: "Automation, messaging, and platform work currently taking shape.", icon: Bot },
  { label: "Future project", title: "Room for the next idea", copy: "This slot stays editable for the next Victory Tech experiment.", icon: Gamepad2 },
];

export const stats = [
  { value: "04", label: "Projects created" },
  { value: "14+", label: "Technologies used" },
  { value: "03", label: "Platforms built" },
  { value: "∞", label: "Projects in development" },
];
