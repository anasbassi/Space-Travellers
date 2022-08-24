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
  const result = await fetch('https://api.spacexdata.com/v3/rockets');
  const json = await result.json();
  const rockets = json.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
  dispatch(fetchRocket(rockets));
};

export default rocketReducer;
