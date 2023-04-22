import React from 'react'
import Work from '../Work/Work'
import { HiArrowRight } from "react-icons/hi";


export default function WorksList() {
  return (
    <div className='pt-16 ms:pt-32 xsm:px-2 px-8 '>
        <h1 className='text-base xsm:text-xl font-medium text-textPrimaryLight dark:text-textPrimaryDark'>Selected work</h1>
        <div className='flex'>
        <Work work={'Slack plugins - Web development'} company={'tryroots.io'}/>
        </div>
    </div>
  )
}
