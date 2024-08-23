import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 250px; 
  height: 250px; 
  object-fit: cover; 
  border-radius: 8px; 
  margin: 10px; 
`;

const Image = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
