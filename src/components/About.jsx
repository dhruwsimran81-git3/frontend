import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          Hi, I am <b>Simran</b> a BCA final semester student and aspiring
          software developer.
        </p>

        <p>
          I am currently learning <b>HTML, CSS, Javascript and REACT </b>
          and building projects to improve my skills.
        </p>

        <p>
          I am passionate about creating responsive and user friendly web
          applications.
        </p>

        <p>
          My goal is to become a skilled <b>Frontend Developer </b>
          and work in a good company.
        </p>
        <div className="contact-links">
          <h3>Contact with me: </h3>
            <a href="mailto:dhruwsimran@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/simran-dhruw-1940582b4/">LinkedIn</a>
            <a href="https://github.com/dhruwsimran81-git3">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default About;
