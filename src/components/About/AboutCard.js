import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shekhar Biswas </span>
            from <span className="purple"> National Institute of Technology, Kurukshetra. </span>
            <br />And currently pursuing Electronics and  Communication Engineering.
            <br />
            <br />
           Some other passions of mine......
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Fine Arts and Digital Illustrations
            </li>
            <li className="about-activity">
              <ImPointRight /> Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Acting
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
