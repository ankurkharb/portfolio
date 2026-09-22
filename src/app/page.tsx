import Hero from "@/components/landing/Hero";
import Experience from "@/components/landing/Experience";
import Projects from "@/components/landing/Projects";
import Github from "@/components/landing/Github";
import Education from "@/components/landing/Education";
import Achievements from "@/components/landing/Achievements";
import { Quote } from "@/components/common/Quote";
import Container from "@/components/common/Container";
import Banner from "@/components/common/Banner";

export default function Home() {
  return (
    <Container className="min-h-screen pt-0 pb-16">
      <Banner />
      <Hero />
      <Experience />
      <Projects />
      <Github />
      <Education />
      <Achievements />
      <Quote quote="Keep swinging. The system that survives is the one that was stress-tested." />
    </Container>
  );
}
