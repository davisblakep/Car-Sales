import React from 'react';

import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.imageOnProps} alt={props.nameOnProps} />
      </figure>
      <h2>{props.nameOnProps}</h2>
      <p>Amount: ${props.priceOnProps}</p>
    </>
  );
};

const mapStateToProps = state => {
  return{
  imageOnProps: state.car.image,
  nameOnProps: state.car.name,
  priceOnProps: state.car.price,
  }
}

export default connect(
  mapStateToProps
)(Header);
