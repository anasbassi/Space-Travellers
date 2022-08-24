import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionApi } from '../redux/missions/Mission';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <div className="Missions-container">
      {missions.map((mission) => (
        <Mission
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
        />
      ))}
    </div>
  );
};

export default Missions;
