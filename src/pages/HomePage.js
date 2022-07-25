import React from 'react'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import Sponsors from '../components/Sponsors/Sponsors'
import Content from '../components/Content/Content';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading, HeadingTextWrapper } from '../globalStyles';

const HomePage = () => {
  return (
    <>
    
    <Hero/>
    <Features/>
    <Sponsors/>
    <HeadingTextWrapper><Heading id="projects">Our Projects</Heading></HeadingTextWrapper>
    
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} />
    </>

  )
}

export default HomePage