import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://a.cdn-hotels.com/gdcs/production188/d1042/560f847f-c64a-4009-9422-1723c2739c36.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://a.cdn-hotels.com/gdcs/production125/d1185/1b45666a-9a1b-4770-aff7-cd230004670a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://a.cdn-hotels.com/gdcs/production12/d29/cc49915a-a856-4e94-9ba4-c7e89a652d2e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nextinsight.net%2Fimages%2Fstories%2F2015_MYCC%2FMa_Maison%2FTonkatsu%2Fmamaisontonkatsu_millefeuille.jpg&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodrepublic.com%2Fwp-content%2Fuploads%2F2014%2F10%2FKorean.food-Kimbap-03.jpg&f=1&nofb=1',
    rating: 5
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish =>
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    )}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;