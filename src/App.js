import React from 'react';
function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>    
  )
}

const foodILike = [
  {
    name : 'Hand Made Burger',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Burger King',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Shack Shack',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Macdonalds',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Lotteria',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => 
      (<Food name = {dish.name} picture = {dish.image} />
      
      ))}
    
  </div>
  );
}

export default App;
