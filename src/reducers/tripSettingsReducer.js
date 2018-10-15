import { CALCULATE_FUEL_COSTS, EDIT_DETAILS, UPDATE_TRIP_FIELD, CANCEL_DETAILS, SUBMIT_DETAILS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function tripSavingsReducer(state = initialState.tripSettings, action) {
  let newState;

  switch (action.type) {
    case CALCULATE_FUEL_COSTS:
      newState = objectAssign({}, state, {fuelCost: action.fuelCost, isEditing: action.isEditing});
      return newState;

    case UPDATE_TRIP_FIELD:
      newState = objectAssign({}, state, action.update);
      return newState;

    case EDIT_DETAILS:
      newState = objectAssign({}, state, {isEditing: action.isEditing});
      return newState;

    case CANCEL_DETAILS:
      newState = objectAssign({}, state, {isEditing: action.isEditing});
      return newState;

    case SUBMIT_DETAILS:
      newState = objectAssign({}, state, {isEditing: action.isEditing}, action.trip);
      return newState;

    default:
      return state;
  }
}
