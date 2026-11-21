import './App.css'

const App = () => {
  return (

    <>

      <div className="container">

        <div className="card">

          <section className="hero">
            <h1>Precious Emmanuel O.</h1>

            <div className="title">
              <h2>Junior Frontend Developer</h2>
            </div>

            <div className="heroPara">
              Port Harcourt, Rivers State, Nigeria •{" "}
              <a href="mailto:PreciousEmmanuelO@outlook.com">
                PreciousEmmanuelO@outlook.com
              </a>
              <br />
              {/* Portfolio:{" "} */}
              <a href="https://oeprecious.github.io" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>{" "}
              • {" "}
              <a href="https://github.com/oeprecious" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              • {" "}
              <a
                href="https://www.linkedin.com/in/precious-o-emmanuel-92671142a"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>



          <section className="about">

            <div className="about">

              <h3>PROFESSIONAL SUMMARY</h3>

              <div className="aboutPara">
                Detail-oriented Junior Frontend Developer with a strong foundation in HTML5, CSS3, JavaScript (ES6+), React.js, and Figma. Experienced in translating high-fidelity UI/UX wireframes into responsive, interactive web applications with dynamic state management and local storage persistence. Proven ability to build clean, user-centered digital products from concept to deployment.
              </div>

            </div>

          </section>


          {/* About section */}

          <section className="skills">
            <h3>TECHNICAL SKILLS</h3>

            <ul className="skillLists">

              <li> Frontend Technologies: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
              </li>

              <li>
                UI/UX & Design: Figma
              </li>

              <li>
                Development Tools & Concepts: Git, GitHub, GitHub Pages, Netlify, Component-Based Architecture

              </li>
            </ul>

          </section>

          {/* Project section */}

          <section className="projects">
            <h3 style={{ textTransform: "uppercase" }}>Projects</h3>

            <div className="project1">
              <h4>MyNotes – Task &amp; Note Management App</h4>
              <p>React.js, JavaScript, LocalStorage</p>
              <p>
                Live Demo: {""}
                <a href="https://oeprecious.github.io/my-notes-app/" target="_blank" rel="noopener noreferrer"> oeprecious.github.io/my-notes-app/</a>
              </p>
              <ul>

                <li>Created a lightweight note-taking application with full CRUD functionality displayed in a clean card grid.
                </li>

                <li>Integrated localStorage data persistence to retain user notes across browser sessions and page refreshes.
                </li>

              </ul>
            </div>

            <div className="project2">
              <h4>Personal Frontend Blog Platform</h4>
              <p>React.js, CSS3, LocalStorage</p>
              <p>
                Live Demo: {""}
                <a href="https://oeprecious.github.io/blog/" target="_blank" rel="noopener noreferrer"> oeprecious.github.io/blog/</a>
              </p>
              <ul>

                <li> Developed a responsive single-page blog platform featuring a full post editor supporting custom titles, topics, cover images, and draft saving.
                </li>

                <li>Built dynamic topic filtering using interactive chips (HTML, CSS, JavaScript, React) alongside live post counters per category.
                </li>

                <li> Implemented client-side routing so each article opens on its own dedicated URL, paired with smart delete protection for user-generated content.
                </li>

              </ul>
            </div>

            <div className="project3">
              <h4>Lume Jewels – E-Commerce Storefront</h4>
              <p>React.js, Figma, CSS3</p>
              <p>
                Live Demo: {""}
                <a href="https://oeprecious.github.io/lume-jewels/" target="_blank" rel="noopener noreferrer"> oeprecious.github.io/lume-jewels/</a>
              </p>
              <ul>

                <li>Designed an end-to-end minimal luxury jewelry e-commerce concept in Figma, progressing from moodboards and wireframes to high-fidelity desktop, tablet, and mobile prototypes.
                </li>

                <li>Translated the Figma design system into a responsive React storefront featuring clean product showcases and modern UI aesthetics.
                </li>
              </ul>
            </div>

            <div className="project4">
              <h4>Interactive Trading Plan & Dashboard</h4>
              <p>HTML5, CSS3, Vanilla JavaScript</p>
              <p>
                Live Demo: {""}
                <a href="https://tradingplandashboard.netlify.app/" target="_blank" rel="noopener noreferrer">https://tradingplandashboard.netlify.app//</a>
              </p>
              <ul>

                <li>Built a responsive frontend trading journal and analytics dashboard with dynamic trade logging (Pair, Entry Price, Stop Loss, Take Profit, Result, and PnL).
                </li>

                <li>Engineered automated Profit & Loss (P&L) calculations, risk-to-reward metrics, and a real-time tradingview widget.
                </li>

                <li> Implemented browser localStorage persistence and mobile-first responsive layouts for seamless cross-device tracking.
                </li>

              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="education">

            <div className="education">
              <h3>EDUCATION</h3>
              Bachelor of Science in Education (B.Sc.Ed.)
              Ignatius Ajuru University of Education, Port Harcourt, Nigeria | 2021 – 2025
            </div>
          </section>

          {/* Certification */}

          <section className="cert">
            <h3>CERTIFICATIONS</h3>

            <ul>

              <li>
                Frontend Development Certificate – PercorsoTech (<span className="italic">Hands-on training in HTML, CSS, and JavaScript</span>) | May 2026
              </li>

              <li>
                Ultimate Web Development Course 2026 - Build Modern Websites – Udemy (<span className="italic">Instructor: Haris Ali Khan</span>) | September 2026
              </li>

              <li>
                Figma UI UX Design Essentials – Udemy (<span className="italic">Instructor: Daniel Walter Scott</span>) | October 2026
              </li>
            </ul>
          </section>



        </div>
      </div>
    </>
  )
}

export default App