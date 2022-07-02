import React from 'react'

import '../../App.css'
import AppointmentGrid from '../../components/appointmentGrid';
import Sidebar from '../../components/sidebar';

export default function Dashboard() {
    
    return (
        <div className='flex h-full'>
            <Sidebar/>
            <AppointmentGrid/>
        </div>
    );
}

