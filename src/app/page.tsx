"use client";

import { useEffect } from "react";
import ProgressBar from "@/components/ProgressBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionEditorial from "@/components/SectionEditorial";
import SectionEnvironments from "@/components/SectionEnvironments";
import SectionDefinition from "@/components/SectionDefinition";
import SectionArchitecture from "@/components/SectionArchitecture";
import SectionFlow from "@/components/SectionFlow";
import SectionManifesto from "@/components/SectionManifesto";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <div className="noise" aria-hidden="true" />
      <ProgressBar />
      <Navigation />

      <main id="main">
        <Hero />
        <SectionEditorial />
        <SectionEnvironments />
        <SectionDefinition />
        <SectionArchitecture />
        <SectionFlow />
        <SectionManifesto />
        <SectionContact />
      </main>

      <Footer />
    </>
  );
}
