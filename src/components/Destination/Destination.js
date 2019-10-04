// @flow
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { updateDestination, removeDestination } from '../../actions';
import Input from '../Input/Input';
import s from './Destination.css';

type Props = {
  budget: {
    accommodations: string,
    activities: string,
    food: string,
  },
  destInd: number,
  duration: string,
  // onInputChange: Function,
  destName: string,
  transportation: string,
  tripId: string,
  updateDestination: Function,
  removeDestination: Function,
};

class Destination extends PureComponent<Props> {
  handleClick = e => {
    e.preventDefault();
    // this.setState((prevState: State) => ({
    //   flipped: !prevState.flipped,
    // }));
  };

  handleRemoveClick = e => {
    e.preventDefault();
    const { destInd, tripId } = this.props;
    this.props.removeDestination(tripId, destInd);
  };

  onInputChange = e => {
    e.preventDefault();
    const { destInd, tripId } = this.props;

    if (e.target.type === 'date') {
      if (!this.validateDates()) {
        // TODO: add error message to template
        // return this.dateError(e.target);
      }
    }
    return this.props.updateDestination(tripId, destInd, e.target);
  };

  validateDates = () => {
    const { destInd } = this.props;
    const arrival = (document.getElementById(`arrival${destInd}`): any).value;
    const departure = (document.getElementById(`departure${destInd}`): any)
      .value;
    if (arrival > departure) {
      return false;
    }
    return true;
  };

  render() {
    const { budget, destInd, destName, duration, transportation } = this.props;
    const transOpts = [
      { name: 'Plane', value: 1 },
      { name: 'Train', value: 2 },
      { name: 'Rental', value: 3 },
    ];
    return (
      <li className={s.dest}>
        <form className={`card__side card__side--front ${s.dest__form}`}>
          <Input
            id={`destName${destInd}`}
            label="Destination"
            onInputChange={this.onInputChange}
            value={destName}
          />
          <Input
            id={`arrival${destInd}`}
            type="date"
            label="When will you arrive?"
            onInputChange={this.onInputChange}
            value={duration}
          />
          <Input
            id={`departure${destInd}`}
            type="date"
            label="When will you leave?"
            onInputChange={this.onInputChange}
            value={duration}
          />
          <Input
            id={`budget.food${destInd}`}
            label="How much do you plan to spend on food there?"
            onInputChange={this.onInputChange}
            value={budget.food}
          />
          <Input
            id={`budget.accommodations${destInd}`}
            label="How much do you plan to spend on accommodations there?"
            onInputChange={this.onInputChange}
            value={budget.accommodations}
          />
          <Input
            id={`budget.activities${destInd}`}
            label="How much do you plan to spend on activities there?"
            onInputChange={this.onInputChange}
            value={budget.activities}
          />
          <Input
            id={`transportation${destInd}`}
            type="select"
            label="How are you getting there?"
            onInputChange={this.onInputChange}
            options={transOpts}
            value={transportation}
          />
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
          <button type="button" onClick={this.handleRemoveClick}>
            Remove
          </button>
        </form>
        <div className={`${s.dest__info} card__side--back`}>
          <h2 className={`${s.dest__info__title}`}>{destName}</h2>
          <p className="dest__duration">{duration}</p>
          <div className={`${s.dest__budget}`}>
            <div className={`${s.dest__budget__total}`}>
              {Number(budget.accommodations) +
                Number(budget.activities) +
                Number(budget.food)}
            </div>
            <div className={`${s.dest__budget__daily}`}>$150</div>
          </div>
          <button type="button" onClick={this.handleClick}>
            Edit
          </button>
        </div>
      </li>
    );
  }
}

const mapState = state => ({
  flipped: state.flipped,
});

function mapDispatch(dispatch: Function) {
  return bindActionCreators({ updateDestination, removeDestination }, dispatch);
}

export default connect(
  mapState,
  mapDispatch,
)(withStyles(s)(Destination));
