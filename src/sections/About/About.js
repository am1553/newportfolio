import React from 'react'
import Card from './components/Card'

import DevTechLogo from '../../assets/coding.png'
import CodeDataLogo from '../../assets/web-design.png'
import ReactLogo from '../../assets/atom-symbol.png'

import PreviousIcon from '../../assets/back-arrow.png'
import NowIcon from '../../assets/now.png'
import FutureIcon from '../../assets/future.png'

function About() {

  const skillsData = [
    {
      id: 1,
      image: DevTechLogo,
      title: "Development Technology",
      description: "HTML, CSS and JavaScript is the core fundamental of what I am able to do. Ideally I use React.js to build a website, where I integreate SCSS with BEM methodology and inline conditional styling.",
      background: "#ff9c23"
    },
    {
      id: 2,
      image: CodeDataLogo,
      title: "Design to Code & Data",
      description: "I can take a design and code it pixel perfectly to work across all devices as well as make it interactive.I can fetch data from an API and use it for rendering components.",
      background: "#FF0080"
    },
    {
      id: 3,
      image: ReactLogo,
      title: "More on React.js",
      description: "I have been using React.js and have built multiple projects using it. I am familiar with reusable components, components state management, hooks and props, conditional rendering, and much more.",
      background: "#40E0D0"
    }
  ]
  

  const journeyData = [
    {
      id: 1,
      image: PreviousIcon,
      title: "Previously",
      description: "After gaining experience in Engineering, I wanted to explore more short term courses and came across freeCodeCamp where I completed the webdesign and javascript course.",
      background: "#FF0080"
    },
    {
      id: 2,
      image: NowIcon,
      title: "Now",
      description: "Currently, I am working on a web application for a language agency. This involves working in a team that follows Agile workflow. I am also pursuing BSc Computing, IT and Mathematics as part time.",
      background: "#40E0D0"
    },
    {
      id: 3,
      image: FutureIcon,
      title: "Future",
      description: "In 5 years time, I see myself becoming a more experienced full stack web developer determined on facing and solving challenges.",
      background: "#ff9c23"
    }
  ]

  return (
    <div className='about' id='about'>


         <h2>Skills</h2>
         <div className="skills_card_container">
           {
             skillsData.map((data, key) => {
                return(
                  <Card 
                      key = { data.id }
                      image = { data.image }
                      title = { data.title }
                      description = { data.description }
                      background = { data.background }
                  />
                )
             })
           }
         </div>

        <h2>journey</h2>
           <div className="journey_card_container">
             {
               journeyData.map((data, key) => {
                  return(
                    <Card 
                        key = { data.id }
                        image = { data.image }
                        title = { data.title }
                        description = { data.description }
                        background = { data.background }
                    />
                  )
               })
             }
           </div>
    </div>
  )
}

export default About