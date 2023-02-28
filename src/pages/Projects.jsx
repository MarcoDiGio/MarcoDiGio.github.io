import React, { useState, useEffect } from 'react'
import Project from '../components/Project';
import useFetch from '../hooks/useFetch'
import { motion as m } from 'framer-motion';
import '../styles/Projects.css'

export default function Projects() {
  const [projects, setProjects] = useState([])

  const { handleGet } = useFetch();

  useEffect(() => {
    const response = handleGet('https://api.github.com/users/MarcoDiGio/repos')
    response.then(res => setProjects(res))
  }, [])


  return (
    <m.div className='page-container'
      initial={{x: "100%"}}
      animate={{x: 0}}
      exit={{x: "100%"}}
    >
      <div className='first-line'>Projects</div>
      <div className='project-line'>Take a look at some of the public projects I worked on:</div>
      <div className='projects-container'>
        {projects.map((project, i) => {
            if (i > 5) return;
            return <Project project={project} key={project.id}/>
        })}
      </div>
    </m.div>
  )
}
