import { Typography } from '@mui/material'
import React from 'react'
import image from '../assets/mashi.jpg'

const Footer = () => {
  return (
    <div style={{height:'5rem' ,display:'flex',justifyContent:'center',marginLeft:'-1rem',width:'100vw', marginTop:'3rem' , backgroundColor:'black' , color:'white'}}>

            <Typography sx={{paddingTop:'1.5rem'}}>Made with 💓 by MashiBann</Typography>
            <img src={image} height={'45rem'} style={{borderRadius:'100%', margin:'1rem'}}/>
     
    </div>
  )
}

export default Footer