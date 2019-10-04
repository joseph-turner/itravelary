import { ADD_DESTINATION, REMOVE_DESTINATION } from '../constants';

const initialState = {
  origin: {
    name: 'Los Angeles',
  },
  destinations: [
    {
      id: 1,
      name: 'Paris',
      adults: 2,
      hasChildren: false,
      duration: 3,
    },
  ],
};

export default function trip(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_DESTINATION:
      return [...state, action.data];

    case REMOVE_DESTINATION:
      newState = state.filter(el => el.id !== action.id);
      return newState;
    default:
      return state;
  }
}
