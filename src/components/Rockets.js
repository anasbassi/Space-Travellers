import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { fetchRocketApi } from '../redux/rockets/rocket';
import '../styles/rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketApi());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
