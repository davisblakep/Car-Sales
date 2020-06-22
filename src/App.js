import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        {/* <AddedFeatures car={state.car} /> */}
        <AddedFeatures />
      </div>
      <div className="box">
        {/* <AdditionalFeatures additionalFeatures={state.additionalFeatures} /> */}
        <AdditionalFeatures />
        {/* <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
        <Total />
      </div>
    </div>
  );
};

export default App;
