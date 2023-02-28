import React from 'react'
import { motion as m } from 'framer-motion'
import '../styles/App.css'
import '../styles/burger.css'

export default function Home() {
  return (
    <m.div className='page-container'
      initial={{x: "100%"}}
      animate={{x: 0}}
      exit={{x: "100%"}}
    >
        <div className='first-line'>Hi, my name is</div>
        <div className='second-line'>Marco Di Giovannantonio</div>
        <div className='third-line'>I build things for the web</div>
        <div className='last-line'>
            I'm a student who aims to be a web developer.
            I try my best to learn new things to apply in this world.
            I am currently studying at Università di Roma La Sapienza. 
        </div>
    </m.div>
  )
}
