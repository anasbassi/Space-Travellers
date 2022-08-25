import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionApi } from '../redux/missions/mission';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionApi());
  }, [dispatch]);

  return (
    <div className="Missions-container">
      <table>
        <tbody>
          <tr className="table-main">
            <th className="mission">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th className="member hide">Mission</th>
          </tr>
          {missions.map((mission) => (
            <Mission
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
