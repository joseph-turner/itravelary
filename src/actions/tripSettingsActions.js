import { CALCULATE_FUEL_COSTS, EDIT_DETAILS, UPDATE_TRIP_FIELD, CANCEL_DETAILS, SUBMIT_DETAILS } from '../constants/actionTypes';

export function calcFuelCost(data) {
  return function (dispatch) {
    let { duration, miles, extraMiles, vehicleFuelMileage, fuelGallonCost } = data;

    duration = parseInt(duration.value);
    miles = parseInt(miles.value);
    extraMiles = parseInt(extraMiles.value);
    vehicleFuelMileage = parseInt(vehicleFuelMileage.value);
    fuelGallonCost = parseInt(fuelGallonCost.value);

    if (duration && miles && extraMiles && vehicleFuelMileage && fuelGallonCost) {

      const fuelCost = fuelGallonCost / vehicleFuelMileage * (miles + (extraMiles * duration));

      // console.log('Est. Fuel Cost: ' + fuelCost);

      return dispatch({
        type: CALCULATE_FUEL_COSTS,
        isEditing: false,
        fuelCost
      });
    }
    return dispatch({
      type: CALCULATE_FUEL_COSTS
    });
  };
}

export function updateTripField(data) {
  return function (dispatch) {
    // console.log(data);
    const { name, value } = data;
    let dataIndex = data.dataset.index;
    const update = {};

    if (dataIndex) {
      const unIndex = name.slice(0, -dataIndex.length);
      update[unIndex][dataIndex] = value;
    } else {
      update[name] = value;
    }

    return dispatch({
      type: UPDATE_TRIP_FIELD,
      update
    })
  }
}

export function editDetails() {
  return function (dispatch) {
    return dispatch({
      type: EDIT_DETAILS,
      isEditing: true
    });
  };
}

export function cancelDetails() {
  return dispatch => (
    dispatch({
      type: CANCEL_DETAILS,
      isEditing: false
    })
  );
}

export function submitDetails(trip) {
  return dispatch => (
    dispatch({
      type: SUBMIT_DETAILS,
      isEditing: false,
      trip
    })
  );
}
