import "./Work.css";

import heroImg from "../assets/hero.png";
import foodImg from "../assets/Food.jpg";
import collageImg from "../assets/Collage.png";

const projects = [
  {
    title: "ITZFIZZ Website",
    category: "Frontend • Animation",
    image: heroImg,
    description:
      "A modern responsive website featuring GSAP-powered scroll animations, interactive UI and a smooth developer-focused experience.",
    tech: "React • GSAP • Tailwind CSS • JavaScript",
  },

  {
    title: "Food Delivery",
    category: "Web Application",
    image: foodImg,
    description:
      "Responsive food ordering interface with product browsing, cart management and modern React UI.",
    tech: "React • JavaScript • Bootstrap",
  },

  {
    title: "Smart Campus",
    category: "Web Platform",
    image: collageImg,
    description:
      "A smart campus sustainability platform designed for digital management, sustainability tracking and real-world campus use cases.",
    tech: "React • Java • MySQL",
  },
];

export default function Work() {
  return (
    <section className="work" id="work">

      {/* Section Header */}
      <div className="work-header">
        <p className="work-tag">SELECTED WORK</p>

        <h2>
          Projects I’ve <span>Built</span>
        </h2>

        <p>
          Practical projects focused on real-world problems,
          clean interfaces and scalable technology.
        </p>
      </div>

      {/* Project Cards */}
      <div className="work-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.title}
          >

            {/* Project Number */}
            <div className="project-number">
              0{index + 1}
            </div>

            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} project`}
                className="project-image"
              />
            )}

            {/* Category */}
            <p className="project-category">
              {project.category}
            </p>

            {/* Title */}
            <h3>{project.title}</h3>

            {/* Description */}
            <p className="project-description">
              {project.description}
            </p>

            {/* Technologies */}
            <p className="project-tech">
              {project.tech}
            </p>

            {/* Button */}
            <button className="project-btn">
              View Project →
            </button>

          </article>
        ))}
      </div>
    </section>
  );
}