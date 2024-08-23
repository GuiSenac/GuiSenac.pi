import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const ProductContext = createContext();

// Provedor do contexto que envolverá o aplicativo
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, title: 'Produto 1' },
        { id: 2, title: 'Produto 2' }
    ]); // Inicialize com alguns produtos de teste
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

// Hook para usar o contexto de produtos
export const useProductContext = () => {
    return useContext(ProductContext);
};
