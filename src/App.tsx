import { Linkedin, Github, Mail, Download } from "lucide-react";
import "./styles.css";

export default function App() {
  const projects = [
    {
      title: "Bank Loan Risk Analysis Dashboard",
      tools: "SQL Server • Power BI",
      description:
        "Analyzed bank loan default risk using SQL queries to calculate key metrics such as total loans, default rate, and customer risk segments.",
      github: "https://github.com/MoHossam74/Bank-Loan-Risk-Analysis",
      image: "/Loan.png",
    },
    {
      title: "Customer Churn Analysis Dashboard",
      tools: "Excel • Power BI",
      description:
        "Analyzed customer churn data to understand the main factors affecting retention and identify patterns in customer behavior.",
      github: "https://github.com/MoHossam74/customer-churn-analysis",
      image: "/Churn.png",
    },
    {
      title: "IBM HR Analytics – Employee Attrition Dashboard",
      tools: "Excel • Power BI",
      description:
        "Created an HR analytics dashboard to explore attrition across departments, overtime, age groups, and employee profiles.",
      github: "https://github.com/MoHossam74/IBM-Project",
      image: "/HR.png",
    },
    {
      title: "Data Professional Survey Breakdown",
      tools: "Power BI • Excel",
      description:
        "Built a dashboard from survey data to analyze salaries, job titles, technologies, and satisfaction levels across data professionals.",
      github: "https://github.com/MoHossam74/PowerBI-Project",
      image: "/Survey.png",
    },
  ];

  const skills = [
    "Excel",
    "SQL",
    "Power BI",
    "Python",
    "Pandas",
    "DAX",
    "SQL Server",
    "Data Cleaning",
    "Data Visualization",
    "GitHub",
  ];

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="container navbar-inner">
          <div>
            <h1 className="brand-name">Mohammed Hossam</h1>
            <p className="brand-subtitle">Data Analyst Portfolio</p>
          </div>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-badge">
              Available for Data Analyst opportunities
            </p>

            <h2 className="hero-title">
              Turning data into <span>dashboards</span>, insights, and business
              value.
            </h2>

            <p className="hero-description">
              I am a Data Analyst focused on Excel, SQL, Power BI, and Python. I
              build dashboards, analyze trends, clean data, and present insights
              that help businesses make clearer decisions.
            </p>
            <div className="hero-buttons">
              <a
                href="https://www.linkedin.com/in/mohammedhossam74/"
                target="_blank"
                rel="noreferrer"
                className="hero-btn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href="https://github.com/MoHossam74"
                target="_blank"
                rel="noreferrer"
                className="hero-btn"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="mailto:mohammedhossam.data@gmail.com"
                className="hero-btn"
              >
                <Mail size={18} />
                Email
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-btn"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="/profile.png"
              alt="Mohammed Hossam"
              className="hero-image"
            />
          </div>
        </section>

        <section id="about" className="section-block">
          <h3 className="section-title">About Me</h3>
          <div className="glass-card">
            <p className="section-text">
              I am building my career in data analysis through hands-on projects
              that combine business thinking with technical tools. My work
              focuses on cleaning and validating data, analyzing datasets,
              building interactive dashboards, and presenting insights in a
              clear way. I enjoy creating portfolio projects that show practical
              business value and strong storytelling with data.
            </p>
          </div>
        </section>

        <section id="skills" className="section-block">
          <h3 className="section-title">Skills</h3>
          <div className="skills-wrap">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <h3 className="section-title">Projects</h3>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <p className="project-tools">{project.tools}</p>

                <h4 className="project-title">{project.title}</h4>

                <p className="project-description">{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-section">
          <h3 className="section-title">Contact</h3>
          <div className="glass-card">
            <p className="section-text">
              Email:{" "}
              <a
                href="mailto:mohammedhossam.data@gmail.com"
                className="contact-link"
              >
                mohammedhossam.data@gmail.com
              </a>
            </p>

            <p className="section-text">
              Phone:{" "}
              <a href="tel:+201019666003" className="contact-link">
                +20 101 966 6003
              </a>
            </p>

            <p className="section-text">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mohammedhossam74/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                linkedin.com/in/mohammedhossam74
              </a>
            </p>

            <p className="section-text">
              GitHub:{" "}
              <a
                href="https://github.com/MoHossam74"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                github.com/MoHossam74
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
