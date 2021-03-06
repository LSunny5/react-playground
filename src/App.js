import React from 'react';
//import React, { Component } from 'react';
import './App.css';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';
/* import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun'; */
//import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

/* Tabs Props
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
]; */

//For Accordion Assignment
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <TheDate /> */}

        {/* <Counter count={123} step={1}/> */}
        
        {/* <h2>Hello World Drill</h2>
        <HelloWorld />
        <h2>Bomb Drill</h2>
        <Bomb />
        <h2>Roulette Gun Drill</h2>
        <RouletteGun bulletInChamber = {8} /> */}

        {/* <Tabs tabs={tabsProp} /> */}

        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;