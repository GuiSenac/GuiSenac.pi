import React from 'react';
import Title from './Title';
import Description from './Description';
import Container from './Container';
import Card from './Card';

const Products = ({ products }) => {
  return (
    <>
      <Title>Papas Pizza a melhor pizza do mundo</Title>
      <Description>
        Bem-vindo ao Papas, casa das melhores pizzas
      </Description>
      
      <Container>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </Container>
    </>
  );
};

export default Products;
