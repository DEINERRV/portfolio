import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a student of systems engineering, I have had the opportunity to work on projects using different programming languages. I have developed applications in C++, Java, Python, JavaScript, and Kotlin, exploring various areas such as desktop, web, and mobile applications. 
        <br/>I have worked with popular frameworks like Spring Boot and React.
        <br/>In addition to my programming experience, I have worked with agile methodologies like Scrum.
        <br/>I have also had the opportunity to participate in project bidding processes, applying my technical skills and understanding of project requirements to submit competitive proposals.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>
          <ServiceCard  key={service.title} index={index} {...service}/>
        )}
      </div>
    </>
  )
}


const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","srping",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] hover:shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default SectionWrapper(About,"about")