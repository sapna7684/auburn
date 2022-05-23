import React from 'react'

export const InnerPagesBanner = ({title,description}) => {
  return (
    <div className='innerPageBanner home-banner'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}
