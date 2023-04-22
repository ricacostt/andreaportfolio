import React from 'react'
import {useTheme} from "next-themes"
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

function ToggleButton() {
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;


if (currentTheme === 'dark'){
  return (
    <HiOutlineSun className='w-6 h-6 ' role='button' onClick={()=>setTheme('light')}/>
  )
}
else {
  return (
    <HiOutlineMoon className='w-6 h-6 stroke-bgDark' role='button' onClick={()=>setTheme('dark')}/>
  )
}
}

export default ToggleButton