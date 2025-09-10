import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiFlutter } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import port3 from "@/public/4.jpg";
import port2 from "@/public/3.jpg";
import port1 from "@/public/1.jpg";
import port4 from "@/public/2.jpg";
export const links = [ 
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    description:
      "I design and develop high-quality iOS and Android apps that deliver seamless user experiences. I lead the architecture and implementation of scalable, efficient mobile solutions while collaborating closely with cross-functional teams. I mentor junior developers, enforce best coding practices, and optimize app performance for reliability and speed. I manage app deployments and continuously integrate new technologies to enhance functionality. My role ensures that mobile applications meet business goals and user needs with robust, maintainable code.",
    icon: React.createElement(SiFlutter),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    description:
      "As a Full-Stack Developer, you will be responsible for architecting, developing, and maintaining robust, scalable web applications across the entire technology stack. Collaborating closely with product managers, designers, and engineering teams, you will deliver seamless, high-performance solutions that meet business objectives. Your expertise in front-end frameworks and back-end technologies will ensure the development of secure, efficient, and maintainable code. You will play an integral role in API design, database management, and continuous integration processes, adhering to best practices in software engineering and agile methodologies. Strong communication skills and a commitment to quality are essential to thrive in this role",
    icon: React.createElement(SiFlutter),
    date: "January 2018 - February 2021",
  },
  {
    title: "Software Engineer (Backend + React.js)",
    description:
      "As a Software Engineer, you will design, build, and maintain scalable backend systems while also contributing to front-end development using React.js. You’ll work across the full software development lifecycle—from architecture and database design to API integration and user interface development. Your backend expertise, combined with modern JavaScript front-end skills, will help deliver robust, high-performance web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2015 - March 2018",
  },
] as const;

export const projectsData = [
 {
  title: "Alfalah Quran App",
  description:
    "Alfalah Quran App is a modern Islamic lifestyle app designed to support Muslims in their daily spiritual journey. It offers features like Azan & prayer time alerts, Qibla direction, Quran with Urdu translation, Islamic calendars, Hadith collections, and more. I contributed to building a user-friendly, feature-rich interface using React Native, ensuring seamless performance across devices and a meaningful user experience for all age groups.",
  tags: ["React Native", "Flutter", "Firebase", "Islamic Apps"],
  imageUrl: port1,
  appleLink: "https://apps.apple.com/us/app/alfalah-quran-athan-prayer/id1631108236", 
  androidLink: "https://play.google.com/store/apps/details?id=com.appclick.alfalah",
},

  {
    title: "FamilyTime – The Ultimate Parental Control App",
    description:
      "FamilyTime is a smart parental control app that helps parents manage their child’s screen time, monitor digital activity, and ensure their safety online and offline. With powerful features and a user-friendly interface, it supports a healthy digital lifestyle for families.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: port4,
       appleLink: "https://apps.apple.com/us/app/parental-control-familytime/id981066103", 
    androidLink: "https://play.google.com/store/apps/details?id=io.familytime.dashboard&hl=en",
  },
  {
    title: "Quickwash – Mobile Car Wash Service",
    description:
      " Bring the shine, right on time.Quickwash delivers high-quality car cleaning to your doorstep—no lines, no waiting, no hassle. Whether you're at home, work, or anywhere in between, our trained professionals come to you with eco-friendly tools and top-tier service.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: port3,
       appleLink: "https://apps.apple.com/us/app/quickwash-the-mobile-carwash/id6449211789", 
    androidLink: "https://play.google.com/store/apps/details?id=com.otsapp.live&hl=en",
  },
  {
    title: "Card Reader & Writer",
    description:
      "Smart. Simple. Seamless NFC tools at your fingertips.Unlock the full potential of NFC technology with one easy-to-use app. NFC Tags: Card Reader & Writer lets you read, write, scan, and manage NFC tags effortlessly. Whether you're connecting to Wi-Fi, launching apps, or automating tasks, do it all with a single tap",
    tags: ["React", "Node.js", "MongoDb", "Tailwind", "Redux"],
    imageUrl: port2,
       appleLink: "https://apps.apple.com/us/app/nfc-reader-scanner%E3%85%A4/id6738284544", 
    androidLink: "https://play.google.com/store/apps/details?id=com.smartwidgetlabs.nfctools&hl=en",
  },
] as const;

export const skillsData = [
  "Dart",
  "Flutter",
  "Android",
  "IOS",
  "React",
  "Reat Native",
  "Node.js",
  "Git",
  "Express",
  "Prisma",
  "MongoDB",
  "Bloc",
  "GraphQL",
  "Firebase",
  "Push Notifications",
  "Google SDK",
  "Python",
  "Django",
  "Payment Method",
] as const;
