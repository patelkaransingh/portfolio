"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Conatact from "@/components/Conatact";
import Footer from "@/components/Footer";
import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";

export default function Home() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <>
      <div className={`${isDark ? "bg-(--darkTheme) text-white" : ""}`}>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Conatact />
        <Footer />
      </div>
    </>
  );
}
