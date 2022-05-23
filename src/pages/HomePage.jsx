import React from 'react'
import { AboutUs } from '../components/aboutUs/AboutUs'
import { Banner } from '../components/banner/Banner'
import { Chef } from '../components/chef/Chef'
import { EatTogether } from '../components/eatTogether/EatTogether'
import { Gallery } from '../components/gallery/Gallery'
import { Subscribe } from '../components/subscribe/Subscribe'
import { Video } from '../components/video/Video'

export const HomePage = () => {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <EatTogether/>
    <Chef/>
    <Video/>
    <Gallery/>
    <Subscribe/>
    </>
    )
}
