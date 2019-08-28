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
    <Fade left cascade>
      <div className='skills'>
        <Divider horizontal>
          <Header>
            <div className='enlarge'>skills</div>
          </Header>
        </Divider>
        <div className='skill-labels'>
          <Fade left cascade>
            {labels}
          </Fade>
        </div>
      </div>
    </Fade>
  )
}

export default Skills;