import React from 'react';
import { connect } from 'react-redux';

import { toggleAdd } from '../actions/featureActions'

const AdditionalFeature = props => {
  console.log('AdditionalFeature component props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={(() => {props.toggleAdd(props.feature.id)})} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return{
    // feature: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {toggleAdd})(AdditionalFeature);
