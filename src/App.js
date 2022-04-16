function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>;
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://a.cdn-hotels.com/gdcs/production188/d1042/560f847f-c64a-4009-9422-1723c2739c36.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://a.cdn-hotels.com/gdcs/production125/d1185/1b45666a-9a1b-4770-aff7-cd230004670a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  },
  {
    name: 'Bibimbap',
    image: 'https://a.cdn-hotels.com/gdcs/production12/d29/cc49915a-a856-4e94-9ba4-c7e89a652d2e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nextinsight.net%2Fimages%2Fstories%2F2015_MYCC%2FMa_Maison%2FTonkatsu%2Fmamaisontonkatsu_millefeuille.jpg&f=1&nofb=1',
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodrepublic.com%2Fwp-content%2Fuploads%2F2014%2F10%2FKorean.food-Kimbap-03.jpg&f=1&nofb=1',
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => <Food key={dish.name} name={dish.name} picture={dish.image} />)}
  </div>
  );
}

export default App;