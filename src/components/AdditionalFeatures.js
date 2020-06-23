import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeaturesOnProps.length ? (
        <ol type="1">
          {props.additionalFeaturesOnProps.map(item => (
            item.added === false && <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return{
    additionalFeaturesOnProps: state.additionalFeatures,
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);
