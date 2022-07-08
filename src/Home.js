import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  createContext,
} from "react";
import { Row, Col, Container } from "reactstrap";
import Icon from "./common/Icon";
import Typed from "typed.js";
import { skills } from "./utils/skills";

export const ThemeContext = createContext(null);

export const Home = () => {
  const [size, setSize] = useState();
  const typedRef = useRef(null);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["a Front-End Developer", "proficient in JavaScript"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="themeContainer" data-color-scheme={theme}>
        <div className="themeToggle" onClick={toggleTheme}>
          <Icon
            icon={theme === "dark" ? "sun" : "moon"}
            className="themeIcon"
          />
        </div>
      </div>
      <div className="main-container" data-color-scheme={theme}>
        <Container>
          <Row>
            <Col sm={10} xs={12} lg={10}>
              <Row>
                <Col sm={8} xs={12} lg={8}>
                  <div>
                    <h1 className="heading-name">VIKAS MADAN</h1>
                    <div>
                      <p className="headingWhoAmI">
                        I'm <span className="typedText" ref={typedRef}></span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={4} xs={12} lg={4}>
                  <div>
                    <ul className="p-0 text list-unstyled header-list contactInfo">
                      <li>
                        <Icon icon="phone" />
                        +91 9035733932
                      </li>
                      <li>
                        <Icon icon="envelope" />
                        <a
                          className={
                            size && size.innerWidth < 1200 ? "d-none" : "text"
                          }
                          href="mailto:vikasmadan09@gmail.com"
                        >
                          vikasmadan09@gmail.com
                        </a>
                      </li>
                      <li>
                        <Icon icon="map-marker-alt" />
                        Bengaluru
                      </li>
                      <li>
                        <a
                          href="https://www.github.com/vikasmadan09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text"
                        >
                          <Icon icon={["fab", "github"]} />
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/vikas-madan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text"
                        >
                          <Icon icon={["fab", "linkedin-in"]} color="#0a66c2" />
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={2} xs={12} lg={2}>
              <Row>
                <div>
                  <img
                    className="rounded-circle d-block img-responsive img-fluid m-auto "
                    alt="Vikas Madan"
                    width="132"
                    height="146"
                    src={"dp.png"}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="sections-container">
          <Row>
            <Col sm="6">
              <h3>Summary</h3>
              <div>
                <p>
                  Innovative and Ownership driven Front-End Engineer with 7+
                  years of experience in designing and developing web
                  applications. Recognised and appreciated with awards in all
                  the organisations I have been part of.
                </p>
                <ul>
                  <li>
                    Working on a platform published as FOSS project on Github.
                  </li>
                  <li>
                    Successfully implemented Micro Frontend architecture for the
                    project using Webpack Module Federation ( a JS
                    architecture).
                  </li>
                  <li>
                    I'm a Self learner, this helps me in taking up the
                    initiatives or step-in whenever the project requires.
                  </li>
                  <li>
                    Enthusiast to take up initiative in working on Proof of
                    Concepts (POC) that helps for ongoing projects in taking up
                    better decisions.
                  </li>
                </ul>{" "}
              </div>
              <div>
                <h3>Education</h3>
                <div className="resume-item">
                  <h4>BACHELOR IN ENGINEERING</h4>
                  <h5>2009 - 2013</h5>
                  <div className="grad-info">
                    <p>
                      <em>Dayananda Sagar College of Engineering, Bangalore</em>
                    </p>
                    <p>
                      <strong>Course:</strong> Aeronautical Engineering
                    </p>
                    <p>
                      <strong>Percentage:</strong> 78.54 %
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm="6">
              <div>
                <h3>Skills</h3>
                <dl className="skills">
                  {Object.entries(skills).map(([key, value], i) => {
                    return (
                      <React.Fragment key={key}>
                        <dd>
                          {value.map((skill) => (
                            <span key={skill} className="skill-badge">
                              {skill}
                            </span>
                          ))}
                        </dd>
                      </React.Fragment>
                    );
                  })}
                </dl>
              </div>
              <div>
                <h3>Awards</h3>
                <div className="resume-item">
                  <h4>Bronze Award</h4>
                  <h5>June 2022</h5>
                  <p>
                    Awarded for the second time. Recognised for the showcasing
                    Learning and Co-Creation Spirit. Quickly learnt and
                    implemented Micro Frontend Architecture for one of the
                    critical on-going project (published as FOSS on Github).
                    Great in Collaboration and a "Go-to-Person" for all the
                    teams for any UI related topics.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Bronze Award</h4>
                  <h5>Dec 2021</h5>
                  <p>
                    Appreciated for taking up the ownership of entire UI
                    development of one of the project (handling suing cases) and
                    also supporting another project i.e platform development,
                    when needed.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Stars of DGTL</h4>
                  <h5>Aug 2020</h5>
                  <p>
                    Appreciated for valuable client engagement. Was one among
                    only 6 people selected across Business Unit.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Award of Recognition</h4>
                  <h5>Oct 2018</h5>
                  <p>
                    Recognised for the work ethics and support shown over the
                    course of last quarter.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Employee of the Month</h4>
                  <h5>Aug 2016</h5>
                  <p>
                    Recognized for taking up an initiative and putting forth
                    dedicated efforts towards the product, which resulted in
                    leading fast and qualitative deliverables with increased
                    ROI.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
