import React from 'react'
import { motion as m } from 'framer-motion'

export default function About() {
  return (
    <m.div className='page-container'
      initial={{x: "100%"}}
      animate={{x: 0}}
      exit={{x: "100%"}}
    >
        <div className='first-line'>About</div>
        <div className='last-line'>
            Hello! My name is Marco and I really love creating
            web applications, such as this Single Page Application (SPA).
            My interest in web development started back in 2020, when
            I had to create a website for my high school project.
            Fast forward to today and I did study a lot about web development,
            both frontend and backend. These are some of the technologies I
            worked with:
        </div>
        <ul className='technologies-list'>
            <li>React</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Express</li>
            <li>MySQL</li>
        </ul>
    </m.div>
  )
}
