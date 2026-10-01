import { useRef } from "react";
import "./Services.css";

import htmlIcon from "../icons/html.png";
import cssIcon from "../icons/css.png";
import jsIcon from "../icons/javascript.png";
import reactIcon from "../icons/react.png";
import tailwindIcon from "../icons/tailwind.png";

import javaIcon from "../icons/java.png";
import springBootIcon from "../icons/springboot.png";

import mysqlIcon from "../icons/mysql.png";

import gsapIcon from "../icons/gsap.png";
import gitIcon from "../icons/git.png";
import githubIcon from "../icons/github.png";

import useServicesAnimation from "../hooks/useServicesAnimation";

const frontend = [
  {
    name: "HTML5",
    icon: htmlIcon,
    description: "Semantic and accessible web structure",
  },
  {
    name: "CSS3",
    icon: cssIcon,
    description: "Responsive and modern UI styling",
  },
  {
    name: "JavaScript",
    icon: jsIcon,
    description: "Dynamic and interactive web applications",
  },
  {
    name: "React",
    icon: reactIcon,
    description: "Component-based frontend development",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    description: "Fast responsive UI development",
  },
];

const backend = [
  {
    name: "Java",
    icon: javaIcon,
    description: "Object-oriented programming",
  },
  {
    name: "Spring Boot",
    icon: springBootIcon,
    description: "Scalable Java backend applications",
  },
];

const database = [
  {
    name: "MySQL",
    icon: mysqlIcon,
    description: "Relational database and SQL",
  },
];

const tools = [
  {
    name: "GSAP",
    icon: gsapIcon,
    description: "Smooth web animations",
  },
  {
    name: "Git",
    icon: gitIcon,
    description: "Version control",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "Code hosting and collaboration",
  },
];

function TechCard({ tech }) {
  return (
    <div className="technology-card">
      <div className="icon-wrapper">
        <img
          src={tech.icon}
          alt={tech.name}
          className="technology-icon"
        />
      </div>

      <h3>{tech.name}</h3>

      <p>{tech.description}</p>
    </div>
  );
}

function TechCategory({ title, items, className = "" }) {
  return (
    <div className={`tech-category ${className}`}>
      <div className="category-header">
        <span className="category-line"></span>
        <h3>{title}</h3>
        <span className="category-line"></span>
      </div>

      <div className="technology-grid">
        {items.map((tech) => (
          <TechCard
            tech={tech}
            key={tech.name}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const servicesRef = useRef(null);

  useServicesAnimation(servicesRef);

  return (
    <section
      className="services"
      id="services"
      ref={servicesRef}
    >
      {/* Divider */}
      <div className="section-divider"></div>

      {/* Main Heading */}
      <div className="services-header">
        <p className="section-tag">
          MY TECHNOLOGY STACK
        </p>

        <h2>
          Tools I Use to
          <span> Build & Animate</span>
        </h2>

        <p className="section-description">
          Technologies I use to build responsive,
          scalable and interactive web applications.
        </p>
      </div>

      {/* Frontend */}
      <TechCategory
        title="Frontend"
        items={frontend}
        className="frontend-category"
      />

      {/* Backend + Database */}
      <div className="category-row">
        <TechCategory
          title="Backend"
          items={backend}
        />

        <TechCategory
          title="Database"
          items={database}
        />
      </div>

      {/* Tools */}
      <TechCategory
        title="Tools & Animation"
        items={tools}
        className="tools-category"
      />
    </section>
  );
}