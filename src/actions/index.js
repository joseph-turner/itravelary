/* eslint-disable import/prefer-default-export */
import {
  ADD_TRIP,
  REMOVE_TRIP,
  UPDATE_TRIP,
  ADD_DESTINATION,
  REMOVE_DESTINATION,
  UPDATE_DESTINATION,
} from '../constants';

export const addTrip = () => ({
  type: ADD_TRIP,
});

export const removeTrip = id => ({
  id,
  type: REMOVE_TRIP,
});

export const updateDestination = (tripId, destInd, data) => ({
  data,
  destInd,
  tripId,
  type: UPDATE_DESTINATION,
});

export const updateTrip = (tripId, data) => ({
  data,
  tripId,
  type: UPDATE_TRIP,
});

export const addDestination = tripId => ({
  tripId,
  type: ADD_DESTINATION,
});

export const removeDestination = (tripId, destInd) => ({
  destInd,
  tripId,
  type: REMOVE_DESTINATION,
});

export const getTripsState = store => store.trips;
export const getLastTripId = store => Math.max.apply(null, store.allIds) + 1;
export const getNewTrip = store => {
  addTrip();
  return store.trips.byIds[store.trips.allIds[store.trips.allIds.length]];
};

export const getTrip = (store, id) =>
  getTripsState(store).byIds[id]
    ? getTripsState(store).byIds[id]
    : getNewTrip(store);
