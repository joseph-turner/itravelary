import TripType from '../types/TripType';

const trip = {
  type: TripType,
  resolve({ request }) {
    return (
      request.trip && {
        id: trip.id,
      }
    );
  },
};

export default trip;
