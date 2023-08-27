import React from 'react'
import PeopleIcon from '@mui/icons-material/People';

function ServiceCard({ service, index}) {
  return (
    
        <div key={index} className='w-64 flex flex-col justify-between h-30 bg-slate-50 ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  rounded-md m-2 shadow-md '>
          <div className='imagebox'>
            <img src={service.serviceImg} alt={service.title} className='rounded-t-md w-full' />
              <p className='text-xl text-slate-800 font-bold px-2'>{service.title}</p>
          </div>
          <div className='p-2 '>
              <div className='flex items-center mt-2'>
                <img src={service.avatarUrl} alt={`${service.trainerName}'s avatar`} className='w-6 h-6 rounded-full mr-2' />
                <p className='text-sm text-slate-600'>{service.trainerName}</p>
              </div>
              <div className='flex items-center justify-between pt-3 '>
                <p className='flex  text-sm text-slate-500 '>
                  <PeopleIcon className='p-[3px] mr-2' />
                  <p className='font-semibold text-xs pt-[4px]'>{service.reviews}</p> 
                </p>
                <p className='text-sm text-slate-800 bg-blue-200 px-[2px] py-[1px] rounded-sm'>
                  {service.serviceType}
                </p>
              </div>
          </div>
        </div>
  )
}

export default ServiceCard