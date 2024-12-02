import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus =[
    {label:'On the way',value:'on_the_way'},
    {label:'Delivered',value:'delivered'},
    {label:'Cancelled',value:'cancelled'},
    {label:'Returned',value:'returned'},
]
export default function Order() {
  return (
    <div className='mt-[4rem] lg:px-20 px-5'>
     <Grid container sx={{justifyContent:'space-between'}}>
        <Grid item xs={2.5}>
<div className='sticky top-16 bg-white h-auto shadow-lg p-5'>
<h1 className='font-bold text-lg text-black'>Filter</h1>
<div className='space-y-4 mt-10'>
<h1 className='font-semibold text-black'>ORDER STATUS</h1>
{orderStatus.map((option)=><div className='flex items-center'>
<input defaultValue={option.value} type="checkbox" className='w-4 h-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'/>
<label className='ml-3 text-sm text-gray-600' htmlFor={option.label}>{option.label}</label>
</div>)}
</div>

</div>
        </Grid>
        <Grid item xs={9}>
            <div className='py-5'>
            {[1,1,1,1,1,1,1,1].map((item)=><OrderCard/>)}
            </div>
        </Grid>
        
     </Grid>
    </div>
  )
}
