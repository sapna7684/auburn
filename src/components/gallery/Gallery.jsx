import React, { useRef } from 'react'
import images from './Index'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import './gallery.css'

export const Gallery = () => {
    const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <section className='gallery p-2'>
        <div className="container-fluid">
            <div className="d-flex">
                <div className="flex-40">
                    <h2>Gallery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam in porro aspernatur nemo placeat excepturi ipsam delectus cumque dicta exercitationem aliquid possimus at nam nobis rem iure perspiciatis, ducimus doloremque.</p>
                </div>
                <div className="flex-60">
                    <div className="image-content">
                    <div className="gallery-wrapper" ref={scrollRef}>
                        <div className="image-card"><img src={images.gallery01} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery02} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery03} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery04} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery03} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery04} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery03} alt="Gallery" /></div>
                        <div className="image-card"><img src={images.gallery04} alt="Gallery" /></div>
                    </div>
                    <AiOutlineArrowLeft className='buttons btn-left' onClick={() => scroll('left')}/>
                    <AiOutlineArrowRight className='buttons btn-right' onClick={() => scroll('right')}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
