import PropTypes from 'prop-types';

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  img: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    userPic: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired
});