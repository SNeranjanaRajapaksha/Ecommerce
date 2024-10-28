import Slider from "../../components/Slider/Slider.js"
import React from 'react'
import "./Home.scss"
import { FeaturedProducts } from "../../components/FeatureProducts/FeaturedProducts.js"
import { Categories } from "../../components/Categories/Categories.js"
import { Contact } from "../../components/Contact/Contact.js"

export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}
