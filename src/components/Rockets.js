// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
// import { fetchRocket } from '../redux/rockets/rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRocket());
  // }, [dispatch]);

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          type={rocket.type}
          flickrImages={rocket.flickrImages}
        />
      ))}
    </div>
  );
};

export default Rockets;
