import React from 'react';
import { connect } from 'react-redux'

import { toggleRemove } from '../actions/featureActions'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={(() => {props.toggleRemove(props.feature.id)})} className="button">X</button>
      {props.feature.name}
    </li>
  );
};



const mapStateToProps = state => {
  return{
    // feature: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {toggleRemove})(AddedFeature);
