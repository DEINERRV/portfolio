import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {technologies} from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map(technologie =>
        <div className='flex flex-col justify-center items-center' key={technologie.name}>
          <div className='w-28 h-28 cursor-pointer'>
            <BallCanvas icon={technologie.icon} />
          </div>
          <p className='text-white text-lg'>{technologie.name}</p>
        </div>
      )}
    </div>
  )
}

export default Tech