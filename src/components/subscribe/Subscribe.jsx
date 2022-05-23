import React from 'react'
import './subscribe.css'

export const Subscribe = () => {
  return (
    <section className="subscribe p-2">
            <h2>Subscribe to our newsletter</h2>
            <p>And Never Miss Latest Updates!</p>
            <input type="email" placeholder='Enter your email address' />
            <button>Subscribe</button>
    </section>
  )
}
