const FETCH_ROCKET = 'spacetravelers/rockets/FETCH_ROCKET';
const BOOK_ROCKET = 'spacetravelers/rockets/BOOK_ROCKET';
const UNBOOK_ROCKET = 'spacetravelers/rockets/UNBOOK_ROCKET';

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.rocket;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case UNBOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export const fetchRocket = (rocket) => ({
  type: FETCH_ROCKET,
  rocket,
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  payload: id,
});

export const unbookRocket = (id) => ({
  type: UNBOOK_ROCKET,
  payload: id,
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
