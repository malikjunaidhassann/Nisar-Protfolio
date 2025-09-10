"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Software Engineering</span>, I pursued my passion for programming by completing a coding bootcamp. I discovered my love for building mobile apps and have since focused on developing high-quality cross-platform applications using <span className="font-medium">Flutter and React Native</span>.{" "}
        My core stack also includes <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>, with experience in <span className="font-medium">TypeScript and Prisma</span>.{" "}
        I enjoy tackling complex problems and constantly expanding my skill set. I’m currently looking for a <span className="font-medium">full-time position</span> as a <span className="font-medium">Mobile Application Developer</span>.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I love playing video games, watching movies, and hanging out with my dog. I’m also diving into <span className="font-medium">history</span>, <span className="font-medium">philosophy</span>, and learning to play the guitar.
      </p>

    </motion.section>
  );
}
