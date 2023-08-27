import React from 'react'
import Sidebar from '../components/Sidebar'

function EnrolledServices() {
  return (
    <div className='flex'>
      <aside class="h-screen sticky top-0">
        <Sidebar />
       </aside>
      <main className='bg-slate-200 py-7 px-2 w-full md:pl-4 lg:pl-8 flex flex-wrap overflow-y-scroll'>
      
      </main>
    </div>
  )
}

export default EnrolledServices