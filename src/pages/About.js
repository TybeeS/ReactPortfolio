import ucfCreed from '../img/ucf-creed.png';

const skillGroups = [
  {
    category: 'Web Design',
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Git / GitHub'],
  },
  {
    category: 'Image / Video Editing',
    skills: ['Adobe Photoshop', 'VEGAS Pro'],
  },
  {
    category: 'Professional Skills',
    skills: ['Organization', 'Communication', 'Problem Solving', 'Adaptability', 'Detail-oriented'],
  },
];

const About = () => {
  return (
    <div className="about">
      <div className="about-card glass-card">
        <h2>About Me</h2>
        <p>
          Ever since I was a little kid, I have always had an interest in technology. I loved
          exploring the many avenues of the digital landscape and learning all about how things
          work. My interests have led me to pursue a career in web design, to which I can create
          website layouts and user interfaces for many different projects and organizations.
        </p>
      </div>

      <div className="about-card glass-card">
        <h2>Education</h2>
        <div className="education-row">
          <img src={ucfCreed} alt="UCF Creed" className="ucf-logo" />
          <div className="education-info">
            <p className="education-school">University of Central Florida</p>
            <p className="education-degree">Digital Media (BA)</p>
            <p className="education-grad">Expected Graduation: May 2026</p>
          </div>
        </div>
      </div>

      <div className="about-card skills-card glass-card">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group-card" key={group.category}>
              <h3 className="skill-group-title">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
