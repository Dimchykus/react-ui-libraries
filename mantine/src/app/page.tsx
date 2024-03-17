"use client";

import { Container } from "@mantine/core";
import About from "../components/about";
import Hero from "../components/hero/index";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Experience from "../components/experience";
import LetsTalk from "../components/LestTalk";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Skills />
      </Container>
      <Experience />
      <Container>
        <About />
      </Container>
      <Projects />
      <Container>
        <LetsTalk />
      </Container>
    </main>
  );
}
