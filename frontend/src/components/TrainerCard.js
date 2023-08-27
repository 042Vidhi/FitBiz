import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import PlaceIcon from '@mui/icons-material/Place';

function TrainerCard({ trainer, index}) {
  return (
    <div key={index} className='w-64 h-72 gap-4 flex flex-col items-center justify-center bg-slate-50 ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  rounded-md m-2 shadow-md '>
    <div className='imagebox h-24 w-24'>  
      <img src={trainer.avatarUrl} alt='trainer' className='object-cover border-2 border-slate-700 rounded-full' />
    </div>
    <div className='flex flex-col justify-between items-center h-30'>
      <div>
        <h3 className='text-xl font-semibold text-slate-900'>{trainer.trainerName}</h3>
      </div>
      <div>
        <p className='text-sm p-[2px] text-slate-600'>{trainer.title}</p>
        
      </div>
      <div className='grid grid-cols-2 gap-x-[1rem] pt-4 px-[3px]'>
            <p className='flex justify-end text-sm text-slate-500 '>
              <PeopleIcon className='p-[3px] mr-2' />
              <p className='font-semibold text-xs pt-[4px]'>{trainer.reviews}</p>
            </p>
            <p className='chat'>
              <button className='bg-green-400 text-sm text-white px-[2px] py-[1px] rounded-sm'>Whatsapp</button>
            </p>
            
            <p className='text-xs text-right text-slate-800'>
            <PlaceIcon className='p-[3px]  text-slate-500' />
            {trainer.location}</p>
            <p className='text-sm font-semibold text-slate-800'>From Rs.{trainer.charge}</p>
           
      </div>
        
  </div>
  </div>
  )
}

export default TrainerCard