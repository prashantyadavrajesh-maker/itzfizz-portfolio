import { useRef } from "react";
import heroImg from "../assets/hero.png";
import "../styles/hero.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useScrollAnimation({
    heroRef,
    titleRef,
    imageRef,
    statsRef,
  });

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-content">

        {/* Left Side */}
        <div className="hero-left">
          <h1 className="hero-title" ref={titleRef}>
            WELCOME
            <br />
            <span>ITZFIZZ</span>
          </h1>

          <p className="tech-stack">
            React • Tailwind • GSAP
          </p>

          <h2 className="hero-heading">
            Build Modern Web
            <br />
            Experiences
          </h2>

          <p className="hero-description">
            Creating smooth animations, responsive layouts,
            and interactive user experiences using React,
            GSAP, Tailwind CSS, and JavaScript.
          </p>

          {/* Stats */}
          <div className="stats" ref={statsRef}>
            <div className="stat-card">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>

            <div className="stat-card">
              <h3>120+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>50+</h3>
              <p>Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <img
            ref={imageRef}
            src={heroImg}
            alt="Developer working on laptop"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}