import React from 'react'
import AddressCard from '../address/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { Box } from 'mdi-material-ui'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';


export default function OrderDetails() {
  return (
    <div className='mt-[4rem] lg:px-20 px-5'>
      <div>
        <h1 className='font-bold py-5 text-xl'>Delivery Address</h1>
        <AddressCard/>
      </div>
      <div className='py-16 '>
        <OrderTracker />
      </div >
      <Grid className=' space-y-4' container>
        {[1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border  ' sx={{alignItems:'center',justifyContent:'space-between'}}>
<Grid item xs={6} >
    <div className='flex content-center space-x-8' >
        <img className='w-[7rem] h-[8rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l3lx8cw0/kurta/d/o/m/l-kurta-mr-button-tap-in-original-imagezztuysgufsh.jpeg?q=70" alt="" srcset="" />
    
    <div className='space-y-2 ml-5'>
        <p>Men Solid Cotton Blend Straight Kurta</p>
        <p className='space-x-5'><span>Color:Orange</span><span>Size:M</span></p>
        <p>seller:Mr khan</p>
        <p>RS 1495</p>
    </div>
    </div>
</Grid>
<Grid item className=''>
<div className='flex items-center space-x-2'>
    <StarBorderIcon sx={{color:'purple',fontSize:'35px'}}/>
    <span>Rate and Review Product</span>
    </div>

</Grid>
</Grid>)}

      </Grid>
    </div>
  )
}
