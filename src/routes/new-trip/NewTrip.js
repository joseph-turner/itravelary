// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import router from '../../router';
import * as actions from '../../actions';

import Input from '../../components/Input/Input';

type Props = {
  addTrip: Function,
  // newTripId: number,
};

class NewTrip extends PureComponent<Props> {
  createTrip = e => {
    e.preventDefault();
    this.props.addTrip([...e.target.elements]);
    // router.resolve({ path: `/trips/${this.props.newTripId}` }).then(res => res);
  };

  render() {
    return (
      <form className="new-trip" onSubmit={this.createTrip}>
        <Input id="origin" label="Where you starting from?" />
        <Input id="destination" label="Where you going?" />
        <Input id="departureDate" label="When you going?" type="date" />
        <Input id="returnDate" label="When you comin back?" type="date" />
        <Input id="adults" label="How many are going?" type="number" />
        <Input id="children" label="Kids?" type="number" />
        <Input
          id="transportation"
          label="How you gettin there?"
          type="select"
          options={[
            { name: 'Plane' },
            { name: 'Train' },
            { name: 'Automobile' },
          ]}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapState = state => ({
  newTripId: state.trips.allIds.length + 1,
});

const mapDispatch = (dispatch: Function) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapState,
  mapDispatch,
)(withStyles()(NewTrip));
