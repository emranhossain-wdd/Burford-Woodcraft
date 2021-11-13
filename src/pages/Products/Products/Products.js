import { RefreshIcon } from '@heroicons/react/outline';
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

    if (isLoading) {
        return <div className="flex justify-center"><RefreshIcon className="h-20 w-20 text-indigo-600 animate-spin" aria-hidden="true" /></div>
    }

    return (
        <div>
            <Header />
            <h1 className="text-indigo-600 text-3xl font-bold mt-12">Explore our products</h1>
            <div className="grid grid-cols-3 w-10/12 mx-auto gap-8 my-8">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;