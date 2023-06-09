import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { Tooltip } from '@material-tailwind/react'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

const ProjectCard = ({ index, name, description, tags, image, links }) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>

      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          {links.map(link =>
            <Tooltip content={link.name}>
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                onClick={() => window.open(link.link, '_black')}
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </Tooltip>
          )}

        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map(tag =>
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        )}
      </div>
      
    </div>

  )
}

export default SectionWrapper(Works, "")