import React from 'react'
import Button from '../Button/Button'

function Bio() {
  return (
    <>
    <div className='flex flex-col justify-center max-w-screen-3xl ml-auto mr-auto pt-16 md:pt-32 xsm:pl-2 xsm:pr-2 pr-8 pl-8 gap-6'>
        <div className='text-xl xsm:text-3xl text-textPrimaryLight dark:text-textPrimaryDark'>
            👋🏻 Hi, I’m Andrea Lead and Mentor Product Designer currently working at Deel.
            
            </div>
            <div className='text-textSecondaryLight dark:text-textSecondaryDark text-base xsm:text-xl'>Previously, founding designer at Form3, Leader designer at Grabyo. Also helped in creating internal tools for Facebook, Comcast, Twitter and many more.
            </div>
            <div className='text-textSecondaryLight dark:text-textSecondaryDark text-base xsm:text-xl'>
            From <span className='underline'>Salento</span>, UK based.
        </div>
    </div>
    <div className='flex flex-row flex-wrap gap-4 justify-start ml-auto mr-auto pt-12 xsm:pl-2 xsm:pr-2 pr-8 pl-8'>
        <Button href={''} text={'LINKEDIN'}/>
        <Button href={''} text={'BEHANCE'}/>
        <Button href={''} text={'RESUME'}/>
        <Button href={''} text={'CONTACT ME'}/>
    </div>
</>
  )
}

export default Bio