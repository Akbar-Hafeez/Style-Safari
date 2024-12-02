import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

export default function OrderCard() {
  return (
    <div className='p-5 shadow hover:shadow-slate-50 hover:shadow-2xl '>
      <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
<Grid item xs={6}>
<div className='flex cursor-pointer'>
<img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/f/f/xl-grey-sws4503-allan-peter-original-imag6xxgvvh59gh5-bb.jpeg?q=70" alt="" />
<div className="ml-5 space-y-2">
    <p>Men Solid Pure Cotton Straight Kurta</p>
    <p className='opacity-50 text-xs font-semibold'>Size:M</p>
    <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
</div>
</div>
</Grid>
<Grid item xs={2}>
<p>Rs 999</p>
        </Grid>
<Grid item xs={4}>
{true &&<div> <p>
<AdjustIcon sx={{width:'15px',height:'15px'}} className='text-green-300 mr-2 text-sm'/>
    <span>
        Delivered on March 3
    </span>
    </p>
    <p>Your item has been delivered</p>
    </div>}
{false &&<p>
    <span>
        Expected Delivery on March 3
    </span>
    </p>}
        </Grid>
      </Grid>
    </div>
  )
}
