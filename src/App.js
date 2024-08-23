import React from 'react';
import Products from './componentes/Products';

const products = [
  {
    id: 1,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 2,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 3,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 4,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 5,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 6,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 7,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 8,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 9,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 10,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 11,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 12,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 13,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 14,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 15,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 16,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 17,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 18,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 19,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },
  {
    id: 20,
    title: 'Pizza da marguerita',
    description: 'Contem: queijo, manjericão e tomate',
    imageUrl: 'https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg'
  },


 
];

function App() {
  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
