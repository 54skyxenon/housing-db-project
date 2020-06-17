import React from 'react';
import './App.css';

const Banner = () => (
  <section>
    <div className="banner"></div>
    <div className="banner-text">Boston Housing Development</div>
  </section>
)

class App extends React.Component {
  render = () => (
    <div className="App">
      <Banner />
    </div>
  )
}

export default App;
