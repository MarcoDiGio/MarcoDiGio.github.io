import React from 'react'
import { Link } from 'react-router-dom'

export default function Project({ project }) {
  return (
    <div className='project'>
        <div>{project.name}</div>
        <div>{project.description}</div>
        <Link to={project.html_url}>Redirect to project</Link>
    </div>
  )
}
