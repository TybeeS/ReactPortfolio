import React from 'react';
import quiz from '../img/quiz.jpg';
import exercise from '../img/exercise.jpg';
import review from '../img/review.jpg';
import urban_lens from '../img/urban_lens.jpg';
import donut from '../img/donut.jpg';


const Projects = () => {
  const projects = [
    {
      title: 'High Fidelity Prototype For Cost of Living Website',
      description: 'A collaborative prototype for UrbanLens, created with a team of designers and developers.',
      image: urban_lens,
      link: 'https://www.figma.com/proto/xgDshqFaIQFpeuovZwe0V2',
    },
    {
      title: 'Static Site For Fictional Business',
      description: 'A business website for Dazzling Donuts, a donut shop.',
      image: donut,
      link: 'https://earnest-entremet-78f7e8.netlify.app/',
    },
    {
      title: 'Game Review Website',
      description: 'A website for reviewing video games with a working comment section.',
      image: review,
      link: 'https://students.gaim.ucf.edu/~ty009596/dig3134c/assignment05/login.php',
    },
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
