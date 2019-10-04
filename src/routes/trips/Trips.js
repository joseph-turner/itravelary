// @flow
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { addTrip, getLastTripId } from '../../actions';
import s from './Trips.css';

type Props = {
  // addTrip: Function,
  newTripId: number,
  trips: {
    allIds: Array<string>,
    byIds: {},
  },
};

class Trips extends PureComponent<Props> {
  renderTrips = () => {
    const { trips } = this.props;
    return trips.allIds.map(id => {
      const trip = trips.byIds[id];
      return (
        <li className="trip" key={id}>
          <a href={`/trips/${id}`}>{trip.name}</a>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className={s.root}>
        {this.renderTrips()}
        <li>
          <a href={`/trips/${this.props.newTripId}`}>Create New Trip</a>
        </li>
      </ul>
    );
  }
}

const mapState = state => ({
  newTripId: getLastTripId(state.trips),
  trips: state.trips,
});

const mapDispatch = (dispatch: Function) =>
  bindActionCreators({ addTrip }, dispatch);

export default connect(
  mapState,
  mapDispatch,
)(withStyles(s)(Trips));
