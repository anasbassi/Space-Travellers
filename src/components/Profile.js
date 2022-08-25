import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  // const missions = useSelector((state) => state.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  // const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="container">
      <div className="display-section">
        {/* <h1>My Missions</h1>
        <ul>
          {reservedMissions.map((mission) => <li key={mission.id}>{mission.name}</li>)}
        </ul> */}
        <h1>My Rockets</h1>
        <ul>
          {reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
      <div className="display-section">
        <h1>My Rockets</h1>
        <ul>
          {reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
