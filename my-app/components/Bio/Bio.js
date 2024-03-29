import React from 'react'
import Button from '../Button/Button'
import Work from '../WorksList/WorksList'

function Bio() {
  return (
    <>
    <div className='flex flex-col justify-center max-w-screen-3xl ml-auto mr-auto pt-16 md:pt-32 xsm:px-8 px-8 gap-6'>
        <div className='text-xl xsm:text-3xl text-textPrimaryLight dark:text-textPrimaryDark xsm:leading-normal leading-8'>
            👋🏻 Hi, I’m Andrea Lead and Mentor Product Designer currently working at <span className='underline'><a href="https://flair.hr/en/" target="_blank" rel="noopener noreferrer">flair</a></span>.
            </div>
            <div className='text-textSecondaryLight font-light dark:text-textSecondaryDark text-base xsm:text-xl'>Previously, Product Designer at Deel, founding designer at Form3, Leader designer at Grabyo. Also helped in creating internal tools for Meta (ex Facebook), Comcast, Twitter and many more.
            </div>
            <div className='text-textSecondaryLight font-light dark:text-textSecondaryDark text-base xsm:text-xl xsm:leading-normal leading-8'>
            From <span className='underline'><a href="https://en.wikipedia.org/wiki/Salento" target="_blank" rel="noopener noreferrer">Salento</a></span>, digital nomad.
        </div>
    </div>
    <div className='flex flex-row flex-wrap gap-4 justify-start ml-auto mr-auto pt-12 xsm:px-8 px-8'>
        <Button href={'https://www.linkedin.com/in/ilsabato/'} text={'LINKEDIN'}/>
        <Button href={'https://www.behance.net/ilsab'} text={'BEHANCE'}/>
        <Button href={'https://www.dropbox.com/scl/fi/5quwosxr8ux3t690qtpnn/andreasabato-cv.pdf?rlkey=r2lmwbcshbkmh0buaw9pzya72&dl=0'} text={'RESUME'}/>
        <Button href={'mailto:ilsabato@gmail.com'} text={'CONTACT ME'}/>
    </div>
    <Work/>
</>
  )
}

export default Bio