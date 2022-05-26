import React from 'react'
import ChefImage from '../../assets/chef.png'
import './chef.css'

export const Chef = () => {
    return (
        <div className='p-2 chef'>
            <div className="container">
                <div className="d-flex align-center">
                    <div className='content-wrapper text-right'>
                        <img src={ChefImage} alt="Chef" width={500} />
                    </div>
                    <div className='content-wrapper'>
                        <h2>What we believe in</h2>
                        <blockquote>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere amet, eos architecto eaque alias necessitatibus quisquam odit voluptas! Ipsum, dolore dicta nemo quasi consequatur illo vitae magni reprehenderit? Itaque.</blockquote>
                        <strong>LIZ GRISAITIS</strong>
                        <p>Executive Chef</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
