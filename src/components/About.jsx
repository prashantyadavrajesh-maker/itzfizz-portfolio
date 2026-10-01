import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Left */}
        <div className="about-left">
          <p className="about-tag">ABOUT ME</p>

          <h2>
            Building ideas into
            <span> real experiences.</span>
          </h2>

          <p className="about-text">
            I am a passionate developer focused on creating modern,
            responsive and interactive web experiences. I enjoy
            turning ideas into clean interfaces and smooth digital
            products.
          </p>

          <p className="about-text">
            My focus is on React, JavaScript, GSAP, Tailwind CSS,
            backend development and problem solving.
          </p>

          <div className="about-stats">

            <div className="about-box">
              <h3>150+</h3>
              <p>DSA Problems</p>
            </div>

            <div className="about-box">
              <h3>5+</h3>
              <p>Projects</p>
            </div>

            <div className="about-box">
              <h3>Java</h3>
              <p>Backend</p>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="about-right">

          <div className="about-card">
            <span className="card-number">01</span>
            <h3>Frontend</h3>
            <p>
              React, JavaScript, responsive UI and
              smooth GSAP animations.
            </p>
          </div>

          <div className="about-card">
            <span className="card-number">02</span>
            <h3>Backend</h3>
            <p>
              Java, Spring Boot, APIs and database
              driven applications.
            </p>
          </div>

          <div className="about-card">
            <span className="card-number">03</span>
            <h3>Problem Solving</h3>
            <p>
              DSA, logical thinking and building
              practical solutions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}