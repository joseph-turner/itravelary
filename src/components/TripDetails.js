import React from 'react';
import { object, func } from 'prop-types';
import Input from './Input';


function InputList(props) {
  const { list, onChange, name, isEditing } = props;
  return list.map((item, index) =>
    <Input
      id={name + index}
      className={"input--" + name}
      onChange={onChange}
      isEditing={isEditing}
      dataIndex={index}
      value={item}
      key={index}
    />
  );
}


const TripDetails = (props) => {
  const {
    trip,
    onChange,
    clickAddInput,
    clickRemoveInput,
    clickEdit,
    clickCancel,
    clickSubmit
  } = props

  return (
    <form id="tripDetails" className="trip__details">
      {!trip.isEditing
        ? <div className="trip__actions"><button className="button button--primary" onClick={clickEdit}>Edit</button></div>
        : <div className="trip__actions"><button className="button button--secondary" onClick={clickCancel}>Cancel</button><button className="button button--primary" onClick={clickSubmit}>Submit</button></div>
      }
      <Input
        id="name"
        className="input--trip-name"
        isEditing={trip.isEditing}
        onChange={onChange}
        value={trip.name}
      />

      <div className="trip__dates">
        <h2>Dates</h2>
        <div className="grid__row">
          <div className="grid__col">
            <Input
              label="From"
              id="startDate"
              type="date"
              isEditing={trip.isEditing}
              onChange={onChange}
              value={trip.startDate}
            />
          </div>

          <div className="grid__col">
            <Input
              label="To"
              id="endDate"
              type="date"
              isEditing={trip.isEditing}
              onChange={onChange}
              value={trip.endDate}
            />
          </div>
        </div>
      </div>

      <div className="trip__travelers input__list">
        <h2>Travelers</h2>
        <InputList
          list={trip.travelers}
          name="travelers"
          className="input--travelers"
          isEditing={trip.isEditing}
          onChange={onChange}
          onClickAdd={clickAddInput}
          onClickRemove={clickRemoveInput}
        />
      </div>

      <div className="trip__destinations input__list">
        <h2>Destinations</h2>
        <InputList
          list={trip.destinations}
          name="destinations"
          className="input--destinations"
          isEditing={trip.isEditing}
          onChange={onChange}
          onClickAdd={clickAddInput}
          onClickRemove={clickRemoveInput}
        />
      </div>

      <div className="trip__budget">
        <h2>Budget</h2>
        <Input
          label="Lodging (avg. per day)"
          id="dailyLodging"
          className="input--lodging"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.dailyLodging}
        />
        <Input
          label="Food (avg. per day)"
          id="dailyFood"
          className="input--food"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.dailyFood}
        />
        <Input
          label="Distance in Miles"
          id="distance"
          className="input--distance"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.distance}
        />
        <Input
          label="Extra daily driving allowance"
          id="extraMiles"
          className="input--extraMiles"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.extraMiles}
        />
        <Input
          label="Rental Car (daily)"
          id="dailyCar"
          className="input--dailyCar"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.dailyCar}
        />
        <Input
          label="Est. Car MPG"
          id="vehicleFuelMileage"
          className="input--vehicleFuelMileage"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.vehicleFuelMileage}
        />
        <Input
          label="Fuel cost / gallon"
          id="fuelGallonCost"
          className="input--fuelGallonCost"
          isEditing={trip.isEditing}
          onChange={onChange}
          value={trip.fuelGallonCost}
        />

      </div>

    </form>
  );
};

TripDetails.propTypes = {
  trip: object.isRequired,
  onChange: func.isRequired,
  clickAddInput: func,
  clickRemoveInput: func,
  clickEdit: func,
  clickCancel: func,
  clickSubmit: func
};

export default TripDetails;
