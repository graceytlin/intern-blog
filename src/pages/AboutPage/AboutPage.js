import { Container, Row, Col } from "react-grid-system";
import "./AboutPage.scss";
import { about } from "./data.js";
import { FaAngleDoubleRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="about">
      <Container fluid>
        <Row justify="center">
          <div className="title">
            <h2>About me</h2>
            <div className="underline"></div>
          </div>
        </Row>

        <Row justify="center">
          {about.map((section, index) => {
            const { title, link, image, alt, role, desc } = section;

            return (
              <Col key={index} className="col" sm={3.7} md={3.7}>
                <h3 style={{ fontSize: "20px" }}>{title}</h3>
                <div className="image-container">
                  <a href={link}>
                    <img
                      src={require(`../../images/${image}`)}
                      className="logo"
                      alt={alt}
                    ></img>
                  </a>
                </div>

                <h4>{role}</h4>
                <br />

                <div className="tasks-col-container">
                  {desc.map((item, index) => {
                    return (
                      <div key={index} className="task-desc">
                        <FaAngleDoubleRight className="task-icon"></FaAngleDoubleRight>
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
