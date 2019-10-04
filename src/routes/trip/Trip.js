// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Input from '../../components/Input/Input';
import Destination from '../../components/Destination/Destination';
import { getTrip, updateTrip, addDestination } from '../../actions';
import s from './Trip.css';

type DestBudget = {
  activities: number,
  accommodations: number,
  food: number,
};

type DestinationType = {
  destName: string,
  duration: number,
  budget: DestBudget,
};

type Props = {
  addDestination: Function,
  tripId: number,
  trip: {
    origin: { name: string },
    destinations: Array<DestinationType>,
  },
  updateTrip: Function,
};

type State = {
  flipped: boolean,
  destinations: {},
};

class Trip extends PureComponent<Props, State> {
  handleAddClick = e => {
    e.preventDefault();
    this.props.addDestination(this.props.tripId);
  };

  updateTrip = e => {
    this.props.updateTrip(this.props.tripId, e.target);
  };

  renderDestinations = destArr =>
    destArr.map((dest, ind) => (
      <Destination
        key={dest.destName}
        destInd={ind}
        tripId={this.props.tripId}
        {...dest}
      />
    ));

  render() {
    const { trip } = this.props;

    return (
      <ul className={s.container}>
        <li className="origin">
          <Input
            id="origin"
            label="start"
            value={trip.origin}
            onInputChange={this.updateTrip}
          />
          <Input type="date" id="depart" />
        </li>
        {this.renderDestinations(trip.destinations)}
        <li>
          <button type="button" onClick={this.handleAddClick}>
            Add Destination
          </button>
        </li>
        <li className="return">
          <Input label="Return" type="date" id="return" />
        </li>
      </ul>
    );
  }
}

const mapState = (state, ownProps) => ({
  trip: getTrip(state, ownProps.tripId),
});

function mapDispatch(dispatch: Function) {
  return bindActionCreators({ updateTrip, addDestination }, dispatch);
}

export default connect(
  mapState,
  mapDispatch,
)(withStyles(s)(Trip));
