import React from 'react';
import PropTypes from 'prop-types';
import '../styles/mission.css';

const Mission = (props) => {
  const {
    id, name, description,
  } = props;

  return (
    <tr id={id} className="table-support">
      <td className="mission1 mission-name">{name}</td>
      <td className="mission-description">
        {description}
        {' '}
      </td>
      <td className="mission1 status-name">
        <span className="not">NOT A MEMBER</span>
        {' '}
      </td>
      <td className="mission1 member-name">
        <span className="join">Join Mission</span>
        {' '}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
