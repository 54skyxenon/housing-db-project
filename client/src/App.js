import React from 'react';
import './App.css';
import { Heading } from 'rebass';
import { Hero, ScrollDownIndicator } from 'react-landing-page';

import banner from './assets/topbanner.jpeg';

import Story from './components/Story';
import Neighborhood from './components/Neighborhood';
import LoincQuery from './components/queries/LoincQuery';
import SubwayQuery from './components/queries/SubwayQuery';
import MostApartmentsQuery from './components/queries/MostApartmentsQuery';
import NewApartmentsQuery from './components/queries/NewApartmentsQuery';

// The root level component
const App = () => (
  <div id="container">
    {/* Our landing background */}
    <div id="landing">
      <Hero
        color="white"
        bg="#4D4B4A"
        backgroundImage={banner} >
        <Heading style={styles.heading}>Boston Housing Development</Heading>
        <Heading style={styles.subheading} mt={3}>(Created by: Brandon Liang and Max Hayashi)</Heading>
        <ScrollDownIndicator />
      </Hero>
    </div>

    <div id="content">
      <Story />
      <SubwayQuery />
      <LoincQuery />
      <MostApartmentsQuery />
      <NewApartmentsQuery />
      <Neighborhood />
    </div>
  </div>
)

const styles = {
  heading: {
    fontSize: '4vw',
    fontFamily: 'Lato'
  },
  subheading: {
    fontSize: '1vw',
    fontFamily: 'Lato',
    fontStyle: 'italic'
  }
}

export default App;
