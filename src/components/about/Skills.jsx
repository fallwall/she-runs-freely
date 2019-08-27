import React from 'react';
import { Divider, Header, Label } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

function Skills(props) {

  const skillList = [
    'JavaScript',
    'React',
    'Ruby',
    'Rails',
    'HTML',
    'CSS',
    'APIs',
    'Node.js',
    'Express.js',
    'P5.js',
    'Python'
  ]

  const labels = skillList.map((skill, i) => {
    return (<Label as='a' className="skill-names">{skill}</Label>)
  });

  return (
    <div className='skills'>
      <Divider horizontal>
        <Header>
          <div className='skills-head'>skills</div>
        </Header>
      </Divider>
      <div className='skill-labels' onClick={props.handleResume}>
        <Fade left cascade>
          {labels}
        </Fade>
      </div>
    </div>
  )
}

export default Skills;