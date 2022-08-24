import React from 'react';
import PropTypes from 'prop-types';
import '../styles/mission.css';

const Mission = (props) => {
  const {
    id, name, description,
  } = props;

  return (
    <table>
      <tbody>
        <tr className="table-main">
          <th className="mission">Mission</th>
          <th className="description">Description</th>
          <th className="status">Status</th>
          <th className="member hide">Mission</th>
        </tr>
        <tr className="table-support" id={id}>
          <td className="mission1 mission-name" id={id}>{name}</td>

          <td className="mission-description" id={id}>
            {description}
            {' '}
          </td>
          <td className="mission1 status-name" id={id}>
            <span className="not">NOT A MEMBER</span>
            {' '}
          </td>
          <td className="mission1 member-name" id={id}>
            <span className="join">Join Mission</span>
            {' '}
          </td>
        </tr>
      </tbody>

    </table>
  );
};

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
