import React, {useContext} from 'react'
import logo_sesion_light from '../../../../assets/logo_sesion_light.svg'
import logo_sesion_dark from '../../../../assets/logo_sesion_dark.svg'
import { themeContextMode } from '../../../../context/ThemeContext';

const Title = () => {
  const { theme } = useContext(themeContextMode);
  return (
    <div>
       <img src={theme === "dark" ? logo_sesion_light : logo_sesion_dark} alt="logo" className='title_image'/>
    </div>
  )
}

export default Title