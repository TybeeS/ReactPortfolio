import React from 'react';
import quiz from '../img/quiz.jpg';
import exercise from '../img/exercise.jpg';
import review from '../img/review.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Blue Character Quiz',
      description: 'A short quiz application that determine which blue fictional character you are.',
      image: quiz,
      link: 'https://students.gaim.ucf.edu/~ty009596/dig3716c/assignment2/survey.html',
    },
    {
      title: 'Exercise App',
      description: 'An app that contains different numerical operations for different kinds of exercises.',
      image: exercise,
      link: 'https://github.com/TybeeS/TybeeS_NativeExerciseApp',
    },
    {
      title: 'Game Review Site',
      description: 'A website for reviewing video games with a working comment section.',
      image: review,
      link: 'https://students.gaim.ucf.edu/~ty009596/dig3134c/assignment05/login.php',
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Open
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
