import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, name, description, image,
  } = props;

  return (
    <div id={id} className="rocket-container">
      <img src={image} alt="Rocket-Img" />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
