const FETCH_ROCKET = 'spacetravelers/rockets/FETCH_ROCKET';

const initialState = [
  {
    name: 'Tom and Jerry',
    type: 'Fred Wimbfrey',
    id: 1,
  },
  {
    name: 'Tom and Jerry part 2',
    type: 'Fred Wimbfrey',
    id: 2,
  },
  {
    name: 'Tom and Jerry part 3',
    type: 'Fred Wimbfrey',
    id: 3,
  },
];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return [
        ...state.data,
        action.rocket];
    default:
      return state;
  }
};

export const fetchRocket = (rocket) => ({
  type: FETCH_ROCKET,
  rocket,
});

// export const fetchRocketApi = () => async (dispatch) => {
//   const response = await fetch('https://api.spacexdata.com/v3/rockets');
//   const data = await response.json();
//   const rocketsFetched = data.map((rocket) => ({
//     id: rocket.rocket_id,
//     name: rocket.rocket_name,
//     type: rocket.rocket_type,
//     flickerImage: rocket.flickr_image,
//   }));
//   dispatch(fetchRocket(rocketsFetched));
// };

export default rocketReducer;
