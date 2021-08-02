import React, { useState } from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <div className="Resume-Title">
        <h1>RESUME</h1>
      </div>
      <div className="Resume-Background-Wrapper">
        <div className="Resume-Background">
          <div className="Resume-Name">
            <h2>Aman Jhurani</h2>
          </div>
          <div className="Resume-Links">
                <a href="mailto:amanjhurani5@gmail.com">
                  amanjhurani5@gmail.com,&nbsp;
                </a>
                <a href="https://">(+91)&nbsp;80007&nbsp;88222,&nbsp;</a> <br />
                <a href="https://github.com/amanjhurani">Github,&nbsp;</a>
                <a href="https://www.linkedin.com/in/amanjhurani/">Linkedin</a>
          </div>
          <div className="Resume-Summary">
            <p>
              I am currently pursuing Computer Engineering from Government
              Engineering College, Rajkot. I am highly passionate about
              computing and creating elegant abstractions to solve challenging
              problems. I am comfortable in programming in a variety of multiple
              programming languages. I am particularly interested in backend
              development. I have been an active participant in the various
              competitive contests held on Codechef, Codeforces and Google.
            </p>
          </div>
          <div className="Resume-Section-Title">SKILLS</div>
          <div className="Resume-Skills">
            <p>
              • Python • C++ • C • JavaScript • HTML5 • CSS3 • Bootstrap •
              NodeJS • ExpressJS • ReactJS • WebSockets • Django • Flask • ML •
              Android • SQL • NoSQL • Firebase • MongoDB • AWS • AngularJS •
              Kafka • GNU/Linux • Windows
            </p>
          </div>
          <div className="Resume-Section-Title">EXPERIENCE</div>
          <div className="Resume-Experience">
            <div className="Resume-Experience-Job"> <div className="Resume-Experience-Job-Title"> KIOT INNOVATIONS (SOFTWARE ENGINEER) (Present) </div>
            <div className="Resume-Experience-Job-Description">
            - Working as a full-stack software engineer writing efficient and scalable RESTful
            APIs in Nodejs and responsive scalable React components for the Web
            App. - Working on dividing the architecture into microservices,
            enhancing the security and optimizing for 1,00,000+ users. 
            </div>
            </div>
            <div className="Resume-Experience-Job"> <div className="Resume-Experience-Job-Title"> GNANI.AI (PYTHON DEVELOPER) </div>
            <div className="Resume-Experience-Job-Description">
            - Worked as a Python developer intern and created
            formatted datasets for many regional languages and also improvised
            the efficiency of the voice recognition system. 
            </div>
            </div>
            <div className="Resume-Experience-Job"> <div className="Resume-Experience-Job-Title"> GOZAMMER (FULL-STACK DEVELOPER) </div>
            <div className="Resume-Experience-Job-Description">
            - Worked as a Full-stack developer intern and developed
            the complete web-application in Django which includes a lot of
            user-interactive features like social-media login, mentor-booking,
            making payment, providing feedback etc.
            </div>
            </div>
          </div>
          <div className="Resume-Education"></div>
        </div>
      </div>
    </div>
  );
}
