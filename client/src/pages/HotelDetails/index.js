import { useParams } from 'react-router-dom';

const HotelDetails = () => {
  const { hotelId } = useParams();

  return (
    <div>
      <h1>Details: {hotelId}</h1>
    </div>
  );
};

export default HotelDetails;
