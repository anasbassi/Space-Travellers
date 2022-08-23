import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rockets.css';

const Rocket = (props) => {
  const {
    id, name, type, flickrImages,
  } = props;

  return (
    <div className="rocket-container">
      <p>{id}</p>
      <p>{name}</p>
      <p>{type}</p>
      <img src={flickrImages} alt="Rocket-Img" />
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default Rocket;
