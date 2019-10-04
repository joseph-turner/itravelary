// @flow

import {
  ADD_TRIP,
  UPDATE_TRIP,
  UPDATE_DESTINATION,
  ADD_DESTINATION,
  REMOVE_DESTINATION,
} from '../constants';

type TripState = {
  allIds: Array<string>,
  byIds: {},
};

declare type Trip = {
  name: string,
  dates: {
    departure: string,
    return: string,
  },
  travelers: {
    adults: number,
    children: number,
  },
  origin: string,
  transportation: string,
  budget?: {
    activities?: string,
    food?: string,
    accommodations?: string,
  },
  img: string,
};

type TripAction = {
  data: any,
  id: string,
  tripId: string,
  type: string,
  destInd: number,
};

const initialDestination = {
  destName: '',
  duration: 0,
  budget: {
    activities: '',
    food: '',
    accommodations: '',
  },
  transportation: null,
};

const initialStateTest = {
  allIds: ['1'],
  byIds: {
    '1': {
      name: 'Europe 2019',
      dates: {
        departure: '9/17',
        return: '10/02',
      },
      origin: 'Los Angeles',
      transportation: 'plane',
      destinations: [initialDestination],
      travelers: {
        adults: 2,
        children: 0,
      },
      img: '',
    },
  },
};

const initialTrip = {
  name: '',
  dates: {
    departure: '',
    return: '',
  },
  origin: '',
  transportation: '',
  destinations: [initialDestination],
  travelers: {
    adults: 0,
    children: 0,
  },
  img: '',
};

export default function trips(
  state: TripState = initialStateTest,
  action: TripAction,
) {
  switch (action.type) {
    case ADD_TRIP: {
      const newTripId = Math.max.apply(null, state.allIds) + 1;
      return {
        ...state,
        allIds: [...state.allIds, `${newTripId}`],
        byIds: {
          ...state.byIds,
          [newTripId]: initialTrip,
        },
      };
    }
    case UPDATE_TRIP:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.tripId]: {
            ...state.byIds[action.tripId],
            [action.data.id]: action.data.value,
          },
        },
      };

    case ADD_DESTINATION:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.tripId]: {
            ...state.byIds[action.tripId],
            destinations: [
              ...state.byIds[action.tripId].destinations,
              initialDestination,
            ],
          },
        },
      };

    case UPDATE_DESTINATION:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.tripId]: {
            ...state.byIds[action.tripId],
            destinations: state.byIds[action.tripId].destinations.map(
              (dest, ind) => {
                if (action.destInd === ind) {
                  return {
                    ...dest,
                    [action.data.id]: action.data.value,
                  };
                }
                return dest;
              },
            ),
          },
        },
      };

    case REMOVE_DESTINATION:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.tripId]: {
            ...state.byIds[action.tripId],
            destinations: state.byIds[action.tripId].destinations.slice(
              0,
              state.byIds[action.tripId].destinations.length - 1,
            ),
          },
        },
      };

    default:
      return state;
  }
}
