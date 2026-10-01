import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-indicator">

      <a
        href="#home"
        className={activeSection === "home" ? "active" : ""}
      >
        <span>01</span>
        <small>Home</small>
      </a>

      <a
        href="#services"
        className={activeSection === "services" ? "active" : ""}
      >
        <span>02</span>
        <small>Stack</small>
      </a>

      <div className="indicator-line"></div>

    </div>
  );
}