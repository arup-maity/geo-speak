'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const UserProfile = () => {
   const params = useParams();
   return (
      <div>
         {
            params?.username
         }
      </div>
   )
}

export default UserProfile