import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { ReportListContent } from './ReportListContent'

export const ReportList = () => {
  return (
    <div className='back'>
        <div className='bg'>
            <ReportListContent/>
            <Menubar/>
            <Topbar nametitle='Báo cáo > Lập báo cáo'/>
        </div>
    </div>
  )
}
