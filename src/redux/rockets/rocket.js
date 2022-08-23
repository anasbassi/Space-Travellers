const FETCH_ROCKET = 'spacetravelers/rockets/FETCH_ROCKET';

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.rocket;
    default:
      return state;
  }
};

export const fetchRocket = (rocket) => ({
  type: FETCH_ROCKET,
  rocket,
});

export const fetchRocketApi = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rocketsFetched = data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.description,
    flickerImage: rocket.flickr_image,
  }));
  dispatch(fetchRocket(rocketsFetched));
};

export default rocketReducer;
