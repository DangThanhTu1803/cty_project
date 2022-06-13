import React from 'react'
import { BackBtn } from './backBtn'
import { UpdateBtn } from './updateBtn'

export const UpdateAndBack = () => {
  return (
    <div className='update-back_btn'>
        <UpdateBtn nametitle='Cập nhật danh sách'/>
        <hr />
        <BackBtn/>
    </div>
  )
}
