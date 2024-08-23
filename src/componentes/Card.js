import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  background: gray;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px; 
  text-align: center;
  margin: 10px; 
  padding: 16px;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 250px; 
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const Card = ({ product }) => (
  <CardContainer>
    <CardImage src={product.imageUrl} alt={product.title} />
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardContainer>
);

export default Card;
