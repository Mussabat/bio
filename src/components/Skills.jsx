import React from 'react'
function Skills(props) {
  return (
    <div class = "skills">
          <ul>
           {
            props.Skills.map(skill => (
                <li>
                    {skill}
                </li>
            ))

           }
          </ul>
        </div>
  )
}

export default Skills