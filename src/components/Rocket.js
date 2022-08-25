import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, unbookRocket } from '../redux/rockets/rocket';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(bookRocket(id));
  };

  const unsubscribe = () => {
    dispatch(unbookRocket(id));
  };

  return (
    <div id={id} className="rocket-container">
      <img src={image} alt="Rocket-Img" />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>
          <span className={reserved ? 'badge' : null}>
            {reserved ? 'Reserved' : ''}
          </span>
          {description}
        </p>
        {!reserved ? <button className="reserve" type="button" onClick={reserve}>Reserve Rocket</button>
          : <button className="cancel" type="button" onClick={unsubscribe}>Cancel Reservation</button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
