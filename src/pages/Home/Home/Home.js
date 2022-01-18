import { MinusIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../../Shared/Product/Product';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://quiet-fjord-11684.herokuapp.com/home')
            .then(res => res.json())
            .then(products => {
                setHomeProducts(products)
                setIsLoading(false);
            })
    }, []);

    return (
        <div>
            <Header />
            <HeroCarousel />
            <Services />
            <div className="my-6 tracking-wider">
                <h1 className="text-3xl text-indigo-600 font-bold">OUR PRODUCTS</h1>
                <p>Browse through our most popular products!</p>
                <MinusIcon className="h-8 w-8 text-indigo-600 mx-auto" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-3 w-10/12 mx-auto gap-4">
                {
                    homeProducts.map(product => <Product
                        key={product._id}
                        isLoading={isLoading}
                        product={product} />)
                }
            </div>
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;