import React from 'react'
import { PageProps } from '../../../../.next/types/app/[username]/[slug]/page'


export async function generateMetadata({ params }: PageProps) {
   const { slug } = await params
   // safe to use async here
   return {
      title: slug,
   }
}

const SingleBlog = async ({ params }: PageProps) => {
   const { username, slug } = await params
   return (
      <div>
         <div className="">{username || ''}</div>
         <div className="">{slug || ''}</div>
      </div>
   )
}

export default SingleBlog