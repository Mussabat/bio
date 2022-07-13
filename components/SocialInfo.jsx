import React from 'react'

function SocialInfo(props) {
  return (
        <div class = "social-media">
        <p>linkedIn : {props.linkedin}</p>
        <p>facebook : {props.fb}</p>
        </div>
  )
}

export default SocialInfo