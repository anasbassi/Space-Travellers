import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, name, type, flickrImage,
  } = props;

  return (
    <div id={id} className="rocket-container">
      <img src="https://imgur.com/DaCfMsj.jpg" alt="Rocket-Img" />
      <p>{flickrImage}</p>
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{type}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
};

export default Rocket;
