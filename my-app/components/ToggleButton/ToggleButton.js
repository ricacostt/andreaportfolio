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

    //   return (
    // <button
    //      onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
    //         className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
    //         Toggle Mode
    //         <HiOutlineSun/>
            
    // </button>
//   )
// }

export default ToggleButton