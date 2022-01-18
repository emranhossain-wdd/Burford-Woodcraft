import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Product from '../../Shared/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://quiet-fjord-11684.herokuapp.com/explore')
            .then(res => res.json())
            .then(products => {
                setProducts(products)
                setIsLoading(false);
            })
    }, []);

    return (
        <div>
            <Header />
            <h1 className="text-indigo-600 text-3xl font-bold mt-12">Explore our products</h1>
            <div className="grid grid-cols-3 w-10/12 mx-auto gap-8 my-8">
                {
                    products.map(product => <Product
                        key={product._id}
                        isLoading={isLoading}
                        product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;