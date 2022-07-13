import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/editing.png";
import ngo from "../../Assets/Projects/ngo.png";
// import suicide from "../../Assets/Projects/suicide.png";
import sorting from "../../Assets/Projects/sorting.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Markdown Editor"
              description="A markdwon editing website which made by React js, Hypertext Markup Language(HTML), Cascading Style Sheets(CSS), and JavaScript.
                         It’s an intuitive and lightweight editing tool for users. You can use it to format texts
                         like bold or italic the texts"
              ghLink="https://github.com/bshekhar123/markdown-editor"
              demoLink="https://thriving-pastelito-c23cbc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ngo}
              isBlog={false}
              title="Swami Vivekananda Social Development And Charitable Trust"
              description="Website build up by HTML, CSS, Javascript, Tailwind, React Scroll, React Carousel and React.js. It's a Non-profit Organisation Website. An ngo which mainly focus on women’s empowerment, awareness, education for poor and deserving students and
work for backward class and tribal welfare, development. "
              ghLink="https://github.com/bshekhar123/ngo"
              demoLink="https://ngo-bshekhar123.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="This website build up with C/C++, HTML, CSS and Javascript. A platform for in-depth step by step understanding of some famous sorting algorithms visually.
                It makes use of bars, and various color codes to understand how the sorting actually occurs, and also provides of
              adjusting the speed of animation or size of bar set"
              ghLink="https://github.com/bshekhar123/sorting-visualizer"
              demoLink="https://gentle-medovik-d32b6e.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
