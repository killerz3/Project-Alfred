import React from 'react'
import AppointmentCard from './designs/AppointmentCard'

export default function AppointmentGrid() {
  return (
    <div>
      <div className={`grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 sm:m-4 duration-300 ease-in`}>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
                  
      
              </div>
    </div>
  )
}
