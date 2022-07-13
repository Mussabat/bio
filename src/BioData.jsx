
import React from 'react'

function BioData({socialInfo, personalInfo, skillSection}) {
    return (
       
        <div class = "bio-data">
          {socialInfo}
          {personalInfo}
          {skillSection}
        </div>
    )
}

export default BioData;