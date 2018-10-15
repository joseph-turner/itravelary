import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/tripSettingsActions';
import TripDetails from '../TripDetails';

export class TripDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.calcFuelCost = this.calcFuelCost.bind(this);
    this.editDetails = this.editDetails.bind(this);
    this.updateTripField = this.updateTripField.bind(this);
    this.cancelDetails = this.cancelDetails.bind(this);
    this.submitDetails = this.submitDetails.bind(this);
  }

  calcFuelCost = e => {
    e.preventDefault();
    this.props.actions.calcFuelCost(e.target);
  }

  editDetails = e => {
    e.preventDefault();
    this.props.actions.editDetails();
  }

  cancelDetails = e => {
    e.preventDefault();
    this.props.actions.cancelDetails();
  }

  valuesFromList = list => {
    return Array.prototype.map.call(list, el => el.value);
  }

  submitDetails = e => {
    e.preventDefault();
    const tripDetailsForm = document.getElementById('tripDetails');

    const travelersList = tripDetailsForm.querySelectorAll('.input--travelers .input__field');
    const destinationsList = tripDetailsForm.querySelectorAll('.input--destinations .input__field');

    const travelers = this.valuesFromList(travelersList);
    const destinations = this.valuesFromList(destinationsList);

    const tripDetails = {
      name: tripDetailsForm.name.value,
      startDate: tripDetailsForm.startDate.value,
      endDate: tripDetailsForm.endDate.value,
      travelers: travelers,
      destinations: destinations,
      dailyLodging: tripDetailsForm.dailyLodging.value,
      dailyFood: tripDetailsForm.dailyFood.value,
      distance: tripDetailsForm.distance.value,
      extraMiles: tripDetailsForm.extraMiles.value,
      dailyCar: tripDetailsForm.dailyCar.value,
      vehicleFuelMileage: tripDetailsForm.vehicleFuelMileage.value,
      fuelGallonCost: tripDetailsForm.fuelGallonCost.value
    };

    this.props.actions.submitDetails(tripDetails);
  }

  updateTripField = e => {
    this.props.actions.updateTripField(e.target);
  }

  render() {
    return (
      <main className="main grid__row">
        <TripDetails
          trip={this.props.tripSettings}
          clickEdit={this.editDetails}
          clickCancel={this.cancelDetails}
          clickSubmit={this.submitDetails}
          onSubmit={this.calcFuelCost}
          onChange={this.updateTripField}

        />

        <p>{this.props.tripSettings.fuelCost}</p>
      </main>
    );
  }
}

TripDetailsPage.propTypes = {
  actions: object.isRequired,
  tripSettings: object
};

function mapStateToProps(state) {
  return {
    tripSettings: state.tripSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDetailsPage);
